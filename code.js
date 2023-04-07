let pOne = document.getElementById("player1");
let pTwo = document.getElementById("player2");
let pOneTop = 10;
let pTwoTop = 10;
pTwo.style.top = pTwoTop + "px";
pTwo.style.right = "10px";
pOne.style.top = pOneTop + "px";
let pOneMovingUp = false;
let pOneMovingDown = false;
let pTwoMovingUp = false;
let pTwoMovingDown = false;
let width = pOne.offsetWidth
let height = pOne.offsetHeight

document.addEventListener('keydown', function(e) {
    if (e.key == 's') {
        pOneMovingDown = true;
    }
    if (e.key == 'w') {
        pOneMovingUp = true;
    }
    if (e.key == 'ArrowDown') {
        pTwoMovingDown = true;
    }
    if (e.key == 'ArrowUp') {
        pTwoMovingUp = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key == 's') {
        pOneMovingDown = false;
    }
    if (e.key == 'w') {
        pOneMovingUp = false;
    }
    if (e.key == 'ArrowDown') {
        pTwoMovingDown = false;
    }
    if (e.key == 'ArrowUp') {
        pTwoMovingUp = false;
    }
});

function movePaddles() {
    if (pOneMovingUp && parseInt(pOne.style.top) > 10) {
        pOneTop -= 5;
    }
    if (pOneMovingDown && parseInt(pOne.style.top) < window.innerHeight-height-10) {
        pOneTop += 5;
    }
    pOne.style.top = pOneTop + "px";

    if (pTwoMovingUp && parseInt(pTwo.style.top) > 10) {
        pTwoTop -= 5;
    }
    if (pTwoMovingDown && parseInt(pTwo.style.top) < window.innerHeight-height-10) {
        pTwoTop += 5;
    }
    pTwo.style.top = pTwoTop + "px";
}

setInterval(movePaddles, 10);
