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
        this.newDiv.style.backgroundColor = this.randomColor[1];
        this.newDiv.style.top = this.randomPositionTop;
        this.newDiv.style.left = this.randomPositionLeft;;
        this.newDiv.classList.add('square-item');
        this.newDiv.classList.add(this.randomColor[0]);

        return this.newDiv;
    }
}

const gameField = document.querySelector('.main-field');

const randomColor = () =>{
    const colorsClass = [['redItem', 'red'],['blueItem', 'blue'],['greenItem', 'green']];
    let number = (Math.floor(Math.random() * 3));
    let arr=[];
    let choosenItem;
    colorsClass.forEach(function (item,index) {
        arr.push(item)
    })
    return choosenItem = arr[number];
};

const randomQuantity = () => (Math.floor(Math.random() * 3) + 1);
const randomPositionLeft = () => (Math.floor(Math.random() * gameField.offsetWidth )) + 'px';
const randomPositionTop = () =>(Math.floor(Math.random() * gameField.offsetHeight )) + 'px';

const addAnotherSquare = () => gameField.append(new Square(randomPositionLeft(), randomPositionTop(),randomColor()).initSquare());
addAnotherSquare()

const removeItemSquare = (square) => square.parentNode.removeChild(square);
//const addAnotherSquare = (square) =>
/*class RandomQuantity extends Square {
    randomQuantity(){
        alert(this.randomColor + 'прячется!');
    }
}
const quantitySquare = new RandomQuantity(randomPositionLeft(), randomPositionTop(),randomColor()).initSquare();
quantitySquare.initSquare();*/


gameField.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.classList.contains === 'square-item'){
        console.log('qwe')
       removeItemSquare(e.target);
        let i = 0;
        const randomQuantityNum = randomQuantity();
        while( i < randomQuantityNum){
            i++;
            addAnotherSquare()
        }
    }
});



