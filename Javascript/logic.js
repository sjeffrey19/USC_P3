// Creating the map object
var myMap = L.map("map", {
  center: [34, -118],
  zoom: 11
});

// Create the tile layer that will be the background of our map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the CSV data
d3.csv("/Resources/la_apts_coords_combined.csv").then(function(data) {
  console.log(data);

  // Create new marker cluster group
  // var markers = L.markerClusterGroup();
  var markers = []

  // Loop through the data
  for (var i = 0; i < data.length; i++) {

      // Check for the location
      if (data[i].Latitude) {
          markers.push(L.marker([data[i].Latitude, data[i].Longitude])
          .bindPopup(data[i]["number bedrooms"]));
      }
  }

// Add our marker cluster layer to the map.
// myMap.addLayer(L.layerGroup(markers));
L.layerGroup(markers).addTo(myMap)

});
