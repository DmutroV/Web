class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const myCircle = new Circle('червоний', 10);
const myRectangle = new Rectangle('синій', 5, 8);

document.getElementById('circle-color').textContent = myCircle.color;
document.getElementById('circle-area').textContent = myCircle.getArea().toFixed(2);

document.getElementById('rectangle-color').textContent = myRectangle.color;
document.getElementById('rectangle-area').textContent = myRectangle.getArea();
