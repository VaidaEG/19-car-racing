import { models } from './modelsData.js';
import { getModel } from './getModel.js';

const car1 = document.querySelector('.car-1');
const car2 = document.querySelector('.car-2');
const pyroBlock = document.querySelector('.pyro');
const winBlock = document.querySelector('.win');
const winP = winBlock.querySelector('p');
const playAgain = winBlock.querySelector('button');
let victory = false;

const windowWidth = innerWidth;
const carWidth = 150;
const finishWidth = 40;
const finishRightSpace = 10;
const carStep = 50;
const finishPosition = windowWidth - carWidth - finishWidth - finishRightSpace;

const car1Model = getModel(models);
const car2Model = getModel(models);

car1.dataset.model = car1Model;
car2.dataset.model = car2Model;

let car1Position = 0;
let car2Position = 0;

car1.style.left = car1Position;
car2.style.left = car2Position;

addEventListener('keyup', (event) => {
    if (victory) {
        return;
    }

    const key = event.key;

    if (key === 'a') {
        car1Position += carStep;
        car1.style.left = car1Position + 'px';
        if (car1Position > finishPosition) {
            victory = true;
            winP.innerText = 'Laimėjo pirmasis automobilis!';
            winBlock.classList.add('show');
            pyroBlock.classList.add('show');
            // alert('Laimėjo pirmas automobilis!');
            // location.reload();
        }
    }
    if (key === 'l') {
        car2Position += carStep;
        car2.style.left = car2Position + 'px';
        if (car2Position > finishPosition) {
            victory = true;
            winP.innerText = 'Laimėjo antrasis automobilis!';
            winBlock.classList.add('show');
            pyroBlock.classList.add('show');
            // alert('Laimėjo antras automobilis!');
            // location.reload();
        }
    }
})

playAgain.addEventListener('click', () => {
    location.reload();
})