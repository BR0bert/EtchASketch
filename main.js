//declare important variables

const gridContainer = document.querySelector(".grid-container");

function createGrid(gridSize) {
  for (let row = 0; row < gridSize; row++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    gridContainer.appendChild(newRow);

    for (let column = 0; column < gridSize; column++) {
      let newColumn = document.createElement("div");
      newColumn.classList.add("cell");
      newColumn.setAttribute(
        "style",
        `height:${400 / gridSize}px;width:${400 / gridSize}px`
      );
      newRow.appendChild(newColumn);
    }
  }
}

createGrid(24);
