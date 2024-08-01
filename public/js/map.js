// let map;
// let service;
// let infowindow;
// let markers = [];


// function createCenterControl(map) {
//   const controlButton = document.createElement("button");

//   // Set CSS for the control.
//   controlButton.style.backgroundColor = "#fff";
//   controlButton.style.border = "2px solid #fff";
//   controlButton.style.borderRadius = "3px";
//   //controlButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
//   controlButton.style.color = "rgb(25,25,25)";
//   controlButton.style.cursor = "pointer";
//   controlButton.style.fontFamily = "Roboto,Arial,sans-serif";
//   controlButton.style.fontSize = "16px";
//   controlButton.style.lineHeight = "38px";
//   controlButton.style.margin = "8px 0 22px";
//   controlButton.style.padding = "0 5px";
//   controlButton.style.textAlign = "center";
//   controlButton.textContent = "Hospitals";
//   controlButton.title = "Click to recenter the map";
//   controlButton.type = "button";
//   // Setup the click event listeners: simply set the map to Chicago.
//   controlButton.addEventListener("click", () => {
//     findPlace();
//   });
//   return controlButton;
// }


// const mapBounds = [
//   { lat: -6.2734402245499155, lng: 106.64923458292796 },
//   { lat: -6.2683914609116504, lng: 106.65009413216411 },
//   { lat: -6.267537049921678, lng: 106.64931272376761 },
//   { lat: -6.2645854375543575, lng: 106.65079739972096 },
//   { lat: -6.264041717665858, lng: 106.66181525811155 },
//   { lat: -6.263731020332421, lng: 106.66814466612315 },
//   { lat: -6.269944931853159, lng: 106.67072331383159 },
//   { lat: -6.269944931853159, lng: 106.67634945428635 },
//   { lat: -6.272508148788864, lng: 106.67853739779655 },
//   { lat: -6.280430739609403, lng: 106.68455424244955 },
//   { lat: -6.283615276467017, lng: 106.68369469321341 },
//   { lat: -6.285867741989232, lng: 106.68596077756325 },
//   { lat: -6.29029497337564, lng: 106.68525751033086 },
//   { lat: -6.29332410996968, lng: 106.69119621414424 },
//   { lat: -6.302411413750834, lng: 106.69932286146778 },
//   { lat: -6.3097122091758395, lng: 106.69658793208006 },
//   { lat: -6.314294570789745, lng: 106.70088567826079 },
//   { lat: -6.31362460851977, lng: 106.69913768179694 },
//   { lat: -6.323020687185539, lng: 106.69398973573266 },
//   //{ lat: -6.34713792595729,  lng: 106.70967309673793 },
//   { lat: -6.32300980899882, lng: 106.6748406935761 },
//   { lat: -6.311419512791381, lng: 106.6594885860642 },
//   { lat: -6.317701113430978, lng: 106.65430532249036 },
//   { lat: -6.3183789794551855, lng: 106.6483036494857 },
//   { lat: -6.319599136040371, lng: 106.63830086105615 },
//   { lat: -6.321597947680509, lng: 106.60310765619613 },
//   { lat: -6.308447270178063, lng: 106.59651490933496 },
//   { lat: -6.296697241672764, lng: 106.60288032009747 },
//   { lat: -6.2778038004479635, lng: 106.61355925204602 },
//   { lat: -6.279752662865116, lng: 106.62058481830077 },
//   { lat: -6.277749665276721, lng: 106.62401590879729 },
//   { lat: -6.27390605373877, lng: 106.6334377922242 },
//   { lat: -6.273689511400011, lng: 106.64776123350327 },
//   { lat: -6.2734402245499155, lng: 106.64923458292796 },

// ];


