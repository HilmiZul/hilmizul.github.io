let bg;

function preload() {
  bg = loadImage("/assets/img/kota2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230);
  background(bg, 0, windowHeight - bg.height);
  
  fill(100);
  noStroke();
  textFont("Fredoka One");
  textSize(130);
  textAlign(CENTER);
  text("404", width / 2, height / 2 - 100);

  textSize(40)
  text("Maap, Halaman Tidak Tersedia", width / 2, height / 2);
}