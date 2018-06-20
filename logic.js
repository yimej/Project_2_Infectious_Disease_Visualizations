var myMap = L.map('map', {
	center: [10,10.3],
	zoom: 11
});

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=" + APIKEY)

