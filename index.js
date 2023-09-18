'use strict';

const changeSquaresPerSide = document.querySelector('.change-squares-per-side');
const squaresContainer = document.querySelector('.squares-container');
let squares;

function getSquaresPerSide() {
	let squaresPerSide;
	do {
		squaresPerSide = prompt(
			'Input number of squares per side (minimum = 1, maximum = 100)',
			16,
		);
		if (squaresPerSide === null) {
			return null;
		}
		squaresPerSide = Number(squaresPerSide);
	} while (
		Number.isNaN(squaresPerSide) ||
		squaresPerSide < 1 ||
		squaresPerSide > 100
	);

	return squaresPerSide;
}

function addSquares(numOfSquares) {
	for (let i = 0; i < numOfSquares; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		square.setAttribute('style', `width: ${100 / Math.sqrt(numOfSquares)}%`);
		squaresContainer.appendChild(square);
	}
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusivefunction getRandomIntInclusive(min, max) {
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function addSquaresHoverEffect() {
	squares = document.querySelectorAll('.square');
	squares.forEach((square) => {
		square.addEventListener('mouseover', (e) => {
			const r = getRandomIntInclusive(0, 255);
			const g = getRandomIntInclusive(0, 255);
			const b = getRandomIntInclusive(0, 255);
			e.currentTarget.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
		});
	});
}

function setup(firstSetup, squaresPerSide) {
	if (!firstSetup) {
		removeSquares();
	}
	addSquares(Math.pow(squaresPerSide, 2));
	addSquaresHoverEffect();
}

function handleChangeSquaresPerSideClick() {
	const squaresPerSide = getSquaresPerSide();
	if (squaresPerSide === null) {
		return;
	}
	setup(false, squaresPerSide);
}

function removeSquares() {
	squares.forEach((square) => {
		square.removeEventListener('mouseover', handleChangeSquaresPerSideClick);
		square.remove();
	});
}

changeSquaresPerSide.addEventListener('click', handleChangeSquaresPerSideClick);

setup(true, 16);
