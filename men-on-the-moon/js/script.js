/* title fade out */
var initial = true;

function titleFade() {
  if (initial) {
    document.querySelector('.title').classList.add('inactive');
    initial = false;
  }
}

window.addEventListener('mousedown', titleFade);
window.addEventListener('scroll', titleFade);

/* filter continent */
function toggleContinent(type) {
  var features = document.getElementsByClassName(type);
  for (i = 0; i < features.length; i++) {
    features[i].classList.toggle('continent-inactive');
  }
}

/* filter gender */
function toggleGender(type) {
  var features = document.getElementsByClassName(type);
  for (i = 0; i < features.length; i++) {
    features[i].classList.toggle('gender-inactive');
  }
}

/* filter position */
function togglePosition(type) {
  var features = document.getElementsByClassName(type);
  for (i = 0; i < features.length; i++) {
    features[i].classList.toggle('position-inactive');
  }
}


/* date slider */
var slider = document.getElementById('dateSlider');
var dateLabel = document.getElementById('dateLabel');

slider.addEventListener('input', function () {
  var timestamp = slider.valueAsNumber;
  geojsonLayer.eachLayer(function (layer) {
    var featuerId = 'id' + layer.feature.properties.cartodb_id.toString();
    if (Number(layer.feature.properties.approvaldt.substr(0, 4)) <= timestamp) {
      document.getElementsByClassName(featuerId)[0].classList.remove('date-inactive');
    } else {
      document.getElementsByClassName(featuerId)[0].classList.add('date-inactive');
    }
  });
  document.querySelector('.current-year').innerHTML = slider.value;

  if (slider.value == 1970) {
    console.log('1970: Apollo Mission')
  }
});

/* toggle text */
function toggleInfo() {
  document.querySelector('.info').classList.toggle('active');
  document.querySelector('.map-container').classList.toggle('small');
}

/* string to slug */
function stringToSlug(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\W_]+/g, '-')
    .replace(/^-+|-+$/g, '');
};


// Save a reference to the original method
var originalOnZoomTransitionEnd = L.Map.prototype._onZoomTransitionEnd;

// Override the _onZoomTransitionEnd method
L.Map.prototype._onZoomTransitionEnd = function () {
  // Call the original method with a different delay (e.g., 500 milliseconds)
  setTimeout(L.bind(originalOnZoomTransitionEnd, this), 500);
};

var initialCoordinates = [-10, 0];
var initialZoom = 3;


// ... (add your map layers, markers, etc.)

// Event listener for keydown event
document.addEventListener('keydown', function (event) {
  // Check if CMD (Command) key and '0' key are pressed simultaneously
  if (event.key === '0') {
    // Fly to the initial state
    map.flyTo(initialCoordinates, initialZoom, {
      duration: 1  // specify the duration in seconds
    });
    setTimeout(function () {
      document.querySelector('.title').classList.remove('inactive');
      initial = true;
    }, 500);
  }
  if (event.key === '9') {
    // Fly to the initial state
    map.flyTo(initialCoordinates, initialZoom, {
      duration: 1  // specify the duration in seconds
    });
  }
});


/* create projection */
var crs = new L.Proj.CRS('ESRI:53009', '+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 +b=6371000 +units=m +no_defs', {
  // resolutions: [60000, 50000, 40000, 30000, 15000, 7500, 3000, 1500, 750, 400, 200, 100, 50, 25]
  resolutions: [60000, 50000, 40000, 30000, 15000, 7500, 3000, 1500, 750, 400, 200, 100, 50, 25]
});

/* initialize map */
var map = L.map('map', {
  center: initialCoordinates,
  zoom: initialZoom,
  crs: crs,
  zoomControl: false,
  attributionControl: false,
  maxZoom: 7,
  minZoom: 3,
  zoomSnap: 1,
  renderer: L.svg({ padding: 50 }), // adds a renderer that load more tiles 
  zoomAnimation: true,
  enableHighAccuracy: true
});

/* load geojson features */
// 1. nearside of the moon
var nearSide = L.geoJSON.ajax('../data/nearside.geojson', {
  style: {
    fillColor: 'white',
    color: 'white',
    weight: 0.5,
    opacity: 1,
    fillOpacity: 0.08,
    dashArray: '5, 5', dashOffset: '5',
    interactive: false,
    className: 'nearside'
  }
}).addTo(map);

// 2. craters
var geojsonLayer = L.geoJSON.ajax('../data/craters.geojson', {
  style: {
    fillColor: 'black',
    color: 'white',
    weight: 0.5,
    opacity: 0.5,
    fillOpacity: 0.75,
    smoothFactor: 1,
  },
  onEachFeature: function (feature, layer) {
    var featureContinent = stringToSlug(feature.properties.continent);
    var featureOrigin = feature.properties.origin;
    var featureId = feature.properties.cartodb_id;
    var featureWoman = feature.properties.woman;
    var featureCenter = Number(feature.properties.center_lon);
    var featureDiameter = Number(feature.properties.diameter).toFixed(2);
    if (featureWoman == true) {
      var featureGender = 'women';
    } else {
      var featureGender = 'men';
    }
    if (featureCenter < 90 || featureCenter > 270) {
      var featurePosition = 'nearside';
    } else {
      var featurePosition = 'farside';
    }
    layer.setStyle({ className: 'crater ' + featureContinent + ' ' + featureGender + ' ' + 'id' + featureId + ' ' + featurePosition + ' ' + featureCenter });
    if (feature.properties && feature.properties.ethnicity) {
      layer.bindPopup('<h3><a href="' + feature.properties.eponym_url + '" target="_blank">' + feature.properties.clean_name + '</a></h3><p class="origin">' + featureOrigin + '</p><p class="diameter"> Ø ' + featureDiameter + ' km</p>');
    };
  }
}).addTo(map);

// 3. sphere
L.graticule({
  sphere: true,
  style: {
    color: 'none',
    opacity: 1,
    fillColor: 'white',
    fillOpacity: 0.05,
    weight: 2
  }
}).addTo(map);

// 4. graticule
L.graticule({
  style: {
    color: '#bbb',
    weight: 0.5,
    opacity: 1
  }
}).addTo(map);


// Search input field
var searchInput = document.getElementById('search');

// Search functionality
searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    var searchTerm = this.value.toLowerCase();

    // Iterate through features to find a match
    geojsonLayer.eachLayer(function (layer) {
      // Check if the feature has the expected properties
      if (layer.feature && layer.feature.properties && layer.feature.properties.clean_name) {
        var cleanName = layer.feature.properties.clean_name.toLowerCase();

        if (cleanName.includes(searchTerm)) {
          // Match found, zoom to the feature and open the popup
          map.flyToBounds(layer.getBounds());
          layer.openPopup();
          return; // Stop iteration after finding the first match
        }
      }
    });
  }
});


// Define the click event handler function
function onMapClick(e) {
  // Access the coordinates from the click event
  var lat = e.latlng.lat;
  var lng = e.latlng.lng;

  // Log the coordinates or use them as needed
  console.log('Clicked at:', lat, lng);
}

// Attach the click event handler to the map
map.on('click', onMapClick);
