'use strict';

const dom = {
	grid: document.querySelector('#grid'),
	boxesPromptBtn: document.querySelector('#boxes-prompt-btn'),
};

function handleGridSquareMouseover(event) {
	const style = event.target.style;
	const prevOpacity = style.opacity;

	if (prevOpacity === '1') {
		return;
	} else if (prevOpacity === '') {
		style.opacity = '0.1';
	} else {
		style.opacity = parseFloat(parseFloat(prevOpacity).toFixed(1)) + 0.1;
	}
}

function populateGrid(numOfSquarePerSide) {
	dom.grid.style.gridTemplate = `repeat(${numOfSquarePerSide}, 1fr) / repeat(${numOfSquarePerSide}, 1fr)`;
	const numOfSquares = numOfSquarePerSide * numOfSquarePerSide;
	for (let i = 0; i < numOfSquares; i++) {
		const domGridSquare = document.createElement('div');
		domGridSquare.classList.add('grid-box');
		domGridSquare.addEventListener('mouseover', handleGridSquareMouseover);
		grid.appendChild(domGridSquare);
	}
}

function getNumOfSquarePerSide() {
	while (true) {
		const input = prompt('Input a number of boxes from 16 to 100.');
		if (input === null) {
			return null;
		} else if (Number.isInteger(Number(input)) && input > 15 && input < 101) {
			return Number(input);
		}
	}
}

function handleBoxesPromptBtn() {
	const numOfSquarePerSide = getNumOfSquarePerSide();
	if (numOfSquarePerSide !== null) {
		dom.grid.innerHTML = '';
		populateGrid(numOfSquarePerSide);
	}
}

dom.boxesPromptBtn.addEventListener('click', handleBoxesPromptBtn);

populateGrid(16);