// async function initMap() {
//   const { Map } = await google.maps.importLibrary("maps");
//   map = new Map(document.getElementById("map"), {
//     center: { lat: -6.29447675559863, lng: 106.63994192813145 },
//     zoom: 14,
//     minZoom: 14,
//     restriction: {
//       latLngBounds: {
//         west: 106.58962119204718,
//         north: -6.256977574626499,
//         south: -6.328292948434564,
//         east: 106.70244855795238,
//       }
//     },
//     disableDefaultUI: true,
//     mapId: "f7d3a585e09d991",
//   });
//   infowindow = new google.maps.InfoWindow();
//   service = new google.maps.places.PlacesService(map);

//   // Create the places service.
//   const service = new google.maps.places.PlacesService(map);
//   let getNextPage;
//   const moreButton = document.getElementById("more");

//   moreButton.onclick = function () {
//     moreButton.disabled = true;
//     if (getNextPage) {
//       getNextPage();
//     }
//   };

//   // Perform a nearby search.
//   service.nearbySearch(
//     { location: pyrmont, radius: 1500, type: "hospital" },
//     (results, status, pagination) => {
//       if (status !== "OK" || !results) return;

//       addPlaces(results, map);
//       moreButton.disabled = !pagination || !pagination.hasNextPage;
//       if (pagination && pagination.hasNextPage) {
//         getNextPage = () => {
//           // Note: nextPage will call the same handler function as the initial call
//           pagination.nextPage();
//         };
//       }
//     },
//   );

//   function addPlaces(places, map) {
//     //const placesList = document.getElementById("places");

//     for (const place of places) {
//       if (place.geometry && place.geometry.location) {
//         const image = {
//           url: place.icon,
//           size: new google.maps.Size(71, 71),
//           origin: new google.maps.Point(0, 0),
//           anchor: new google.maps.Point(17, 34),
//           scaledSize: new google.maps.Size(25, 25),
//         };

//         new google.maps.Marker({
//           map,
//           icon: image,
//           title: place.name,
//           position: place.geometry.location,
//         });

//         //const li = document.createElement("li");

//         //li.textContent = place.name;
//         // placesList.appendChild(li);
//         // li.addEventListener("click", () => {
//         //   map.setCenter(place.geometry.location);
//         // });
//       }
//     }
//   }















//   //
//   const BSDBoundary = new google.maps.Polyline({
//     path: mapBounds,
//     geodesic: true,
//     strokeColor: "#1e2d80",
//     strokeOpacity: 1.0,
//     strokeWeight: 2,
//   });

//   BSDBoundary.setMap(map);

//   // map.setOptions({
//   //   styles: styles.proper,
//   // })

//   //Options

//   // Create the DIV to hold the control.
//   const centerControlDiv = document.createElement("div");
//   // Create the control.
//   const centerControl = createCenterControl(map);
//   const notcenterControl = createCenterControl(map);

//   // Append the control to the DIV.
//   centerControlDiv.appendChild(centerControl);
//   centerControlDiv.appendChild(notcenterControl);


//   // Append the control to the DIV.
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
// }


