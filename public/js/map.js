
const mapBounds = [
    { lat: -6.3014897268225445, lng: 106.69998806230103 }, //TOll
    { lat: - 6.309217160868853, lng: 106.70650074544457 },
    { lat: - 6.3457350359951565, lng: 106.70900436795642 },
    { lat: -6.346283202023245, lng: 106.67177855877847 },
    { lat: -6.339416434449146, lng: 106.67214761859503 },
    { lat: -6.331418448454544, lng: 106.67343819607758 },
    { lat: -6.32738168205835, lng: 106.67154028801502 },
    { lat: -6.325646240081407, lng: 106.66895913304991 },
    { lat: -6.324325791195333, lng: 106.66345519966845 },
    { lat: -6.322477156878111, lng: 106.66250624540795 },
    { lat: -6.32062851616291, lng: 106.66273399437546 },
    { lat: -6.320930335398487, lng: 106.6588622610094 },
    { lat: -6.322062156368395, lng: 106.6573059763981 },
    { lat: -6.3224394294746, lng: 106.65582560810928 },
    { lat: -6.322778975034844, lng: 106.65332036946668 },
    { lat: -6.323269429339362, lng: 106.64447611789508 },
    { lat: -6.324174882217734, lng: 106.64291983328378 },
    { lat: -6.325080333510266, lng: 106.6399211385449 },
    { lat: -6.325695735038376, lng: 106.6381502543559 },
    { lat: -6.326035278459913, lng: 106.6373910911309 },
    { lat: -6.326186186575659, lng: 106.63644213709959 },
    { lat: -6.3259975514241, lng: 106.63469606168204 },
    { lat: -6.325959824385514, lng: 106.63249448832946 },
    { lat: -6.325959824385514, lng: 106.63165940878191 },
    { lat: -6.327129361300678, lng: 106.62930600278433 },
    { lat: -6.327921626739304, lng: 106.62816725794677 },
    { lat: -6.328017324263055, lng: 106.62741612161562 },
    { lat: -6.3291491297154066, lng: 106.62058365259035 },
    { lat: -6.331035466625153, lng: 106.61549725898264 },
    { lat: -6.332242718631482, lng: 106.61507971920888 }, //Hiera
    { lat: -6.3382386276845954, lng: 106.59344076051325 },
    { lat: -6.33122365841108, lng: 106.59190016786913 },
    { lat: -6.325276883933458, lng: 106.5933332773055 },
    { lat: -6.321324199569559, lng: 106.59304665541823 },
    { lat: -6.32143102927395, lng: 106.59351241598506 },
    { lat: -6.320880175697373, lng: 106.59329894015711 },
    { lat: -6.317809045698733, lng: 106.59347060152965 },
    { lat: -6.308638201850198, lng: 106.59415724701987 },
    { lat: -6.303622305729227, lng: 106.59201400926592 },
    { lat: -6.3014820874672735, lng: 106.59755929891142 },
    { lat: -6.294645127787306, lng: 106.59811486792843 },
    { lat: -6.2930238099574956, lng: 106.59939137114073 },
    { lat: -6.290082053685635, lng: 106.60098159400935 },
    { lat: -6.285366107493767, lng: 106.60334641943065 },
    { lat: -6.283472745874428, lng: 106.60371679877532 },
    { lat: -6.282867920571838, lng: 106.60580679650603 },
    { lat: -6.282760943393676, lng: 106.60940566689321 },
    { lat: -6.278292925512158, lng: 106.61387935954647 },
    { lat: -6.279055244072174, lng: 106.61643575534833 },
    { lat: -6.279931212527041, lng: 106.62053388237706 },
    { lat: -6.280037282125655, lng: 106.62101407710624 },
    { lat: -6.278512274627524, lng: 106.62046692658035 },
    { lat: -6.276933928497905, lng: 106.62099263953378 },
    { lat: -6.275922505978579, lng: 106.62149869399788 },
    { lat: -6.27438390298868, lng: 106.62191744337588 },
    { lat: -6.273841302783082, lng: 106.62206699672515 },
    { lat: -6.27374467528995, lng: 106.62453462698834 },
    { lat: -6.273937930258302, lng: 106.62546933542134 },
    { lat: -6.27422781257647, lng: 106.6259179954692 },
    { lat: -6.274807384807987, lng: 106.62584857329428 },
    { lat: -6.275164837857519, lng: 106.62653651815252 },
    { lat: -6.275330613101619, lng: 106.6271879810865 },
    { lat: -6.275807216634565, lng: 106.62794888979333 },
    { lat: -6.275340974052619, lng: 106.62859514102381 },
    { lat: -6.273947424292954, lng: 106.62831370903635 },
    { lat: -6.273836559828457, lng: 106.62845059554995 },
    { lat: -6.273796903839001, lng: 106.64930179553293 },
    { lat: -6.2730656384557175, lng: 106.65031123700051 },
    { lat: -6.270481330403994, lng: 106.65178633970811 },
    { lat: -6.269051707681118, lng: 106.65174946214042 },
    { lat: -6.2681023774364295, lng: 106.6500070778604 },
    { lat: -6.26612847568578, lng: 106.64729781142931 },
    { lat: -6.260053707954297, lng: 106.64911425142287 },
    { lat: -6.262515243681187, lng: 106.65398189189519 },
    { lat: -6.263510888862522, lng: 106.66216361010378 },
    { lat: -6.271151362182371, lng: 106.66870516328147 },
    { lat: -6.271755198438493, lng: 106.67756511271236 },
    { lat: -6.2744641558736385, lng: 106.68038545588182 },
    { lat: -6.281427630656982, lng: 106.68627123760002 },
    { lat: -6.28666370938345, lng: 106.685070437474 },
    { lat: -6.299701678384582, lng: 106.69597810319142 },
    { lat: -6.3014897268225445, lng: 106.69998806230103 }, //TOll

];


