document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/cars') // Make sure your API endpoint is correct
    .then(response => response.json())
    .then(data => {
      const carGrid = document.getElementById('car-grid');
      data.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        carItem.innerHTML = `
          <img src="${car.imageUrl}" alt="${car.name}">
          <h3>${car.name}</h3>
          <p>${car.description}</p>
        `;
        carGrid.appendChild(carItem);
      });
    })
    .catch(error => console.error('Error fetching cars:', error));
});