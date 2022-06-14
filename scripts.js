console.log('Hello World!');
const sketchBoard_DOM = document.querySelector(`#sketch-board`);
const divArray_DOM = new Array(256).fill().map((element, index) => {
    let div = document.createElement("div");
    div.id = index;
    div.className = "styled-grid";
    sketchBoard_DOM.appendChild(div);
    return div;
});

divArray_DOM.forEach((element) => {
    element.addEventListener("mouseover", () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let elementStyle = element.style;
        elementStyle.backgroundColor = `#${randomColor}`;
    })
})
