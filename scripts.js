console.log('Hello World!');
// It's default state of the sketch board.
const sketchBoard_DOM = document.querySelector(`#sketch-board`);
const sketchBoardStyle = sketchBoard_DOM.style;
let divArray_DOM = new Array(256).fill().map((element, index) => {
    let div = document.createElement("div");
    div.id = index;
    div.className = "styled-grid";
    div.addEventListener("mouseover", () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let divStyle = div.style;
        divStyle.backgroundColor = `#${randomColor}`
    });
    sketchBoard_DOM.appendChild(div);
    return div;
});

// It's user-input number * number of squares, prompt triggered sketch board.
const promptButton = document.querySelector(`#prompt-button`);
promptButton.addEventListener("click", () => {
    let numberOfSquares = prompt("How many squares per side do you want?", "16");
        sketchBoardStyle.gridTemplateColumns = `repeat(${+numberOfSquares}, 1fr)`;
        sketchBoardStyle.gridTemplateRows = `repeat(${+numberOfSquares}, 1fr)`;
        divArray_DOM = new Array(+numberOfSquares * +numberOfSquares).fill().map((element, index) => {
        let div = document.createElement("div");
        div.id = index;
        div.className = "styled-grid";
        div.addEventListener("mouseover", () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let divStyle = div.style;
        divStyle.backgroundColor = `#${randomColor}`
        });
        sketchBoard_DOM.appendChild(div);
        return div;
    });
});