// Fetch member data from JSON and display spotlighted members
async function fetchSpotlightMembers() {
    try {
        const response = await fetch('data/spotlight.json');
        const data = await response.json();
        const spotlightMembers = data.members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
        displaySpotlight(spotlightMembers);
    } catch (error) {
        console.error('Error fetching spotlight member data:', error);
    }
}

// Display spotlighted members
function displaySpotlight(members) {
    const spotlightContainer = document.getElementById('spotlight-cards');
    spotlightContainer.innerHTML = ''; // Clear existing content

    members.slice(0, 3).forEach(member => { // Display up to 3 members
        const memberCard = document.createElement('div');
        memberCard.classList.add('spotlight-card');

        memberCard.innerHTML = `
            <img src="${member.logo}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>${member.website}</p>
            <p>${member.description}</p>
        `;

        spotlightContainer.appendChild(memberCard);
    });
}

// Initialize spotlight
fetchSpotlightMembers();