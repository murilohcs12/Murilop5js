function setup() {
    createCanvas(400, 400);
    background("white");
    cor = color(random(0, 255), random(0, 255), random(0, 255));
    posicaoHorizontal = 200;
    posicaoVertical = 200;
    }

    function draw() {
    fill(cor);
    circle(200, 200, 50);
    }
}
