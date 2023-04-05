// Get the submit buttons
const submitButtons = document.querySelectorAll('input[type="submit"]');

// Add event listener to each submit button
submitButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault(); // prevent the default form submission
    const formAction = event.target.form.action; // get the form action url
    window.location.href = '${formAcion}?${new FormData(event.target.form)}'; // redirect to form.html
  });
});
