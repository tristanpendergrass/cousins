import './index.css';

// Makes leaflet work
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Makes leaflet marker clustering plugin work
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

// Set up the map
const map = L.map('map').setView([39.8283, -98.5795], 3);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, © CARTO'
}).addTo(map);
const markers = L.markerClusterGroup({
  showCoverageOnHover: false,
  maxClusterRadius: 20,
});



// Define helpers for custom marker and adding a cousin
const getCustomIcon = (name) => L.divIcon({
  className: 'custom-marker',
  html: "<div class='custom-marker-container'><div class='custom-marker-text'>" + name + "</div></div>",
  iconSize: [75, 25],
  iconAnchor: [0, 12.5] // keep the first value at zero if you want the marker to be to the right of the coordinates. Keep the second at half the height to vertically center it
});
const addCousin = (name, coords) => {
  const marker = L.marker(coords, { icon: getCustomIcon(name) });
  markers.addLayer(marker);
}

// Location coords
const alaskaCoords = [64.2008, -149.4937];
const atlantaCoords = [33.7490, -84.3880];
const bostonCoords = [42.3601, -71.0589];
const edmondsWashingtonCoords1 = [47.8107, -122.3774];
const edmondsWashingtonCoords2 = [47.8207, -122.3874]; // for "2" we shift the coords by 0.1 in each direction
const kenmoreWashingtonCoords = [47.7573, -122.2440];
const newYorkCoords = [40.7128, -74.0060];
const portlandCoords = [45.5051, -122.6750];
const sanFranciscoCoords = [37.7749, -122.4194];
const seattleCoords = [47.6062, -122.3321];
const tacomaCoords = [47.2529, -122.4443];
const wenatcheeCoords1 = [47.4235, -120.3103];
const wenatcheeCoords2 = [47.4335, -120.3203];
const wenatcheeCoords3 = [47.4435, -120.3303];

// Add cousins

// Kate
addCousin('Ian', alaskaCoords);
addCousin('Colin', kenmoreWashingtonCoords);
// Sue
addCousin('Genna', edmondsWashingtonCoords1);
addCousin('Reiland', edmondsWashingtonCoords2);
// John
addCousin('Kyle', wenatcheeCoords1);
addCousin('Frank', wenatcheeCoords2);
addCousin('Sean', wenatcheeCoords3);
// Molly
addCousin('Shannon', newYorkCoords);
// Julia
addCousin('Claire', sanFranciscoCoords);
addCousin('Annie', portlandCoords);
// Colleen
addCousin('Andy', bostonCoords);
addCousin('Tristan', seattleCoords);
// Jane
addCousin('Pearl', tacomaCoords)
addCousin('Grace', atlantaCoords)

map.addLayer(markers);
