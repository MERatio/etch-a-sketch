'use strict';

const GRID_SIZE = Math.pow(16, 2);

const squares = document.querySelector('.squares');

for (let i = 0; i < GRID_SIZE; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.setAttribute('style', `width: ${100 / Math.sqrt(GRID_SIZE)}%`);
	squares.appendChild(square);
}
