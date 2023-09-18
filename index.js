'use strict';

const GRID_SIZE = Math.pow(16, 2);

const squaresContainer = document.querySelector('.squares-container');

for (let i = 0; i < GRID_SIZE; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.setAttribute('style', `width: ${100 / Math.sqrt(GRID_SIZE)}%`);
	squaresContainer.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
	square.addEventListener('mouseover', (e) => {
		e.currentTarget.style.backgroundColor = 'blue';
	});
});
