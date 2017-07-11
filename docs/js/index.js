
const worldTurbine = function (p) {
  this.n = 100;
  this.x = Array.from({ length: this.n }, () => 0);
  this.y = Array.from({ length: this.n }, () => 0);
  this.degree = Array.from({ length: this.n }, () => 0);
  this.r = 100;

  p.setup = () => {
    p.createCanvas(640, 480);
  };

  p.draw = () => {
    p.background(255);
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < this.n; i++) {
      p.fill(255);
      p.ellipse(this.x[i], this.y[i], 200, 200);
    }

    for (let i = 0; i < this.n; i++) {
      this.degree[i] += i * 0.1;
      this.x[i] = Math.cos(this.degree[i] * (Math.PI / 180)) * this.r;
      this.y[i] = Math.sin(this.degree[i] * (Math.PI / 180)) * this.r;
    }
  };
}

const helloWorldTurbine = new p5(worldTurbine);