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