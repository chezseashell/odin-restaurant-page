import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import { createContent } from './contentDivHTML';
import "./styles.css";
import { createMenuDiv } from './menu';
import { createContactDiv } from './contact';


mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlenNlYXNoZWxsIiwiYSI6ImNtNjl0emppdzBzcGoyam9vOW94OHQ0OGMifQ.53E-aQJhAJjo7u7G24gPgg'; // Replace with your actual token
const contentDiv = createContent();
document.body.append(contentDiv);

const contactNavButton = document.getElementById('contact-btn');
const menuNavButton = document.getElementById('menu-btn');
const homeNavButton = document.getElementById('home-btn');
const menuButton = document.querySelector('#menu-info');


contactNavButton.addEventListener('click', () => {
    var content = document.getElementById('content')
    const contactDiv = createContactDiv();
    const menuDiv = document.getElementById('menu-page-div')
    var content = document.getElementById('content')


    if (menuDiv) {
        document.body.removeChild(menuDiv)
        document.body.append(contactDiv);
    } else if (content) {
        document.body.removeChild(content)
        document.body.append(contactDiv)  
    }

    menuNavButton.addEventListener('click', () => {
        const menuDiv = document.getElementById('menu-page-div');
        if (!menuDiv) {
            console.log("Menu button clicked")
            const menuDiv = createMenuDiv();
            document.body.removeChild(contactDiv)
            document.body.append(menuDiv)
        }
    })


})

menuNavButton.addEventListener('click', () => {
    const menuDiv = document.getElementById('menu-page-div');
    
    if (!menuDiv) {
        var content = document.getElementById('content');
        var contactDiv = document.getElementById('contact-page-div')
        if (content) {
            const menuDiv = createMenuDiv();
            document.body.removeChild(content)
            document.body.append(menuDiv)
        }

        if (contactDiv) {
            const menuDiv = createMenuDiv();
            document.body.removeChild(contactDiv)
            document.body.append(menuDiv)
        }
        console.log("Menu button clicked")
        
    }
})

menuButton.addEventListener('click', () => {

        var content = document.getElementById('content')
        console.log("Menu button clicked")
        const menuDiv = createMenuDiv();
        document.body.removeChild(content)
        document.body.append(menuDiv)
    

})



homeNavButton.addEventListener('click', () => {
    console.log("Home button clicked")
    const contentDiv = createContent();
    const menuDiv = document.getElementById('menu-page-div')
    const contactDivContent = document.getElementById('contact-page-div') 
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


    if (contactDivContent) {
        document.body.removeChild(contactDivContent)
        document.body.append(contentDiv);

        const map = new mapboxgl.Map({
            container: 'map', // ID of the container element
            style: 'mapbox://styles/chezseashell/cm72o9q6n003m01qq65530zdg', 
            center: [-70.265, 43.66], // Initial map center [longitude, latitude]
            zoom: 12 // Initial zoom level
          });
    }

    const menuButton = document.querySelector('#menu-info');

    menuButton.addEventListener('click', () => {
                var content = document.getElementById('content')
                console.log("Menu button clicked")
                const menuDiv = createMenuDiv();
                content.innerHTML = ``;
                document.body.removeChild(content)
                document.body.append(menuDiv)

    })


})

const map = new mapboxgl.Map({
  container: 'map', // ID of the container element
  style: 'mapbox://styles/chezseashell/cm72o9q6n003m01qq65530zdg', 
  center: [-70.265, 43.66], // Initial map center [longitude, latitude]
  zoom: 12 // Initial zoom level
});







