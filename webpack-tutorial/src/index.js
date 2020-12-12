import example from './images/qwe.png'
import './styles/main.scss'
class Square {
    constructor(randomPositionLeft, randomPositionTop, randomColor) {
        this.randomPositionLeft = randomPositionLeft;
        this.randomPositionTop = randomPositionTop;
        this.randomColor = randomColor;
    }
    newDiv = document.createElement("div");

    initSquare() {
        this.newDiv.style.backgroundColor = this.randomColor;
        this.newDiv.style.top = this.randomPositionTop;
        this.newDiv.style.left = this.randomPositionLeft;
        this.newDiv.classList.add('square-item')
        console.log(this.newDiv)
        return this.newDiv;
    }
}
const gameField = document.querySelector('.main-field');
const colors = ['red', 'blue', 'green'];
const randomColor = colors.[Math.floor(Math.random() * colors.length)];


const randomPositionLeft = (Math.floor(Math.random() * gameField.offsetWidth )) + 'px';
const randomPositionTop = (Math.floor(Math.random() * gameField.offsetHeight )) + 'px';

gameField.append(new Square(randomPositionLeft, randomPositionTop,randomColor).initSquare())