// const styles = {
//   default: [],
//   proper: [
//     {
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#ebe3cd"
//         }
//       ]
//     },
//     {
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#523735"
//         }
//       ]
//     },
//     {
//       "elementType": "labels.text.stroke",
//       "stylers": [
//         {
//           "color": "#f5f1e6"
//         }
//       ]
//     },
//     {
//       "featureType": "administrative",
//       "elementType": "geometry.stroke",
//       "stylers": [
//         {
//           "color": "#c9b2a6"
//         }
//       ]
//     },
//     {
//       "featureType": "administrative.land_parcel",
//       "elementType": "geometry.stroke",
//       "stylers": [
//         {
//           "color": "#dcd2be"
//         }
//       ]
//     },
//     {
//       "featureType": "administrative.land_parcel",
//       "elementType": "labels",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "administrative.land_parcel",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#ae9e90"
//         }
//       ]
//     },
//     {
//       "featureType": "administrative.neighborhood",
//       "stylers": [
//         {
//           "visibility": "on"
//         }
//       ]
//     },
//     {
//       "featureType": "landscape.man_made",
//       "stylers": [
//         {
//           "visibility": "on"
//         }
//       ]
//     },
//     {
//       "featureType": "landscape.natural",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#dfd2ae"
//         }
//       ]
//     },
//     {
//       "featureType": "landscape.natural.landcover",
//       "stylers": [
//         {
//           "visibility": "on"
//         }
//       ]
//     },
//     {
//       "featureType": "poi",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#dfd2ae"
//         }
//       ]
//     },
//     {
//       "featureType": "poi",
//       "elementType": "labels.text",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "poi",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#93817c"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.attraction",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.business",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.government",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.medical",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.medical",
//       "elementType": "labels.text",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.park",
//       "stylers": [
//         {
//           "visibility": "on"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.park",
//       "elementType": "geometry.fill",
//       "stylers": [
//         {
//           "color": "#a5b076"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.park",
//       "elementType": "labels.icon",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.park",
//       "elementType": "labels.text",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.park",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#447530"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.place_of_worship",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.school",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.sports_complex",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "road",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#f5f1e6"
//         }
//       ]
//     },
//     {
//       "featureType": "road",
//       "elementType": "labels.icon",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "road.arterial",
//       "stylers": [
//         {
//           "visibility": "on"
//         }
//       ]
//     },
//     {
//       "featureType": "road.arterial",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#fdfcf8"
//         }
//       ]
//     },
//     {
//       "featureType": "road.highway",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#f8c967"
//         }
//       ]
//     },
//     {
//       "featureType": "road.highway",
//       "elementType": "geometry.stroke",
//       "stylers": [
//         {
//           "color": "#e9bc62"
//         }
//       ]
//     },
//     {
//       "featureType": "road.highway.controlled_access",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#e98d58"
//         }
//       ]
//     },
//     {
//       "featureType": "road.highway.controlled_access",
//       "elementType": "geometry.stroke",
//       "stylers": [
//         {
//           "color": "#db8555"
//         }
//       ]
//     },
//     {
//       "featureType": "road.local",
//       "stylers": [
//         {
//           "visibility": "simplified"
//         }
//       ]
//     },
//     {
//       "featureType": "road.local",
//       "elementType": "labels",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "road.local",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#806b63"
//         }
//       ]
//     },
//     {
//       "featureType": "transit",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "featureType": "transit.line",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#dfd2ae"
//         }
//       ]
//     },
//     {
//       "featureType": "transit.line",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#8f7d77"
//         }
//       ]
//     },
//     {
//       "featureType": "transit.line",
//       "elementType": "labels.text.stroke",
//       "stylers": [
//         {
//           "color": "#ebe3cd"
//         }
//       ]
//     },
//     {
//       "featureType": "transit.station",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#dfd2ae"
//         }
//       ]
//     },
//     {
//       "featureType": "water",
//       "elementType": "geometry.fill",
//       "stylers": [
//         {
//           "color": "#b9d3c2"
//         }
//       ]
//     },
//     {
//       "featureType": "water",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#92998d"
//         }
//       ]
//     }
//   ]
// }


// initMap();

