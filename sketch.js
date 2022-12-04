
let snow = [];
let numOfSnowflakes = 10;
let gravity;

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.034);
    for(let i = 0; i< 300; i++){
        let x = random(width);
        let y = random(height);
        snow.push(new Snowflake(x, y))
    }
}

function draw() {
    background(0)
    // snow.push(new Snowflake());
    
    
    for (flake of snow) {
        flake.applyForce(gravity);
        flake.update();
        flake.render();
    }

}
