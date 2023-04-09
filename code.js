// Defining variables
const pOne = document.getElementById("player1");
const pTwo = document.getElementById("player2");
const ball = document.getElementById("ball");
const startButton = document.getElementById("startButton");
const countdownTimer = document.getElementById("countdownTimer");

let pOneTop = 10;
let pTwoTop = 10;
let pOneMovingUp = false;
let pOneMovingDown = false;
let pTwoMovingUp = false;
let pTwoMovingDown = false;
let countdownTime = 3;
// set the countdownTimer to the countdownTime
countdownTimer.innerText = countdownTime;

const paddleWidth = pOne.offsetWidth;
const paddleHeight = pOne.offsetHeight;

//initialize the paddle positions:
initPaddlePositions();

// making game start when button is pressed

startGame();


// Initialize paddle positions
function initPaddlePositions() {
    pOne.style.top = pOneTop + "px";
    pTwo.style.top = pTwoTop + "px";
    pTwo.style.right = "0px";
  }

function main() {
  // Move the ball initially
  let randomNum = Math.round(Math.random());
  let xDir;
  let yDir;
  if (randomNum == 0) {
      xDir = "left"
      yDir = "up"
  }
  if (randomNum == 1) {
      xDir = "right"
      yDir = "up"
  }
  // Move the ball and check if the ball has hit the edge
  function moveBall() {
      const ballStyle = getComputedStyle(ball);
      const pOneStyle = getComputedStyle(pOne);
      const pTwoStyle = getComputedStyle(pTwo);
      let pOneLeft = parseInt(pOneStyle.left);
      let pOneTop = parseInt(pOneStyle.top);
      let pTwoLeft = parseInt(pTwoStyle.left);
      let pTwoTop = parseInt(pTwoStyle.top);
      let pOneWidth = parseInt(pOneStyle.width);
      let pOneHeight = parseInt(pOneStyle.height);
      let ballX = parseInt(ballStyle.left);
      let ballY = parseInt(ballStyle.top);
      let speed = window.innerWidth/75;
      // move the balls y
      if (yDir == "down") {ballY += speed;}
      if (yDir == "up") {ballY -= speed;}
      
      // move the balls x
      if (xDir == "left") {ballX -= speed;}
      if (xDir == "right") {ballX += speed;}
  
      // check collision
      if (ballY < 10) {yDir = "down";}
      if (ballY > window.innerHeight-10) {yDir = "up";}

      // if the ball is at or past the rackets x position,
      if (ballX <= pOneLeft + pOneWidth) {
        // if the balls y position is between the top and bottom of the paddle
        if (ballY <= pOneTop + pOneHeight + 10 && ballY >= pOneTop - 20) {xDir = "right";}
      }
      if (ballX + parseInt(ballStyle.width) >= pTwoLeft) {
        if (ballY <= pTwoTop + pOneHeight + 10 && ballY >= pTwoTop - 20) {xDir = "left";}
      }
      // checking if ball has hit the edge
      if (ballX <= 0) {
        setTimeout(() => {
          alert("Player two (right side) wins!");
        }, 100);
        return;
      }
      if (ballX + ball.offsetWidth >= document.documentElement.clientWidth) {
        setTimeout(() => {
          alert("Player one (left side) wins!");
        }, 100);
        return;
      }

      // finalizing the ball position
      ball.style.top = ballY + "px";
      ball.style.left = ballX + "px";
  
      requestAnimationFrame(moveBall);
  }
  // Start moving the ball
  requestAnimationFrame(moveBall);
}

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
    pOneTop -= 15;
    }
    if (pOneMovingDown && parseInt(pOne.style.top) < window.innerHeight - paddleHeight - 10) {
    pOneTop += 15;
    }
    pOne.style.top = pOneTop + "px";

    if (pTwoMovingUp && parseInt(pTwo.style.top) > 10) {
    pTwoTop -= 15;
    }
    if (pTwoMovingDown && parseInt(pTwo.style.top) < window.innerHeight - paddleHeight - 10) {
    pTwoTop += 15;
    }
    pTwo.style.top = pTwoTop + "px";

    requestAnimationFrame(movePaddles);
}

// Start moving paddles
requestAnimationFrame(movePaddles);
    
function startGame() {
    startButton.addEventListener('mousedown', () => {
        countdownTimer.style.opacity = '1';
        countdownTheTimer();
        setTimeout(() => {
            startButton.style.opacity = '0';
            main();
            ball.style.opacity = '1';
        }, 3000)
    });
}

function countdownTheTimer() {
    const countdownInterval = setInterval(() => {
        countdownTime--;
        countdownTimer.innerText = countdownTime;
        if (countdownTime === 0) {
            clearInterval(countdownInterval);
            countdownTimer.style.display = 'none';
        }
    }, 1000);
}