document.addEventListener('DOMContentLoaded', () => {
  // Botón "OUR LOCATION" en index.html
  const locationButton = document.querySelector('.hero__button');
  if (locationButton) {
    locationButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'html/location.html'; 
    });
  }

  // Botón "< BACK TO HOME" en location.html
  const backButton = document.querySelector('.botton_back');
  if (backButton) {
    backButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '../index.html'; 
    });
  }
});
