// Get the current date
var currentDate = new Date();

// Format the date as desired (e.g., "Month Day, Year")
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', options);

// Update the footer with the current date
var footer = document.querySelector('footer');
footer.innerHTML += '<p>Current Date: ' + formattedDate + '</p>';
