function setup() {
    createCanvas(370, 400);
    background("white");
  }
  function draw() {
    stroke("blue");
    fill("red")
    
      if(mouseIsPressed)
      rect(mouseX, mouseY, 20, 20);
  }
