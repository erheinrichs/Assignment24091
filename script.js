var map = L.map('mapid').setView([38.57,-90.1994], 11);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);
var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Taste of Lebanon",
        "Review": "4 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.26150473914255,
          38.64609159524114
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Balkan Treat Box",
        "Review": "4.9 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.33855777034898,
          38.5945750393188
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Pappy's",
        "Review": "4.7 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.22401682117703,
          38.635170846347506
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Diana's Bakery",
        "Review":  "4.6 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.23166593014328,
          38.595394090074805
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Uncle Bill's Pancakes",
        "Review": "4.3 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27123544161336,
          38.5989987517414
        ]
      }
    }
  ]
}
var feat = L.geoJSON(geojsonFeature).addTo(map);
feat.bindPopup("<b>Eat here!</b><br>I am a restaurant").openPopup();var map = L.map('mapid').setView([38.57,-90.1994], 11);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);
var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Taste of Lebanon",
        "Review": "4 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.26150473914255,
          38.64609159524114
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Balkan Treat Box",
        "Review": "4.9 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.33855777034898,
          38.5945750393188
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Pappy's",
        "Review": "4.7 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.22401682117703,
          38.635170846347506
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Diana's Bakery",
        "Review":  "4.6 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.23166593014328,
          38.595394090074805
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Uncle Bill's Pancakes",
        "Review": "4.3 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27123544161336,
          38.5989987517414
        ]
      }
    }
  ]
}
var feat = L.geoJSON(geojsonFeature).addTo(map);
feat.bindPopup("<b>Eat here!</b><br>I am a restaurant").openPopup();
