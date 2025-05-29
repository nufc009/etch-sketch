
let container = document.getElementById('container');

function createGrid(size = 64) {

    container.innerHTML = '';

    let row = size;
    let column = size;

    for (let i = 0; i < row; i++) {

        let gridRow = document.createElement('div');
        gridRow.classList.add('row');

    for (let j = 0; j < column; j++) {
        let gridColumn = document.createElement('div');
        gridColumn.classList.add('cell');

        gridColumn.addEventListener('mousemove', function(event) {
            gridColumn.style.backgroundColor = 'black';
        });

        gridRow.appendChild(gridColumn);
    }

    container.appendChild(gridRow);

    }

}

// createGrid();

    let gridButton = document.querySelector('#gridButton');

    gridButton.addEventListener('click', function() {

        let input = prompt('Type in the grid size (max 64)');
        let size = parseInt(input);

        if (size && size > 0 && size <= 64) {
            createGrid(size);
        } else {
            alert('enter a number between 1 and 64');
        }
    });

    



