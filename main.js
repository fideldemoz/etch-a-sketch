const container = document.querySelector('.container');
const range = document.querySelector('input[type="range"]');
const span = document.querySelector('span');
const colorInput = document.querySelector('input[type="color"]');
const eraserbtn = document.querySelector('input[value="Clear"]');
let columns;
span.textContent = `${range.value} x ${range.value}`;

function setInitialGrid() {
for (let i = 30**2; i > 0; i--) {
	container.appendChild(createDiv());
}}

function listenToRange() {
	range.addEventListener('change', (e) => {
		let val = e.target.value;
	columns = val;
	span.textContent = `${val} x ${val}`;
	container.setAttribute('style', `grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr)`);
	addDivs(columns);
});
}


function createDiv() {
	const divNew = document.createElement('div');
	return divNew;
}

function addDivs(columns) {
for (let i = columns**2; i > 0; i--) {
	container.appendChild(createDiv());
}}

setInitialGrid();

function getSolidMode() {
	color = colorInput.value;
	colorInput.addEventListener('change', (e) => {
		color = e.target.value;
		return color;
		console.log(color);
	})
	console.log(color);
	return color;
}

listenToRange()


function reset() {
	containerDiv.forEach((item) => {
	item.style.backgroundColor = 'white';
	})
}

eraserbtn.addEventListener('click', reset);

const containerDiv = document.querySelectorAll('.container div');

containerDiv.forEach((item) => {
	item.addEventListener('mouseover', () => {
		item.style.backgroundColor = getSolidMode();
	})
})
