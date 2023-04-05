<
  // Select the first form
  const form1 = document.querySelector('form:first-of-type');

  // Add a submit event listener to the first form
  form1.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Redirect the user to form.html
    window.location.href = 'form.html';
  });

  // Select the second form
  const form2 = document.querySelector('form:last-of-type');

  // Add a submit event listener to the second form
  form2.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Redirect the user to form.html
    window.location.href = 'form.html';
  });

