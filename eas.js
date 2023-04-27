let grid = document.querySelector('#grid');
let rangedisplay = document.querySelector('#rangedisplay');

let slide = document.querySelector('#range');
let side = slide.value;
slide.addEventListener('change', changeGrid);

let tempgrid = document.createElement('div');
tempgrid.classList.add('tempgrid');
grid.appendChild(tempgrid);

for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    let x = 700 / 16;
    row.style.height = `${x}px`;
    for (let j = 0; j < 16; j++) {
        let block = document.createElement('div')
        block.classList.add('block');

        block.style.height = `${x}px`;
        block.style.width = `${x}px`;
        row.appendChild(block);
    }
    tempgrid.appendChild(row);
}

function changeGrid() {
    grid.removeChild(tempgrid);
    tempgrid = document.createElement('div');
    tempgrid.classList.add('tempgrid');

    side = slide.value;
    rangedisplay.textContent = side;
    console.log(side);
    for (let i = 0; i < side; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        let x = 700 / side;
        row.style.height = `${x}px`;
        for (let j = 0; j < side; j++) {
            let block = document.createElement('div')
            block.classList.add('block');

            block.style.height = `${x}px`;
            block.style.width = `${x}px`;
            row.appendChild(block);
        }
        tempgrid.appendChild(row);
    }
    grid.appendChild(tempgrid);

}


let color = "black";
let colorselect = document.getElementById('colorinput');
colorselect.addEventListener('change', () =>{
    color = colorselect.value;
});

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

grid.addEventListener('mouseover',function (event) {
    if(mouseDown && event.target.className === "block"){
        event.target.style.background = color;
    }
});








