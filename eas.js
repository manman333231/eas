const container = document.querySelector("#container");
const generator = document.querySelector("#generator");
container.setAttribute("style", "display: flex; height: 700px; width: 700px; border: 1px solid black;");
let outerBlocks = [];
let innerBlocks = [];
let size = 8;

const generateGrid = (size) => {
  for(let i = 0; i <= (size - 1); i++) {
    outerBlocks[i] = document.createElement("div");
    outerBlocks[i].setAttribute("style", "flex: auto; flex-direction: column; display: flex;");
    for(let j = 0; j <= (size - 1); j++) {
      innerBlocks[j + i*size] = document.createElement("div");
      innerBlocks[j + i*size].setAttribute("style", "flex: auto; ");
      innerBlocks[j + i*size].addEventListener("mouseover", () => {
        innerBlocks[j + i*size].setAttribute("style", "flex: auto; background-color: black;");
      });
      innerBlocks[j + i*size].addEventListener("mouseout", () => {
        innerBlocks[j + i*size].setAttribute("style", "flex: auto; background-color: white;");
      });
      outerBlocks[i].appendChild(innerBlocks[j + i*size]);
    }
    container.appendChild(outerBlocks[i]);
  }
}

const deleteGrid = () => {
  container.innerHTML = '';
  innerBlocks = [];
  outerBlocks = [];
}

generateGrid(size);

generator.addEventListener("click", () => {
  size = prompt("What size u want the next grid? ");
  deleteGrid();
  generateGrid(size);
});


