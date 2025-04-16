import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import { createContent } from './contentDivHTML';
import "./styles.css";
import { createMenuDiv } from './menu';


mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlenNlYXNoZWxsIiwiYSI6ImNtNjl0emppdzBzcGoyam9vOW94OHQ0OGMifQ.53E-aQJhAJjo7u7G24gPgg'; // Replace with your actual token

const contentDiv = createContent();
document.body.append(contentDiv);


const menuNavButton = document.getElementById('menu-btn');
const homeNavButton = document.getElementById('home-btn');

menuNavButton.addEventListener('click', () => {
    console.log("Menu button clicked")
    const menuDiv = createMenuDiv();
    document.body.removeChild(contentDiv)
    document.body.append(menuDiv)

})

homeNavButton.addEventListener('click', () => {
    console.log("Home button clicked")
    const contentDiv = createContent();
    const menuDiv = document.getElementById('menu-page-div')
    if (menuDiv) {
        document.body.removeChild(menuDiv)
        document.body.append(contentDiv);

        const map = new mapboxgl.Map({
            container: 'map', // ID of the container element
            style: 'mapbox://styles/chezseashell/cm72o9q6n003m01qq65530zdg', 
            center: [-70.265, 43.66], // Initial map center [longitude, latitude]
            zoom: 12 // Initial zoom level
          });
          
    }


})

const map = new mapboxgl.Map({
  container: 'map', // ID of the container element
  style: 'mapbox://styles/chezseashell/cm72o9q6n003m01qq65530zdg', 
  center: [-70.265, 43.66], // Initial map center [longitude, latitude]
  zoom: 12 // Initial zoom level
});







