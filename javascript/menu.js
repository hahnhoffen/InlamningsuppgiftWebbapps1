class Color {
    constructor(name, hex) {
      this.name = name;
      this.hex = hex;
    }
  
    toJSON() {
      return {
        name: this.name,
        hex: this.hex,
      };
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.color-option').forEach(button => {
      button.addEventListener('click', function() {
        let colorHex = this.style.backgroundColor;
        let colorName = this.getAttribute('data-color-name');
        let selectedColorsJSON = localStorage.getItem('selectedColors');
        let colorsArray = selectedColorsJSON ? JSON.parse(selectedColorsJSON) : [];
        if (!colorsArray.some(color => color.hex === colorHex)) {
          let newColor = new Color(colorName, colorHex);
          colorsArray.push(newColor);
          localStorage.setItem('selectedColors', JSON.stringify(colorsArray));
          console.log('Colors updated:', localStorage.getItem('selectedColors'));
        }
      });
    });
  
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
  
  