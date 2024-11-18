function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);

  // Rotasi seluruh model
  rotateX(frameCount * 0.01); // Rotasi sekitar sumbu X
  rotateY(frameCount * 0.01); // Rotasi sekitar sumbu Y
  rotateZ(frameCount * 0.01); // Rotasi sekitar sumbu Z

  // Kepala
  push();
  translate(0, -95, 0);
  fill(255, 20, 200);
  sphere(30);
  pop();

  // Badan
  push();
  fill(100, 150, 255);
  box(60, 100, 40);
  pop();

  // Kaki kiri
  push();
  translate(-20, 100, 0);
  fill(50, 50, 255);
  box(20, 80, 20);
  pop();

  // Kaki kanan
  push();
  translate(20, 100, 0);
  fill(50, 50, 255);
  box(20, 80, 20);
  pop();

  // Tangan kiri
  push();
  translate(-50, -20, 0);
  fill(100, 150, 255);
  box(20, 60, 20);
  pop();

  // Tangan kanan
  push();
  translate(50, -20, 0);
  fill(100, 150, 255);
  box(20, 60, 20);
  pop();
}
