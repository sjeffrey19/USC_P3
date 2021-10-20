// Creating the map object
var myMap = L.map("map", {
  center: [34.0488, -118.2518],
  zoom: 13
});

// Create the tile layer that will be the background of our map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the CSV data
d3.csv("/Resources/la_apts_clean.csv").then(function(data) {
  console.log(data);

  // Create new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through the data
  for (var i = 0; i < data.length; i++) {

      // Check for the location
      if (data[i].Latitude) {
          markers.addLayer(L.marker([data[i].Latitude, data[i].Longitude])
          .bindPopup(data[i]["Neighborhood"] + "<br> Bedrooms: " + data[i]["number bedrooms"] + "<br> SQFT: " + data[i]["sqft"] + "<br> Price: " + data[i]["price"]));
      }
  }

// Add our marker cluster layer to the map.
myMap.addLayer(markers);

});
