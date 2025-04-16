export function createMenuDiv(){

    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu-page-div';

    menuDiv.innerHTML = `
        <h1>Menu</h1>
        <div class="menu-section">
          <h4>Tapas</h4>
          <ul>
            <li>Patatas Bravas - Crispy potatoes with spicy tomato sauce - $6</li>
            <li>Gambas al Ajillo - Garlic shrimp - $8</li>
            <li>Albóndigas - Meatballs in tomato sauce - $7</li>
          </ul>
        </div>
        <div class="menu-section">
          <h4>First Course</h4>
          <ul>
            <li>Gazpacho - Chilled tomato soup - $6</li>
            <li>Ensalada Mixta - Mixed green salad with olives - $5</li>
            <li>Calamares a la Romana - Fried calamari - $8</li>
          </ul>
        </div>
        <div class="menu-section">
          <h4>Second Course</h4>
          <ul>
            <li>Paella de Mariscos - Seafood paella - $18</li>
            <li>Bacalao a la Vizcaína - Cod in tomato sauce - $16</li>
            <li>Pollo al Ajillo - Garlic chicken - $14</li>
          </ul>
        </div>
        <div class="menu-section">
          <h4>Desserts</h4>
          <ul>
            <li>Churros con Chocolate - Churros with chocolate sauce - $5</li>
            <li>Flan - Caramel custard - $4</li>
            <li>Tarta de Santiago - Almond cake - $5</li>
          </ul>
        </div>
    </div>
    `

    return menuDiv;
}