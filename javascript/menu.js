document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.color-option').forEach(button => {
      button.addEventListener('click', function() {
          let color = this.style.backgroundColor;
          let selectedColorsJSON = localStorage.getItem('selectedColors');
          let colorsArray = selectedColorsJSON ? JSON.parse(selectedColorsJSON) : [];
          if (!colorsArray.includes(color)) {
              colorsArray.push(color);
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

