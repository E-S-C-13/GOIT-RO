// Function to generate a random HEX color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Function to create boxes based on amount
function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  let boxHTML = '';

  // Initial size of the first box
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin-bottom: 10px;"></div>`;
    size += 10; // Increase size for the next box
  }

  boxesContainer.innerHTML = boxHTML;
}

// Function to destroy all boxes
function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}

// Event listener for the Create button
const createButton = document.querySelector('[data-create]');
createButton.addEventListener('click', () => {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value, 10);
  
  if (!isNaN(amount)) {
    createBoxes(amount);
  }
});

// Event listener for the Destroy button
const destroyButton = document.querySelector('[data-destroy]');
destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
