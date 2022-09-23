'use strict';

const dom = {
	grid: document.querySelector('#grid'),
};

function handleGridSquareMouseover(event) {
	event.target.classList.add('painted');
}

function populateGrid(numOfSquarePerSide) {
	dom.grid.style.gridTemplate = `repeat(${numOfSquarePerSide}, 1fr) / repeat(${numOfSquarePerSide}, 1fr)`;
	const numOfSquares = numOfSquarePerSide * numOfSquarePerSide;
	for (let i = 0; i < numOfSquares; i++) {
		const domGridSquare = document.createElement('div');
		domGridSquare.classList.add('grid-square');
		domGridSquare.addEventListener('mouseover', handleGridSquareMouseover);
		grid.appendChild(domGridSquare);
	}
}

populateGrid(16);
