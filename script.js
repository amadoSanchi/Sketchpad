
const container = document.querySelector('#container');
const input = document.querySelector('input');

function createSquareDivs(amount) {

    if (amount < 1) {
    
        alert('You cannot insert negative values.');
    
    } else if (amount > 100) {

        alert('You cannot insert values greater than 100.');

    } else {
    
        for (let i = 0; i < amount * amount; i++) {
            const tile = document.createElement('div');
            tile.style.border = '1px solid white';
            tile.style.flexBasis = `${(1/amount) * 100}%`;
            tile.classList.add('tile');
            container.appendChild(tile);
    
        }
    }
}

function colorEffect() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        let hoverTimes = 100;
        tile.addEventListener('mouseover', () =>  {
            tile.style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
            console.log(hoverTimes);
            tile.style.opacity = `${hoverTimes}%`;
            (hoverTimes === 0) ? 0 : hoverTimes = hoverTimes - 10;
        });
    });
}

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * (maxNumber + 1));
}

input.addEventListener('keydown', event => {

    if (event.code === 'Enter') {
        container.innerHTML = "";
        createSquareDivs(input.value);
        colorEffect();
    }

});

createSquareDivs(1);
colorEffect();
