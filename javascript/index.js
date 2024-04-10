document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    menuButton.addEventListener('click', function() {
        window.location.href = 'menu.html';
    });
    const cartButton = document.getElementById('cartButton');
    cartButton.addEventListener('click', function() {
        let selectedColorsJSON = localStorage.getItem('selectedColors');
        if (!selectedColorsJSON) {
            colorCartItems.innerHTML = `<p>Your cart is empty.</p>`;
            return;
        }
        let colorsArray = JSON.parse(selectedColorsJSON);
        let colorsHtml = colorsArray.map(color =>
            `<div class="color-cart-item" style="background-color: ${color};"></div>`
        ).join('');
        colorCartItems.innerHTML = colorsHtml;
    });
    const removeCartButton = document.getElementById('removeCartButton');
    removeCartButton.addEventListener('click', function() {
        localStorage.removeItem('selectedColors');
        colorCartItems.innerHTML = '';
    });
});
