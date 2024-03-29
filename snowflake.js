
function getRandomSize() {
    let r = randomGaussian(0, 10);
    return constrain(abs(r), 4, 36);
}

class Snowflake {
    constructor(sx, sy) {
        let x = sx || random(width);
        let y = sy || random(-100, -10);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = getRandomSize();
    }

    applyForce(force) {
        let parallax = force.copy()
        parallax.mult(this.r)
        this.acc.add(parallax);
    }

    randomize() {
        let x = random(width);
        let y = random(-100, -10);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = getRandomSize();
    }

    offScreen() {
        return this.pos.y > height + this.r;
    }

    update() {
        
        this.vel.add(this.acc);
        this.vel.limit(this.r*0.2);

        if(this.vel.mag() < 1) {
            this.vel.normalize();
        }

        this.pos.add(this.vel);
        this.acc.mult(0);

        if(this.pos.y > height + this.r) {
            this.randomize()
        }
    }

    render() {
        stroke(255);
        strokeWeight(this.r)
        point(this.pos.x, this.pos.y)
    }
}

class DeleteMe {
    //test
}