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


// Combined Fetch and Lazy Loading Script
document.addEventListener('DOMContentLoaded', function() {
  // Fetch news data once and process both sections
  fetch('data/news.json')
    .then(response => response.json())
    .then(data => {
      // 1. Process Trending News with Lazy Loading
      const trendingGrid = document.getElementById('trending-grid');
      data.trending.forEach(news => {
        const card = document.createElement('div');
        card.classList.add('trending-card');
        card.innerHTML = `
          <img data-src="images/${news.image}" alt="${news.title}" class="lazy-load">
          <h2>${news.title}</h2>
          <p>${news.description}</p>
        `;
        trendingGrid.appendChild(card);
      });

      // 2. Process Editor's Choice with Lazy Loading
      const editorsGrid = document.getElementById('editors-grid');
      data.editorsChoice.forEach(editor => {
        const card = document.createElement('div');
        card.classList.add('editor-card');
        card.innerHTML = `
          <img data-src="images/${editor.image}" alt="${editor.name}" class="lazy-load">
          <p>${editor.name}</p>
        `;
        editorsGrid.appendChild(card);
      });

      // Initialize lazy loading for all images
      initLazyLoading();
    })
    .catch(error => console.error('Error loading news data:', error));

  // Lazy Loading Functionality
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy-load');
    
    // Skip if IntersectionObserver isn't supported
    if (!('IntersectionObserver' in window)) {
      lazyImages.forEach(img => {
        img.src = img.dataset.src;
      });
      return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '100px', // Start loading 100px before entering viewport
      threshold: 0.1
    });

    lazyImages.forEach(img => observer.observe(img));
  }
});


const dialog = document.getElementById('contact-dialog');
const openBtn = document.getElementById('open-dialog');
const closeBtn = document.getElementById('close-dialog');

// Open dialog
openBtn.addEventListener('click', () => dialog.showModal());

// Close dialog
closeBtn.addEventListener('click', () => dialog.close());

// Form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  console.log('Form submitted:', data);
  
  // Here you would typically send data to a server
  // fetch('/submit-form', { method: 'POST', body: formData })
  
  // Close dialog after submission
  dialog.close();
  
  // Optional: Show success message
  alert('Message sent successfully!');
});

