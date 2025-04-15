console.log("Webpack test")

import "./styles.css";
import restaurantImage from "./homepageImage.jpg";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const backgroundImg = document.createElement("img");
backgroundImg.id= "backgroundImg";

const contentDiv = document.getElementById("content")
backgroundImg.src = restaurantImage;

contentDiv.append(backgroundImg)



mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlenNlYXNoZWxsIiwiYSI6ImNtNjl0emppdzBzcGoyam9vOW94OHQ0OGMifQ.53E-aQJhAJjo7u7G24gPgg'; // Replace with your actual token

const map = new mapboxgl.Map({
  container: 'map', // ID of the container element
  style: 'mapbox://styles/chezseashell/cm72o9q6n003m01qq65530zdg', 
  center: [-70.265, 43.66], // Initial map center [longitude, latitude]
  zoom: 12 // Initial zoom level
});


contentDiv.append(mapDiv)

