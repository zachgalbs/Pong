// Defining variables
const pOne = document.getElementById("player1");
const pTwo = document.getElementById("player2");
const ball = document.getElementById("ball");

let pOneTop = 10;
let pTwoTop = 10;
let pOneMovingUp = false;
let pOneMovingDown = false;
let pTwoMovingUp = false;
let pTwoMovingDown = false;

const paddleWidth = pOne.offsetWidth;
const paddleHeight = pOne.offsetHeight;

// Initialize paddle positions
function initPaddlePositions() {
  pOne.style.top = pOneTop + "px";
  pTwo.style.top = pTwoTop + "px";
  pTwo.style.right = "10px";
}

initPaddlePositions();

// Keydown event listener
function onKeyDown(e) {
  if (e.key === 's') pOneMovingDown = true;
  if (e.key === 'w') pOneMovingUp = true;
  if (e.key === 'ArrowDown') pTwoMovingDown = true;
  if (e.key === 'ArrowUp') pTwoMovingUp = true;
}

// Keyup event listener
function onKeyUp(e) {
  if (e.key === 's') pOneMovingDown = false;
  if (e.key === 'w') pOneMovingUp = false;
  if (e.key === 'ArrowDown') pTwoMovingDown = false;
  if (e.key === 'ArrowUp') pTwoMovingUp = false;
}

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

// Move paddles based on key events
function movePaddles() {
    if (pOneMovingUp && parseInt(pOne.style.top) > 10) {
      pOneTop -= 5;
    }
    if (pOneMovingDown && parseInt(pOne.style.top) < window.innerHeight - paddleHeight - 10) {
      pOneTop += 5;
    }
    pOne.style.top = pOneTop + "px";
  
    if (pTwoMovingUp && parseInt(pTwo.style.top) > 10) {
      pTwoTop -= 5;
    }
    if (pTwoMovingDown && parseInt(pTwo.style.top) < window.innerHeight - paddleHeight - 10) {
      pTwoTop += 5;
    }
    pTwo.style.top = pTwoTop + "px";
  
    requestAnimationFrame(movePaddles);
  }
  
  // Start moving paddles
  requestAnimationFrame(movePaddles);
  
  // Move the ball
  function moveBall() {
    const ballStyle = getComputedStyle(ball);
    let ballX = parseInt(ballStyle.left);
    let ballY = parseInt(ballStyle.top);
    let ballDir = Math.round(Math.random());
  
    if (ballDir === 0 && ballX > 10) {
      ballX -= 5;
      ball.style.left = ballX + "px";
    }
  
    requestAnimationFrame(moveBall);
  }
  
  // Start moving the ball
  requestAnimationFrame(moveBall);
  