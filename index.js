'use strict';

const dom = {
	grid: document.querySelector('#grid'),
};

function populateGrid(numOfSquarePerSide) {
	dom.grid.style.gridTemplate = `repeat(${numOfSquarePerSide}, 1fr) / repeat(${numOfSquarePerSide}, 1fr)`;
	const numOfSquares = numOfSquarePerSide * numOfSquarePerSide;
	for (let i = 0; i < numOfSquares; i++) {
		const domGridSquare = document.createElement('div');
		domGridSquare.classList.add('grid-square');
		grid.appendChild(domGridSquare);
	}
}

populateGrid(16);
