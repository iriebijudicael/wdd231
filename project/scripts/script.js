document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('main-nav');
  const hamburger = document.getElementById('hamburger');
  
  hamburger.addEventListener('click', function() {
      nav.classList.toggle('active');
  });
  
  // Close menu when clicking on nav links (optional)
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
              nav.classList.remove('active');
              // Reset icon to menu if needed
              hamburger.classList.remove('ri-close-line');
              hamburger.classList.add('ri-menu-line');
          }
      });
  });
  
  // Reset menu on window resize
  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          nav.classList.remove('active');
          // Reset icon to menu if needed
          hamburger.classList.remove('ri-close-line');
          hamburger.classList.add('ri-menu-line');
      }
  });
});

// Fetch and display trending news
fetch('data/news.json')
  .then(response => response.json())
  .then(data => {
    const trendingGrid = document.getElementById('trending-grid');
    data.trending.forEach(news => {
      const card = document.createElement('div');
      card.classList.add('trending-card');
      card.innerHTML = `
        <img src="images/${news.image}" alt="${news.title}">
        <h2>${news.title}</h2>
        <p>${news.description}</p>
      `;
      trendingGrid.appendChild(card);
    });
  });

// Fetch and display editor's choice
fetch('data/news.json')
  .then(response => response.json())
  .then(data => {
    const editorsGrid = document.getElementById('editors-grid');
    data.editorsChoice.forEach(editor => {
      const card = document.createElement('div');
      card.classList.add('editor-card');
      card.innerHTML = `
        <img src="images/${editor.image}" alt="${editor.name}">
        <p>${editor.name}</p>
      `;
      editorsGrid.appendChild(card);
    });
  });