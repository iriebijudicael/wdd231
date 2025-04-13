// Membership data in JSON format
/*const membershipData = {
    cards: [
      {
        type: "np",
        title: "NP Membership",
        description: "For non-profit organizations",
        price: "No fee",
        modalId: "np-modal",
        benefits: [
          "Free listing in our directory",
          "Access to networking events",
          "Monthly newsletter",
          "Community recognition"
        ],
        feeNote: "No membership fee for registered non-profit organizations."
      },
      {
        type: "bronze",
        title: "Bronze Membership",
        description: "Basic business benefits",
        price: "$250/year",
        modalId: "bronze-modal",
        benefits: [
          "All NP benefits",
          "10% discount on chamber events",
          "Business training workshops",
          "Basic listing in our business spotlight"
        ],
        feeNote: "Annual fee: $250"
      },
      {
        type: "silver",
        title: "Silver Membership",
        description: "Enhanced benefits",
        price: "$500/year",
        modalId: "silver-modal",
        benefits: [
          "All Bronze benefits",
          "20% discount on chamber events",
          "Priority listing in directory",
          "Access to exclusive networking groups",
          "Quarterly business consultation"
        ],
        feeNote: "Annual fee: $500"
      },
      {
        type: "gold",
        title: "Gold Membership",
        description: "Premium benefits",
        price: "$1000/year",
        modalId: "gold-modal",
        benefits: [
          "All Silver benefits",
          "30% discount on chamber events",
          "Featured spotlight on homepage",
          "VIP access to all events",
          "Monthly business consultation",
          "Premium advertising opportunities"
        ],
        feeNote: "Annual fee: $1000"
      }
    ]
  };*/
  
  // Function to create membership cards
  function createMembershipCards() {
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'membership-cards';
  
    membershipData.cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = `card ${card.type}`;
  
      const title = document.createElement('h3');
      title.textContent = card.title;
  
      const description = document.createElement('p');
      description.textContent = card.description;
  
      const price = document.createElement('p');
      price.innerHTML = `<strong>${card.price}</strong>`;
  
      const link = document.createElement('a');
      link.href = `#${card.modalId}`;
      link.className = 'info-link';
      link.textContent = 'Learn More';
  
      cardElement.appendChild(title);
      cardElement.appendChild(description);
      cardElement.appendChild(price);
      cardElement.appendChild(link);
  
      cardsContainer.appendChild(cardElement);
    });
  
    return cardsContainer;
  }
  
  // Function to create modals
  function createModals() {
    const fragment = document.createDocumentFragment();
  
    membershipData.cards.forEach(card => {
      const modal = document.createElement('dialog');
      modal.id = card.modalId;
  
      const closeButton = document.createElement('button');
      closeButton.className = 'close-modal';
      closeButton.innerHTML = '✕';
      closeButton.addEventListener('click', () => modal.close());
  
      const title = document.createElement('h2');
      title.textContent = `${card.title} Benefits`;
  
      const benefitsList = document.createElement('ul');
      card.benefits.forEach(benefit => {
        const item = document.createElement('li');
        item.textContent = benefit;
        benefitsList.appendChild(item);
      });
  
      const feeNote = document.createElement('p');
      feeNote.textContent = card.feeNote;
  
      modal.appendChild(closeButton);
      modal.appendChild(title);
      modal.appendChild(benefitsList);
      modal.appendChild(feeNote);
  
      fragment.appendChild(modal);
    });
  
    return fragment;
  }
  
  // Function to initialize modal functionality
  function initModals() {
    document.querySelectorAll('.info-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('href').substring(1);
        const modal = document.getElementById(modalId);
        if (modal) modal.showModal();
      });
    });
  }
  
  // Main function to build the membership section
  function buildMembershipSection() {
    const container = document.createElement('div');
    
    // Create and append cards
    const cards = createMembershipCards();
    container.appendChild(cards);
    
    // Create and append modals
    const modals = createModals();
    container.appendChild(modals);
    
    // Add to DOM
    document.body.appendChild(container);
    
    // Initialize modal functionality
    initModals();
  }
  
  // Call the main function when DOM is loaded
  document.addEventListener('DOMContentLoaded', buildMembershipSection);