// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fetch Members Data
async function fetchMembers() {
    const response = await fetch('data/members-2.json');
    const data = await response.json();
    return data;
}

// Display Members
async function displayMembers(view = 'grid') {
    const directory = document.getElementById('directory');
    const members = await fetchMembers();

    directory.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        if (view === 'list') card.classList.add('list-view');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>Membership Level: ${member.membership}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>`;

        directory.appendChild(card);
    });
}

// Toggle View
document.getElementById('grid-view').addEventListener('click', () => {
    document.getElementById('directory').classList.remove('list-view');
    displayMembers('grid');
});

document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('directory').classList.add('list-view');
    displayMembers('list');
});



// Initial Load
displayMembers();


