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
		square.style.width = `${100 / Math.sqrt(numOfSquares)}%`;
		squaresContainer.appendChild(square);
	}
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusivefunction getRandomIntInclusive(min, max) {
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getRandomRgbValue() {
	const r = getRandomIntInclusive(0, 255);
	const g = getRandomIntInclusive(0, 255);
	const b = getRandomIntInclusive(0, 255);
	return `rgb(${r}, ${g}, ${b})`;
}

function getSubstrInsideParen(str) {
	const openParenIndex = str.indexOf('(');
	const closeParenIndex = str.indexOf(')');
	const substr = str.slice(openParenIndex + 1, closeParenIndex);
	return substr;
}

function addSquaresHoverEffect() {
	squares = document.querySelectorAll('.square');
	squares.forEach((square) => {
		square.addEventListener('mouseover', () => {
			const squareComputedStyle = getComputedStyle(square);
			const currentBgColor =
				squareComputedStyle.getPropertyValue('background-color');
			if (currentBgColor === 'rgb(255, 255, 255)') {
				square.style.backgroundColor = getRandomRgbValue();
			} else {
				const currentFilter = squareComputedStyle.getPropertyValue('filter');
				if (currentFilter === 'none') {
					square.style.filter = 'brightness(0.9)';
				} else {
					const brightnessValue = Number(getSubstrInsideParen(currentFilter));
					if (brightnessValue === 0) {
						return;
					}
					square.style.filter = `brightness(${brightnessValue - 0.1})`;
				}
			}
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
