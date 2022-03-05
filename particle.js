function Particle(x, y, p5, hu, firework) {
    this.position = p5.createVector(x, y);
    this.velocity = p5.createVector(0, (Math.floor(Math.random() * 15)*-1)-6);
    this.acceleration = p5.createVector(0, 0);
    this.lifespan = 255;
    this.firework = firework;
    this.hu = hu;
    this.p5 = p5;

    this.applyForce = function (force) {
        this.acceleration.add(force);
    }

    this.done = function () {
        if (this.lifespan <= 0) {
            return true;
        }
        return false;
    }

    this.update = function () {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        if(this.firework) {
            this.lifespan -= 4;
        }
    }

    this.show = function () {
        this.p5.colorMode(this.p5.HSB);
        if(this.firework) {
            p5.strokeWeight(4);
            p5.stroke(this.hu, 255, 255, this.lifespan);
        } else {
            p5.strokeWeight(6);
            p5.stroke(this.hu, 255, 255);
        }
        p5.point(this.position.x, this.position.y);
    }
}

export default Particle;