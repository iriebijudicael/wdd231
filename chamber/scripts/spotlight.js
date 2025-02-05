// Fetch member data
async function fetchMembers() {
    try {
        const response = await fetch('data/members-1.json');
        if (!response.ok) throw new Error('Member data not available');
        const data = await response.json();
        displaySpotlights(data);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Display spotlight ads
function displaySpotlights(members) {
    const spotlightCards = document.getElementById('spotlight-cards');

    // Filter gold and silver members
    const eligibleMembers = members.filter(member => member.membership === 'gold' || member.membership === 'silver');

    // Randomly select 2-3 members
    const selectedMembers = [];
    while (selectedMembers.length < 3 && eligibleMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
        selectedMembers.push(eligibleMembers.splice(randomIndex, 1)[0]);
    }

    // Display spotlight cards
    spotlightCards.innerHTML = selectedMembers.map(member => `
        <div id="spotlight-cards">
            <img src="${member.logo}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">Visit Site</a></p>
            <p><strong>Membership Level:</strong> ${member.membership.charAt(0).toUpperCase() + member.membership.slice(1)}</p>
        </div>
    `).join('');
}

// Initialize member fetch
fetchMembers();