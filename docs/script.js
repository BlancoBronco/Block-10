// Get the submit buttons
const submitButtons = document.querySelectorAll('input[type="submit"]');

// Add event listener to each submit button
submitButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault(); // prevent the default form submission
    window.location.href = "form.html"; // redirect to form.html
  });
});
