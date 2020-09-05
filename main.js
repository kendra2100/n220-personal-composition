function setup() {
  createCanvas(720, 400);
}

function draw() {
  background("black");

  let c = color("magenta");
  let width = 80;

  fill(c);
  stroke(49, 459, 35, 393);

  circle(50, 50, width);

  c = color("#8ee154");
  fill(c);
  circle(150, 150, width);

  c = color("#86d510");
  fill(c);
  circle(70, 300, width);

  c = color("#21885f");
  fill(c);
  circle(290, 423, width);

  c = color("#5ad4a4");
  fill(c);
  circle(341, 341, 341);

  c = color("#98605c");
  fill(c);
  circle(500, 150, width);

  c = color("#b48f57");
  fill(c);
  circle(620, 50, width);

  c = color("#514fdd");
  fill(c);
  circle(600, 300, width);

  c = color("yellow");
  fill(c);
  circle(340, 50, width);

  triangle(10, 60, 50, 10, 90, 60);
}
