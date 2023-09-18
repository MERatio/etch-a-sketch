'use strict';

const squaresContainer = document.querySelector('.squares-container');

function addSquares(numOfSquares) {
	for (let i = 0; i < numOfSquares; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		square.setAttribute('style', `width: ${100 / Math.sqrt(numOfSquares)}%`);
		squaresContainer.appendChild(square);
	}
}

function addSquaresHoverEffect() {
	const squares = document.querySelectorAll('.square');
	squares.forEach((square) => {
		square.addEventListener('mouseover', (e) => {
			e.currentTarget.style.backgroundColor = 'blue';
		});
	});
}

addSquares(Math.pow(16, 2));
addSquaresHoverEffect();
