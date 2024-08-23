import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import detailsMedical from "../public/js/detailsMedical.js";
import detailsBeauty from "../public/js/detailsBeauty.js";
import detailsWellness from "../public/js/detailsWellness.js";

const GOOGLE_MAPS_API_KEY = 'AIzaSyAtq0oi6PV5zq_GXKDx-A_BnOfEfVTBJXk'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function updatePlaceDetails(place) {
    if (!place.place_id) {
        const searchResponse = await axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json', {
            params: {
                input: place.Nama,
                inputtype: 'textquery',
                fields: 'place_id',
                key: GOOGLE_MAPS_API_KEY
            }
        });

        if (searchResponse.data.candidates.length > 0) {
            place.place_id = searchResponse.data.candidates[0].place_id;
        } else {
            console.error('Place not found');
            return;
        }
    }

    const detailsResponse = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
        params: {
            place_id: place.place_id,
            fields: 'name,rating,review',
            key: GOOGLE_MAPS_API_KEY
        }
    });

    if (detailsResponse.data.result) {
        const result = detailsResponse.data.result;
        place.rating = result.rating;
        place.reviewsText = result.reviews.map(review => ({
            author_name: review.author_name,
            author_url: review.author_url,
            language: review.language,
            original_language: review.original_language,
            profile_photo_url: review.profile_photo_url,
            rating: review.rating,
            relative_time_description: review.relative_time_description,
            text: review.text,
            time: review.time,
            translated: review.translated
        }));
    } else {
        console.error('Details not found');
    }
}

async function updateAllPlaces() {
    const allDetails = [
        { array: detailsMedical, file: path.resolve(__dirname, "../public/js/detailsMedical.js") },
        { array: detailsBeauty, file: path.resolve(__dirname, "../public/js/detailsBeauty.js") },
        { array: detailsWellness, file: path.resolve(__dirname, "../public/js/detailsWellness.js") }
    ];

    for (const details of allDetails) {
        if (Array.isArray(details.array.info)) {
            for (const place of details.array.info) {
                await updatePlaceDetails(place);
                console.log('Updated place details:', place);
            }
            const dir = path.dirname(details.file);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            const replacer = (key, value) => {
                if (typeof value === 'object' && !Array.isArray(value)) {
                    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, v]));
                }
                return value;
            };

            const arrayName = Object.keys({ detailsMedical, detailsBeauty, detailsWellness }).find(key => details.array === eval(key));

            const fileContent = `const ${arrayName} = ${JSON.stringify(details.array, replacer, 2).replace(/"([^"]+)":/g, '$1:')};\nexport default ${arrayName};`;
            fs.writeFileSync(details.file, fileContent);
        } else {
            console.error(`details.array.info is not iterable for file: ${details.file}`);
        }
    }
}

updateAllPlaces().catch(error => {
    console.error('Error updating places:', error);
}).finally(() => {
    console.log("Finished updating places");
    });