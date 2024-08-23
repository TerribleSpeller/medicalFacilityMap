import fs from 'fs';
import axios from 'axios';

// Create an object array with the selected text
import detailsMedical from "../public/js/detailsMedical.js";
import detailsBeauty from "../public/js/detailsBeauty.js";
import detailsWellness from "../public/js/detailsWellness.js";


// Google Maps API key
const apiKey = 'API KEY';

// Function to get place details
async function getPlaceDetails(placeId) {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
    const response = await axios.get(url);
    return response.data.result;
}

// Function to search for a place by name
async function searchPlaceByName(name) {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(name)}&key=${apiKey}`;
    const response = await axios.get(url);
    if (response.data.results.length > 0) {
        return response.data.results[0].place_id;
    } else {
        throw new Error('Place not found');
    }
}

async function processPlaces() {
    const results = [];
    const notFound = [];
    for (let place of detailsMedical.info) {
        try {
            const placeId = await searchPlaceByName(place.Nama);
            const placeDetails = await getPlaceDetails(placeId);
            results.push({ Nama: place.Nama, Details: placeDetails });
        } catch (error) {
            if (error.message === 'Place not found') {
                notFound.push({ Nama: place.Nama });
            } else {
                console.error(`Error fetching details for ${place.Nama}:`, error.message);
            }
        }
    }
    if (notFound.length > 0) {
        console.log('The following places could not be found:', notFound);
    }
    return { results, notFound };
}

// Save results to a file
async function saveResultsToFile() {
    const { results, notFound } = await processPlaces();
    fs.writeFileSync('results/placeDetailsMed.json', JSON.stringify(results, null, 2));
    fs.writeFileSync('results/notFoundPlacesMed.json', JSON.stringify(notFound, null, 2));
    console.log('Place details saved to placeDetails.json');
    console.log('Not found places saved to notFoundPlaces.json');
}

// Start processing places and save results
saveResultsToFile();