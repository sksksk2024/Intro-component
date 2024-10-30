document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#myForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting automatically

    // Check if all inputs are valid
    if (form.checkValidity()) {
      try {
        alert('Thank you for your time!');
        form.reset();
      } catch (e) {
        console.log('ERROR!');
      }
    }
  });
});