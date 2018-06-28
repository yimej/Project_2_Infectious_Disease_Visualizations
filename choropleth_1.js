var myMap = L.map('map', {
	center: [39.8283, -98.5795],
	zoom: 11
});

APIKEY = "pk.eyJ1Ijoic2NvdHRtY2FsaXN0ZXIxMyIsImEiOiJjamlhdWd2bzMxYjU1M3Ztcm54N2kxaDQ2In0.mGtR6lttrtiEpIqHVEIAtQ"

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=" + APIKEY).addTo(myMap)



var GEOLINK = "state_data_modified.json"

var geojson_0;
var geojson_1;
var geojson_2;
var geojson_3;
var geojson_4;
var geojson_5;
var geojson_6;
var geojson_7;

d3.json(GEOLINK, function(data){
	geojson_0=L.choropleth(data, {
		ValueProperty: "Rate_2010",
		scale: ['#80026': 'FFEDA0']
		steps: 8,
		mode: "q",
		style:{
			color:'#fff'
			weight: 1,
			fillOpacity: .8
		},
		onEachFeature: function(feature, layer){
			layer.bindPopup(feature.properties.State + "<br>Number of cases:<br>)" + feature.properties.Cases
		}

	});
	geojson_1=L.choropleth(data,{
		ValueProperty: "Rate_2011",
		scale: ['#80026': 'FFEDA0']
		steps: 8,
		mode: "q",
		style:{
			color:'#fff'
			weight: 1,
			fillOpacity: .8
		},
		onEachFeature: function(feature, layer){
			layer.bindPopup(feature.properties.State + "<br>Number of cases:<br>)" + feature.properties.Cases
		}
	});
	geojson_2=L.choropleth(data,{
		ValueProperty: "Rate_2012",
		scale: ['#80026': 'FFEDA0']
		steps: 8,
		mode: "q",
		style:{
			color:'#fff'
			weight: 1,
			fillOpacity: .8
		},
		onEachFeature: function(feature, layer){
			layer.bindPopup(feature.properties.State + "<br>Number of cases:<br>)" + feature.properties.Cases
		}
	});
	geojson_3=L.choropleth(data,{
		ValueProperty: "Rate_2013",
		scale: ['#80026': 'FFEDA0']
		steps: 8,
		mode: "q",
		style:{
			color:'#fff'
			weight: 1,
			fillOpacity: .8
		},
		onEachFeature: function(feature, layer){
			layer.bindPopup(feature.properties.State + "<br>Number of cases:<br>)" + feature.properties.Cases
		}
	});
	geojson_4=L.choropleth(data,{
		ValueProperty: "Rate_2014",
		scale: ['#80026': 'FFEDA0']
		steps: 8,
		mode: "q",
		style:{
			color:'#fff'
			weight: 1,
			fillOpacity: .8
		},
		onEachFeature: function(feature, layer){
			layer.bindPopup(feature.properties.State + "<br>Number of cases:<br>)" + feature.properties.Cases
		}
	});
	geojson_5=L.choropleth(data,{
		ValueProperty: "Rate_2015",
		scale: ['#80026': 'FFEDA0']
		steps: 8,
		mode: "q",
		style:{
			color:'#fff'
			weight: 1,
			fillOpacity: .8
		},
		onEachFeature: function(feature, layer){
			layer.bindPopup(feature.properties.State + "<br>Number of cases:<br>)" + feature.properties.Cases
		}
	});		
	geojson_6=L.choropleth(data,{
		ValueProperty: "Rate_2016",
		scale: ['#80026': 'FFEDA0']
		steps: 8,
		mode: "q",
		style:{
			color:'#fff'
			weight: 1,
			fillOpacity: .8
		},
		onEachFeature: function(feature, layer){
			layer.bindPopup(feature.properties.State + "<br>Number of cases:<br>)" + feature.properties.Cases
		}
	});
	geojson_7=L.choropleth(data,{
		ValueProperty: "Rate_2017",
		scale: ['#80026': 'FFEDA0']
		steps: 8,
		mode: "q",
		style:{
			color:'#fff'
			weight: 1,
			fillOpacity: .8
		},
		onEachFeature: function(feature, layer){
			layer.bindPopup(feature.properties.State + "<br>Case Rate per 100,000 people:<br>)" + feature.properties.Cases
		}
	});.addTo(myMap)

	var layergroup = L.layergroup([geojson_0, geojson_1, geojson_2, geojson_3, geojson_4, geojson_5, geojson_6, geojson_7]);

	var sliderControl = L.control.sliderControl({layer:layerGroup, follow: 1});
	map.addControl(sliderControl);//add slider to map
	sliderControl.startSlider();

	var legend = L.control({position: "bottomright"});
	legend.onAdd = function(){
		var div = L.DomUtil.create("div, info legend");
		var limits = geojson.options.limits;
		var colors = geojson.options.colors;
		var labels = [];

		var legendInfo = "<h1> Case Rate per State</h1>" + "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

      div.innerHTML = legendInfo;

      limits.forEach(function(limit,idex){
      	labels.push("<li style=\"background-color: " + colors[index] + "\"><li>");
      });

      div.innerHTML += "<ul>" + lables.join("") + "</ul>";
      return div;
	};

	legend.addTo(myMap);

});