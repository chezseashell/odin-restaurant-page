import restaurantImage from './homepageImage.jpg';

export function createContent() {
  const contentDiv = document.createElement('div');
  contentDiv.id = 'content';

  // Add background image
  const backgroundImg = document.createElement('img');
  backgroundImg.id = 'backgroundImg';
  backgroundImg.src = restaurantImage;
  contentDiv.appendChild(backgroundImg);

  // Add HTML content using innerHTML
  contentDiv.innerHTML += `
    <div id="tagline">
      <div id="tagline-icon"></div>
      <div id="tagline-text">
        <h3><strong>Exploring</strong> Spain's Coastal Culinary Traditions</h3>
        <h1>A truly authentic dining experience</h1>
      </div>
    </div>
    <div class="container">
      <h3>Location</h3>
      <div id="map-container">       
        <div id="map"></div>
      </div>
      <div id="menu-info">
        <h3>Menu</h3>
      </div>
      <div id="gallery">
        <h3>Gallery</h3>
      </div>
    </div>
  `;

  return contentDiv;
}