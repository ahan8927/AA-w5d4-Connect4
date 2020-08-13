/* TO-DO!!
    New Game - hide board, set starting turn, reset board.
-   Something to keep track of the turn/ who's turn it is
    check full column
    check winner
    check tie
*/
import { Game } from './game.js';
let game = undefined;
// console.log(Game);

let updateUI = () => {
    if (!game) {
        document
            .getElementById("board-holder")
            .classList.add("is-invisible");
    }
    else {
        document
            .getElementById("board-holder")
            .classList.remove("is-invisible");
    }
}

const player1 = document.getElementById("player-1-name");
const player2 = document.getElementById("player-2-name");
document.addEventListener("keyup", eve => {
    if (player1.value && player2.value) {
        document
            .getElementById("new-game")
            .removeAttribute("disabled");
    }

});

document
    .getElementById("new-game")
    .addEventListener("click", eve => {
        game = new Game(player1.value, player2.value);
        document
            .getElementById("board-holder")
            .classList.remove("is-invisible");
        document
            .getElementById("new-game")
            .setAttribute("disabled", "true");
        document
            .getElementById("game-name")
            .innerHTML = game.getName();

        player1.value = "";
        player2.value = "";
        updateUI();
    });


let counter = 5;
let columnArr = [];
let something = document.getElementById("click-targets");


for (let i = 0; i <= 6; i++) {
    let columnSquares = [];
    document.querySelectorAll(".token-square").forEach(ele => {
        if (Number(ele.id[9]) === i) {
            columnSquares.push(ele.id);
        }
    });
    columnArr.push(columnSquares);
}
// console.log(columnArr)
// console.log(column)

something.addEventListener("click", eve => {
    let boardSquares = document.querySelectorAll(".token-square");
    let columnNumber = Number(eve.target.id[7]);
    if (instanceArr[columnNumber].isNotOccupied()) {
        instanceArr[columnNumber].addToken();
    }
    // console.log(instanceArr[columnNumber])
    // if(instanceArr[columnNumber].isOccupied){
    //instanceArr[columnNumber].counter

    // }
});

class Column {
    constructor(columnSquares) {
        this.counter = 5;
        this.columnSquares = columnSquares
    }

    isNotOccupied() { // true if NOT occupied
        return ((document.getElementById(this.columnSquares[this.counter]).style.backgroundColor !== "red") || (document.getElementById(this.columnSquares[this.counter]).style.backgroundColor !== "black"));
    }

    addToken() { // add class
        document
            .getElementById(this.columnSquares[this.counter])
            .setAttribute("class", `token-square token > red` /*${red}*/);
        this.decCounter();
    }

    decCounter() {
        this.counter--;
    }
}

const col1 = new Column(columnArr[0]);
const col2 = new Column(columnArr[1]);
const col3 = new Column(columnArr[2]);
const col4 = new Column(columnArr[3]);
const col5 = new Column(columnArr[4]);
const col6 = new Column(columnArr[5]);
const col7 = new Column(columnArr[6]);
const instanceArr = [col1, col2, col3, col4, col5, col6, col7];


// document
//     .getElementById("square-0-0")
//     .setAttribute("class", "token-square token > red");
