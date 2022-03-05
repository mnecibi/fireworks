import Particle from "./particle.js";

function Firework(p5) {

    this.hu = Math.floor(Math.random()*255);
    this.gravity = p5.createVector(0, 0.2);
    this.firework = new Particle(Math.floor(Math.random()*10000%p5.windowWidth), p5.windowHeight, p5, this.hu, false);
    this.exploded = false;
    this.particles = [];

    this.update = function () {
        if(!this.exploded) {
            this.firework.applyForce(this.gravity);
            this.firework.update();
        }


        if (!this.exploded && this.firework.velocity.y >= 0) {
            this.exploded = true;
            this.explode();
        }

        for (let i = this.particles.length-1; i >= 0; i--) {
            this.particles[i].applyForce(this.gravity);
            this.particles[i].update();
            if (this.particles[i].done()) {
                this.particles.splice(i, 1);
            }
        }
    }

    this.explode = function () {
        for (let i = 0; i < Math.floor(Math.random()*100); i++) {
            let particle = new Particle(this.firework.position.x, this.firework.position.y, p5, this.hu, true);
            particle.velocity.x = Math.random()*8-4;
            particle.velocity.y = Math.random()*-10;
            particle.velocity.mult(Math.random()*0.5+0.5);
            particle.acceleration.y = 0.1;
            particle.acceleration.x = Math.random()*-0.5;
            this.particles.push(particle);
        }
    }

    this.show = function () {
        if(!this.exploded) {
            this.firework.show();
        }

        for (let i = this.particles.length-1; i >= 0; i--) {
            this.particles[i].show();
        }
    }

    this.done = function () {
        if (this.exploded && this.particles.length === 0) {
            return true;
        }
        return false;
    }
}

export default Firework;