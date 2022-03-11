import p5 from "p5/lib/p5.min";
import Firework from "./firework.js";

let sketch = (p5) => {    

    let fireworks = []

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        p5.stroke(255);
        p5.strokeWeight(4);
        p5.colorMode(p5.HSB);
        p5.background(0);
    }

    p5.draw = () => {
        p5.colorMode(p5.RGB);
        p5.background(0, 40);
        if (Math.random() < 0.2) {
            fireworks.push(new Firework(p5));
        }
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].show();
            if (fireworks[i].done()) {
                fireworks.splice(i, 1);
            }
        }

        p5.text("GREAT JOB!", p5.width / 2, p5.height / 2);
        p5.textSize(32);
        p5.textAlign(p5.CENTER);
    }
}

new p5(sketch);;