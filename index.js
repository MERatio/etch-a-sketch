// Container
const container = document.createElement('div');
container.classList.add('container');

// Square container
const squareContainer = document.createElement('div');
squareContainer.classList.add('square-container');

// Options
const options = document.createElement('div');
options.classList.add('options');

// Instruction
const instruction = document.createElement('p');
instruction.classList.add('instruction');
instruction.textContent = 'Hold shift to draw';

// Reset button
const btnReset = document.createElement('button');
btnReset.textContent = 'Reset';
btnReset.className = 'btn btn-reset';

// Hue hsl color change
let hue = 0;

function setGridSize(gridSize) {
  squareContainer.style.cssText = `
    grid-template-columns: repeat(${gridSize}, 1fr);
    grid-template-rows: repeat(${gridSize}, 1fr);
  `;
}

// Append a square into the square container
function appendSquares(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    squareContainer.append(createSquare());
  }
}

// Create a single square
function createSquare(num) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', changeColor);
  return square;
}

// Change the color of square
function changeColor(e) {
  if (hue >= 360) hue = 0;
  if (e.shiftKey) {
    e.target.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    hue += 5;
  }
}

// Initialize/Reset
function init() {
  let gridSize;
  do {
    gridSize = prompt('How many squares per side?, min = 1, max = 64', 0);
    if (gridSize == null) {
      return;
    } else {
      +gridSize;
    }
  } while (isNaN(gridSize) || gridSize < 1 || gridSize > 64);

  // Empty the squareContainer
  while (squareContainer.firstChild) {
    squareContainer.removeChild(squareContainer.firstChild);
  }

  hue = 0;
  setGridSize(gridSize);
  appendSquares(gridSize);
}

// When user first visited the site or on browser reload
setGridSize(64);
appendSquares(64);

// Append nodes
options.append(instruction, btnReset);
container.append(squareContainer, options);
document.body.append(container);

btnReset.addEventListener('click', init);
