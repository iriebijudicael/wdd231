// Load attractions data
fetch('data/attractions.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.cards-container');
    
    data.forEach(attraction => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <figure>
          <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
        </figure>
        <div class="card-content">
          <h2>${attraction.name}</h2>
          <address>${attraction.address}</address>
          <p>${attraction.description}</p>
          <button>Learn More</button>
        </div>
      `;
      container.appendChild(card);
    });
  });

// Visit tracking
function displayVisitMessage() {
  const now = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');
  const messageEl = document.getElementById('visit-message');
  
  if (!lastVisit) {
    messageEl.textContent = "Back so soon! Awesome!";
  } else {
    const daysSince = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    
    if (daysSince === 0) {
      messageEl.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      messageEl.textContent = `You last visited ${daysSince} day${daysSince === 1 ? '' : 's'} ago.`;
    }
  }
  
  localStorage.setItem('lastVisit', now);
}

// Initialize
document.addEventListener('DOMContentLoaded', displayVisitMessage);