let color = "black"

function game(){
    createBoard(16);
    let btnPopup = document.querySelector("#popup");
    btnPopup.addEventListener("click", () => {
        let size = getSize();
        createBoard(size);
    });
}

function createBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberOfDivs = size * size;

    for (let i = 0; i < numberOfDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }

}

function getSize(){
    let input = prompt("Enter a Size for the board:");
    let message = document.querySelector("#message");
    let selection = document.querySelector(".header h2");

    if (input === ""){
        message.innerHTML = "Please enter a number!";
        selection.innerHTML = "Select a Size";
    } else if (input < 0 || input > 100){
        message.innerHTML = "Please enter a number from 1 to 100!";
        selection.innerHTML = "Select a Size";
    } else{
        message.innerHTML = "Let's Play";
        selection.innerHTML = `Size of ${input} X ${input}`
        return input;
    }
}

function colorDiv(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (color === "random"){
        this.style.backgroundColor = '#' + randomColor;
    } else{
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice){
    color = colorChoice;

}

function resetBoard(){
    let divs = document.querySelectorAll(".board div");
    divs.forEach((div) => div.style.backgroundColor = 'white')
}

game();
