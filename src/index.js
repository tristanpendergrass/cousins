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
map.addLayer(markers);

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
const alaska = [64.2008, -149.4937];
const atlanta = [33.7490, -84.3880];
const boston = [42.3601, -71.0589];
const edmondsWashington1 = [47.8107, -122.3774];
const edmondsWashington2 = [47.8207, -122.3874]; // for "2" we shift the  by 0.1 in each direction
const kenmoreWashington = [47.7573, -122.2440];
const newYork = [40.7128, -74.0060];
const portland1 = [45.5051, -122.6750];
const portland2 = [45.5151, -122.6850]; // for "2" we shift the  by 0.1 in each direction
const portland3 = [45.5251, -122.6950]; // for "3" we shift the  by 0.2 in each direction
const portlandMaine = [43.6591, -70.2568];
const riverside = [33.9806, -117.3755];
const sanFrancisco = [37.7749, -122.4194];
const seattle = [47.6062, -122.3321];
const tacoma = [47.2529, -122.4443];
const wenatchee1 = [47.4235, -120.3103];
const wenatchee2 = [47.4335, -120.3203];
const wenatchee3 = [47.4435, -120.3303];

// Add cousins
// Kate
addCousin('Ian', alaska);
addCousin('Colin', kenmoreWashington);
// Sue
addCousin('Genna', edmondsWashington1);
addCousin('Reiland', edmondsWashington2);
// John
addCousin('Kyle', wenatchee1);
addCousin('Frank', wenatchee2);
addCousin('Sean', wenatchee3);
// Molly
addCousin('Shannon', newYork);
// Julia
addCousin('Tommy', portland1);
addCousin('Clare (1/2)', riverside);
addCousin('Clare (2/2)', portlandMaine);
addCousin('Annie', portland2);
// Colleen
addCousin('Andy', boston);
addCousin('Tristan', seattle);
// Jane
addCousin('Pearl', portland3)
addCousin('Grace', atlanta)