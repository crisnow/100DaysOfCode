const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");

context.scale(20, 20);

// to represent the tetris by a 2D array

const matrix = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0]
];

// to simplify the drawMatrix, we create a draw function
// and will use it in the update function, then the items can move

function draw() {
  /*
    each time, we hope it update the background too.
    */
  // first, fill the canvas as black
  context.fillStyle = "black";
  // second, put a rectangle as large as the canvas
  context.fillRect(0, 0, canvas.width, canvas.height);
  drawMatrix(player.matrix, player.pos);
}

// then we create a function to draw the matrix
// questions?
// - why we need an offset?
// Ans: you can control the position of players

function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = "red";
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

/*
 create playerDrop function to make items falls,
 why we need a drop function

*/

function playerDrop(){
    player.pos.y++;
    dropCounter = 0; // we do not need it to drop automatically
}



// we should make the items falling down
// by 1000 milisecond

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
  // if you called the time, it will give you the time.
  let deltaTime = time - lastTime;
  lastTime = time;

  dropCounter += deltaTime;
  if (dropCounter > dropInterval) {
    player.pos.y++;

    dropCounter = 0;
  }
  draw();
  requestAnimationFrame(update);
  //   console.log(deltaTime);
}

// create a player class??

const player = {
  pos: { x: 5, y: 5 },
  matrix: matrix
};

// now we need the keyboard control

document.addEventListener('keydown', event =>{
    if (event.keyCode === 37){
        player.pos.x--;
    }else if (event.keyCode === 39){
        player.pos.x++;
    }else if (event.keyCode === 40){
         playerDrop();
    }

});


// call the function
update();
