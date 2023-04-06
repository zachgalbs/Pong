let pOne = document.getElementById("player1");
let pTwo = document.getElementById("player2")
let pOnePos = 10;
let pTwoPos = 10;
pOne.
// Every time there is a key down:
document.onkeydown = function(e) {
    if (e.key == 's' && parseInt(pOne.style.top) < window.innerHeight-50) {
        pOneTop += 20;
        pOne.style.top = pOneTop + "px";
    }
    if (e.key == 'w' && parseInt(pOne.style.top) > 10) {
        pOneTop -= 20;
        pOne.style.top = pOneTop + "px";
    }
    if (e.key == 'ArrowDown' && parseInt(pTwo.style.top) < window.innerHeight-50) {
        pTwoTop += 20;
        pTwo.style.top = pTwoTop + "px";
    }
    console.log(pTwo.style.top)
    if (e.key == 'ArrowUp' && parseInt(pTwo.style.top) > 10) {
        pTwoTop -= 20;
        pTwo.style.top = pTwoTop + "px";
    }
}