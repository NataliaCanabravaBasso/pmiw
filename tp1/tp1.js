//Canabrava Basso Natalia
//tp1 comision 5
//link video explicativo tp1: https://www.youtube.com/watch?v=yVvGHY6smlw 

//al principio del video mostre solo el programa ejecutado y no el codigo mientras explicaba 
//porque estaba explicando cosas del codigo de processing del año pasado y no de p5js (soy recursante), y queria ser breve para pasar a los cambios de p5js, 
//despues vi que quedo medio larga esa parte pero queria explicar el uso de arrays D: Perdon

let cant = 10;
let tam;

let img;

let heartSizeMultiplier = 1.0;
let growing = true;
let maxHeartSizeMultiplier = 2.0;

let heartColors;
let squareColors;

let prevMouseX, prevMouseY;
let flipping;
let flipProgress;

function preload() {

  img = loadImage('Data/referencia.jpg');
}

function setup() {
  createCanvas(800, 400);
  tam = (width / 2.0) / cant;

  //define arrays de colores 
  heartColors = [
    color(166, 17, 27), // rojo
    color(255)          // blanco
  ];
  squareColors = [
    color(253, 192, 225), // rosa bebé
    color(177, 102, 169)  // fucsia
  ];

  reiniciarVariables();
}

function draw() {
  background(255);
  image(img, 0, 0, width / 2.0, height);
  drawSquares();
  drawHearts();
  updateHeartSize();
  flipAnimation();
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

function drawSquares() {
  for (let i = 0; i < cant; i++) {
    for (let j = 0; j < cant; j++) {
      if (
        mouseX >= (width / 2.0) + i * tam && mouseX < (width / 2.0) + (i + 1) * tam &&
        mouseY >= j * tam && mouseY < (j + 1) * tam
      ) {
        flipping[i][j] = true;
      }

      let currentSquareColor = squareColors[(i + j) % 2];
      if (flipping[i][j]) {
        currentSquareColor = lerpColor(currentSquareColor, invertColor(currentSquareColor), flipProgress[i][j]);
      }
      fill(currentSquareColor);
      noStroke();
      rect((width / 2.0) + i * tam, j * tam, tam, tam);
    }
  }
}

function drawHearts() {
  let heartColorChange = 0;
  for (let i = 0; i < cant; i++) {
    for (let j = 0; j < cant; j++) {
      let heartSize = tam / 3.0 * heartSizeMultiplier;
      let currentHeartColor = heartColors[heartColorChange];
      if (flipping[i][j]) {
        currentHeartColor = lerpColor(currentHeartColor, invertColor(currentHeartColor), flipProgress[i][j]);
      }
      drawHeart((width / 2.0) + i * tam, j * tam, heartSize, currentHeartColor);
      drawHeart((width / 2.0) + (i + 1) * tam, j * tam, heartSize, currentHeartColor);
      drawHeart((width / 2.0) + i * tam, (j + 1) * tam, heartSize, currentHeartColor);
      drawHeart((width / 2.0) + (i + 1) * tam, (j + 1) * tam, heartSize, currentHeartColor);
      heartColorChange = (heartColorChange + 1) % heartColors.length;
    }
  }
}

function updateHeartSize() {
  if (mouseIsPressed) {
    if (growing) {
      heartSizeMultiplier += 0.1;
      if (heartSizeMultiplier >= maxHeartSizeMultiplier) {
        growing = false;
      }
    } else {
      heartSizeMultiplier -= 0.1;
      if (heartSizeMultiplier <= 1.0) {
        growing = true;
      }
    }
  }
}

function flipAnimation() {
  for (let i = 0; i < cant; i++) {
    for (let j = 0; j < cant; j++) {
      if (flipping[i][j]) {
        flipProgress[i][j] += 0.05;
        if (flipProgress[i][j] >= 1.0) {
          flipping[i][j] = false;
          flipProgress[i][j] = 0.0;
        }
      }
    }
  }
}

function drawHeart(x, y, size, heartColor) {
  let h = size;
  let w = size / 2.0;
  fill(heartColor);
  noStroke();

  ellipse(x - w / 2.0, y - h / 4.0 + 2.0, w, h / 2.0);
  ellipse(x + w / 2.0, y - h / 4.0 + 2.0, w, h / 2.0);
  triangle(x, y + h / 2.0, x - w, y, x + w, y);
}

function invertColor(c) {
  let r = int(red(c));
  let g = int(green(c));
  let b = int(blue(c));

  if (r === 166 && g === 17 && b === 27) {
    return color(255);
  } else if (r === 255 && g === 255 && b === 255) {
    return color(166, 17, 27);
  } else if (r === 253 && g === 192 && b === 225) {
    return color(177, 102, 169);
  } else if (r === 177 && g === 102 && b === 169) {
    return color(253, 192, 225);
  } else {
    return c;
  }
}

function mousePressed() {
  updateHeartSize();
}

function reiniciarVariables() {
  heartSizeMultiplier = 1.0;
  growing = true;
  prevMouseX = mouseX;
  prevMouseY = mouseY;
  flipping = Array.from({ length: cant }, () => Array(cant).fill(false));
  flipProgress = Array.from({ length: cant }, () => Array(cant).fill(0.0));
}

function keyPressed() {
  if (key === ' ') {
    reiniciarVariables();
  }
}
