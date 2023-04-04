// Get the form element
const myform = document.getElementById('my-form');

// Add an event listener to the form
myform.addEventListener('submit', function(event) {
    event.preventDefault();
    // Prevent the form from submitting

    // Get the form data
    var formData = new FormData(myform);

    //Make a POST request to the server
    fetch('submit.php', {
        method: "POST", 
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log the response from the server
    })
    .catch(error => {
        console.error(error); //Log any errors trhat occur
    });

    // Will send to dummy data page
});