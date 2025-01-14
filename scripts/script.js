


// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


// Get references to the hamburger icon and the navbar
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});