let map;
let service;
let infowindow;
let currentSelection;
let markers = [];
const mapCenter = { lat: -6.302630388, lng: 106.6505807 };

function loadGoogleMapsAPI(apiKey, callback) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=${callback}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: mapCenter,
        zoom: 14,
        minZoom: 14,
        restriction: {
            latLngBounds: {
                west: 106.58962119204718,
                north: -6.256977574626499,
                south: -6.348283202023245,
                east: 106.71154028801502,
            }
        },
        disableDefaultUI: true,
        mapId: "f7d3a585e09d991",
        clickableIcons: false,
    });

    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);

    const BSDBoundary = new google.maps.Polyline({
        path: mapBounds,
        geodesic: true,
        strokeColor: "#1e2d80",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    BSDBoundary.setMap(map);
    const centerControlDiv = document.createElement("div");
    const centerControl = createCenterControl(map);
    centerControlDiv.classList.add("px-2");
    centerControlDiv.appendChild(centerControl);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
}

function createCenterControl(map) {
    const controlDiv = document.createElement("div");
    controlDiv.classList.add("px-2");
    controlDiv.classList.add("flex-row")
    controlDiv.classList.add("d-flex")


    const controlButton = document.createElement("button");
    controlButton.classList.add("px-2");
    controlButton.style.backgroundColor = "#fff";
    controlButton.style.border = "2px solid #fff";
    controlButton.style.borderRadius = "3px";
    controlButton.style.color = "rgb(25,25,25)";
    controlButton.style.cursor = "pointer";
    controlButton.style.fontFamily = "Roboto,Arial,sans-serif";
    controlButton.style.fontSize = "16px";
    controlButton.style.lineHeight = "38px";
    controlButton.style.margin = "8px 0 22px";
    controlButton.style.padding = "0 5px";
    controlButton.style.textAlign = "center";
    controlButton.textContent = "Find Place";
    controlButton.title = "Click to find places";
    controlButton.type = "button";



    const dropdown = document.createElement("div");
    dropdown.classList.add("px-2");
    dropdown.classList.add("flex-column");
    dropdown.classList.add("d-flex")
    dropdown.style.margin = "8px 0 22px";
    dropdown.style.padding = "0 5px";
    dropdown.style.fontSize = "16px";
    dropdown.style.lineHeight = "38px";

    const revealButton = document.createElement("button");
    revealButton.classList.add("dropbtn");
    revealButton.innerHTML = "Subcategories";
    dropdown.appendChild(revealButton);

    const options = [
        { value: 'hospital', text: 'Hospital' },
        { value: 'medical clinc', text: 'Clinic' },
        { value: 'dentist', text: 'Dental Clinic' },
        { value: 'pharmacy', text: 'Pharmacy' },
        { value: 'doctor', text: 'Doctor' }

    ];

    const dropdownContent = document.createElement("div");
    dropdownContent.id = "myDropdown";
    dropdownContent.classList.add("vertical-menu");
    dropdownContent.style.display = "none";
    dropdown.appendChild(dropdownContent);

    revealButton.addEventListener("click", () => {
        if (dropdownContent.style.display === "none") {
            dropdownContent.style.display = "block";
        } else {
            dropdownContent.style.display = "none";
        }
    });

    options.forEach(option => {
        const button = document.createElement("button");
        button.value = option.value;
        button.textContent = option.text;
        button.classList.add("vertical-menu-long")
        button.style.margin = "5px";
        button.style.padding = "10px";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => {
            findPlace(button.value);
        });

        dropdownContent.appendChild(button);
    });

    controlDiv.appendChild(dropdown);

    return controlDiv;
}



