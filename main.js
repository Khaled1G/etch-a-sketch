/* VARIABLES */
const container = document.querySelector('.gridContainer');
const restartBtn = document.querySelector('#restartBtn');
const blackBtn = document.querySelector('#blackBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const colorPicker = document.getElementById("colorPicker");
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#sliderValue');

let currentColor = '';
let size = 16;


/* EVENTS */
restartBtn.onclick = () => clear();
rainbowBtn.onclick= () => switchColor('rainbow');
colorPicker.addEventListener('input', ()=>{
    currentColor = colorPicker.value
})
eraserBtn.onclick= () => switchColor('eraser');
blackBtn.onclick= () => switchColor('black');
slider.onmousemove = (e) => updateSizeValue(e.target.value)
slider.onchange = (e) => changeSize(e.target.value)


/* SIZE FUNCTIONS */
function updateSizeValue(value) {
    sliderValue.textContent= `${value} x ${value}`
  }
function setCurrentSize(newSize) {
    size = newSize
  }
function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    clear()
  }
 

/* SWITCHING COLOR FUNCTIONS */
function switchColor(color) {
    currentColor = color;
}
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function changeColor(e){
    if (currentColor == 'black') {
     e.target.style.backgroundColor = 'black'
    }
    else if (currentColor == 'eraser') {
    e.target.style.backgroundColor = 'transparent'}
    else if (currentColor == 'rainbow') {
    e.target.style.backgroundColor = getRandomColor()}
    else{
        e.target.style.backgroundColor = currentColor
    }
}
function clear(){
    container.textContent = '';
    createDiv(size);
}
;


function createDiv(size){
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size*size; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        div.addEventListener('mouseenter', changeColor)
        
        
    }
}
createDiv(size);