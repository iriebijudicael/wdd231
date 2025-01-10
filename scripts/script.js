// Get references to the menu icon and the navigation menu
const menuBar = document.getElementById('menu-bar');
const navMenu = document.getElementById('nav-menu');

// Add a click event listener to the menu icon
menuBar.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;