const mapBounds = [
  { lat: -6.2734402245499155, lng: 106.64923458292796 },
  { lat: -6.2683914609116504, lng: 106.65009413216411 },
  { lat: -6.267537049921678, lng: 106.64931272376761 },
  { lat: -6.2645854375543575, lng: 106.65079739972096 },
  { lat: -6.264041717665858, lng: 106.66181525811155 },
  { lat: -6.263731020332421, lng: 106.66814466612315 },
  { lat: -6.269944931853159, lng: 106.67072331383159 },
  { lat: -6.269944931853159, lng: 106.67634945428635 },
  { lat: -6.272508148788864, lng: 106.67853739779655 },
  { lat: -6.280430739609403, lng: 106.68455424244955 },
  { lat: -6.283615276467017, lng: 106.68369469321341 },
  { lat: -6.285867741989232, lng: 106.68596077756325 },
  { lat: -6.29029497337564, lng: 106.68525751033086 },
  { lat: -6.29332410996968, lng: 106.69119621414424 },
  { lat: -6.302411413750834, lng: 106.69932286146778 },
  { lat: -6.3097122091758395, lng: 106.69658793208006 },
  { lat: -6.314294570789745, lng: 106.70088567826079 },
  { lat: -6.31362460851977, lng: 106.69913768179694 },
  { lat: -6.323020687185539, lng: 106.69398973573266 },
  //{ lat: -6.34713792595729,  lng: 106.70967309673793 },
  { lat: -6.32300980899882, lng: 106.6748406935761 },
  { lat: -6.311419512791381, lng: 106.6594885860642 },
  { lat: -6.317701113430978, lng: 106.65430532249036 },
  { lat: -6.3183789794551855, lng: 106.6483036494857 },
  { lat: -6.319599136040371, lng: 106.63830086105615 },
  { lat: -6.321597947680509, lng: 106.60310765619613 },
  { lat: -6.308447270178063, lng: 106.59651490933496 },
  { lat: -6.296697241672764, lng: 106.60288032009747 },
  { lat: -6.2778038004479635, lng: 106.61355925204602 },
  { lat: -6.279752662865116, lng: 106.62058481830077 },
  { lat: -6.277749665276721, lng: 106.62401590879729 },
  { lat: -6.27390605373877, lng: 106.6334377922242 },
  { lat: -6.273689511400011, lng: 106.64776123350327 },
  { lat: -6.2734402245499155, lng: 106.64923458292796 },

];

let map;
let service;
let infowindow;
let markers = [];

// Function to dynamically load the Google Maps JavaScript API
function loadGoogleMapsAPI(apiKey, callback) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=${callback}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Initialize the map and PlacesService
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: { lat: -6.29447675559863, lng: 106.63994192813145 },
        zoom: 14,
        minZoom: 14,
        restriction: {
            latLngBounds: {
                west: 106.58962119204718,
                north: -6.256977574626499,
                south: -6.328292948434564,
                east: 106.70244855795238,
            }
        },
        disableDefaultUI: true,
        mapId: "f7d3a585e09d991",
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

    // Add custom control buttons to the map
    const centerControlDiv = document.createElement("div");
    const centerControl = createCenterControl(map);
    centerControlDiv.appendChild(centerControl);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
}

// Create a custom control button for the map
function createCenterControl(map) {
    const controlButton = document.createElement("button");

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
    controlButton.textContent = "Hospitals";
    controlButton.title = "Click to find hospitals";
    controlButton.type = "button";
    
    controlButton.addEventListener("click", () => {
        findPlace('hospital');
    });

    return controlButton;
}

// Function to find places based on the type
async function findPlace(type) {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    if (!service) {
        console.error('PlacesService is not initialized.');
        return;
    }

    const request = {
        bounds: map.getBounds(),
        type: [type],
    };

    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearMarkers();
            results.forEach(place => {
                const marker = new AdvancedMarkerElement({
                    map: map,
                    position: place.geometry.location
                });

                google.maps.event.addListener(marker, 'click', () => {
                    infowindow.setContent(place.name + '<br>' + place.vicinity);
                    infowindow.open(map, marker);
                });

                markers.push(marker);
            });

            if (results.length > 0) {
                map.setCenter(results[0].geometry.location);
                map.setZoom(14);
            }
        } else {
            console.error('Place search failed:', status);
        }
    });
}

// Function to clear existing markers
function clearMarkers() {
    markers.forEach(marker => marker.setMap(null));
    markers = [];
}

// Load the Google Maps API and initialize the map
document.addEventListener('DOMContentLoaded', () => {
    loadGoogleMapsAPI('AIzaSyAtq0oi6PV5zq_GXKDx-A_BnOfEfVTBJXk', 'initMap');
});