// Function to find places based on the type
async function findPlace(type) {

    if (currentSelection === type) {

    } else {
        currentSelection = type;
        clearMarkers();
    }



    if (!service) {
        console.error('PlacesService is not initialized.');
        return;
    }

    const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-6.328292948434564, 106.58962119204718), // South West
        new google.maps.LatLng(-6.256977574626499, 106.70244855795238)  // North East
    );

    const BSDPolygon = new google.maps.Polygon({
        paths: mapBounds,
    });

    const request = {
        bounds: bounds,
        type: [type],
    };

    service.nearbySearch(request, (results, status, pagination) => { //Apparenrtly doesn't provide a lot of details i.e Website 
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            processResults(request.type, results, service, map, BSDPolygon);
            if (pagination && pagination.hasNextPage) {
                setTimeout(() => {
                    pagination.nextPage();
                }, 2000); //2 Seconds delay
            }

        } else {
            console.error('Place search failed:', status);
        }
    });
}

async function processResults(type, results, service, map, polygon) {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    for (let i = results.length - 1; i >= 0; i--) {
        const currentPlace = results[i]
        if (currentPlace.types[0] !== type[0]) {
            console.log("Type Mismatch: ", currentPlace.types[0], " vs ", type)
        } else {
            console.log("Type Match: ", currentPlace.types[0], " vs ", type)
            if (google.maps.geometry.poly.containsLocation(currentPlace.geometry.location, polygon)) {
                const detailsRequest = {
                    placeId: currentPlace.place_id,
                    fields: ['website']
                };

                service.getDetails(detailsRequest, (placeDetails, detailsStatus) => {
                    if (detailsStatus === google.maps.places.PlacesServiceStatus.OK) {
                        currentPlace.website = placeDetails.website;

                        const marker = new AdvancedMarkerElement({
                            map: map,
                            content: buildContent(currentPlace, type),
                            position: currentPlace.geometry.location
                        });

                        //console.log(currentPlace)

                        marker.addListener("click", () => {
                            toggleHighlight(marker, currentPlace);
                        });

                        // Check if the place has photos
                        if (currentPlace.photos && currentPlace.photos.length > 0) {
                            const photoUrl = currentPlace.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 });
                            //console.log('Photo URL:', photoUrl);
                        }

                        markers.push(marker);
                    } else {
                        console.error('Details request failed:', detailsStatus);
                    }
                });
            }
        }
        //currentPlace.moreDetails = new google.maps.places.Place(currentPlace.id);

    }

    if (results.length > 0) {
        console.log(results.length)
        // map.setCenter(-6.2926352615305315, 106.64603487500078);
        map.setZoom(14);
    }
}

// Function to clear existing markers
function clearMarkers() {
    markers.forEach(marker => marker.setMap(null));
    markers = [];
}

function toggleHighlight(markerView, property) {
    const innerDiv = markerView.content.querySelector('.details-container');
    const iconDiv = markerView.content.querySelector('.icon');
    //console.log(innerDiv)
    if (markerView.content.classList.contains("highlight")) {
        markerView.content.classList.remove("highlight");
        markerView.zIndex = null;
        innerDiv.style.opacity = 0;
        iconDiv.style.opacity = 1;

    } else {
        markerView.content.classList.add("highlight");
        markerView.zIndex = 100;
        innerDiv.style.opacity = 1;
        iconDiv.style.opacity = 0;

    }
}

function buildContent(property, type) {
    const content = document.createElement("div");
    //console.log(property)
    content.classList.add("property");
    content.classList.add("rounded-3");
    if (property.photos && property.photos.length > 0) {
        const photoUrl = property.photos[0].getUrl({ maxWidth: 300, maxHeight: 300 });
        //console.log('Photo URL:', photoUrl);
        content.style.backgroundImage = `url(${photoUrl})`;
    }

    content.innerHTML = `
        <div class="icon rounded-3">
            <i aria-hidden="true" class="fa fa-icon fa-house-medical" title="${property.name}"></i>
            <span class="fa-sr-only">${property.name}</span>
        </div>
        <div class="details-container">
            <div class="details">
                <div class="price">${property.name}</div>
                <div class="address">${property.vicinity}</div>
                <div class="features">
                     <div>
                        <i aria-hidden="true" class="fa fa-star fa-lg star" title="size"></i>
                        <span class="fa-sr-only">size</span>
                        <span>${property.rating ? `Rating: ${generateStars(property.rating)} | ${property.rating} Stars` : 'No rating available'}</span>
                    </div>
                    <div>
                        <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
                        <span class="fa-sr-only">bedroom</span>
                        <span>${property.types[0]}</span>
                    </div>

                </div>
                ${property.website ? `
                    <div>
                        <a href="${property.website}" target="_blank">Website</a>               
                    </div>` : ''} 
            </div>
        </div>

    `;
    return content;
}

function generateStars(rating) {
    const fullStar = '<span class="gold-star">★</span>';
    const emptyStar = '<span>☆</span>';
    let stars = '';

    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? fullStar : emptyStar;
    }

    return stars;
}


loadGoogleMapsAPI('AIzaSyAtq0oi6PV5zq_GXKDx-A_BnOfEfVTBJXk', 'initMap');

//Add KEKA 
