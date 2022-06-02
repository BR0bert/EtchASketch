//declare important variables
let drawing = false;

const gridContainer = document.querySelector(".grid-container");

//secondary functions

function startPosition() {
  drawing = true;
}

function finishedPosition() {
  drawing = false;
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

//create a function that enables drawing in the grid -> the color of the cells will change to black

function draw() {
  if (!drawing) return;
  this.style.background = "black";
}

//Calling the MAIN FUNCTION: createGrid()
createGrid(16);
