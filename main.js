//global constants
const DEFAULT_SIZE = 16;
//declare important variables
let drawing = false;
let color = "black";
let currentSize = DEFAULT_SIZE;

//grid container
const gridContainer = document.querySelector(".grid-container");

//buttons and inputs

const colorPicker = document.querySelector("#colorPicker");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const sizeValue = document.querySelector("#sizeValue");
const sizeSlider = document.querySelector("#sizeSlider");

//Event listeners
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeGridSize(e.target.value);

//secondary functions

function startPosition() {
  drawing = true;
}

function finishedPosition() {
  drawing = false;
}

//create a function that enables drawing in the grid -> the color of the cells will change
function draw() {
  if (!drawing) return;
  this.style.background = color;
}

//set the current color
function setCurrentColor(newColor) {
  color = newColor;
}

//set the current size of the grid

function setCurrentSize(newSize) {
  currentSize = newSize;
}

//clear grid
function clearGrid() {
  gridContainer.innerHTML = "";
}

//change the size of the grid
function changeGridSize(value) {
  setCurrentSize(value);
  updateSizeValue(value);
  reloadGrid();
}

//update the size of the grid inside the html
function updateSizeValue(currentValue) {
  sizeValue.textContent = `${currentValue}x${currentValue}`;
}

//when the size is changed the drawing is lost and a new grid is created
function reloadGrid() {
  clearGrid();
  createGrid(currentSize);
}

//MAIN FUNCTION
function createGrid(gridSize) {
  for (let row = 0; row < gridSize; row++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    gridContainer.appendChild(newRow);

    for (let column = 0; column < gridSize; column++) {
      let cell = document.createElement("div");
      cell.addEventListener("mousedown", startPosition);
      cell.addEventListener("mouseup", finishedPosition);
      cell.addEventListener("mouseover", draw);
      cell.classList.add("cell");
      cell.setAttribute(
        "style",
        `height:${400 / gridSize}px;width:${400 / gridSize}px`
      );
      newRow.appendChild(cell);
    }
  }
}

//Calling the MAIN FUNCTION when the page loads: createGrid()
window.onload = () => {
  createGrid(DEFAULT_SIZE);
};
