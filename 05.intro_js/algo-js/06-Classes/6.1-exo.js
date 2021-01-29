class Circle {
    constructor (xPos,yPos,radius){
        this.xPos=  xPos;
        this.yPos = yPos;
        this.radius= radius;
    }
    move(xOffset, yOffset) {
        this.xPos=xOffset;
        this.yPos = yOffset;
    }
    get surface() {
        return Math.pow(this.radius,2)* Math.PI
    }

}

let circle1 = new Circle(4,4,5);
console.log(circle1);
circle1.move(3,1);
console.log(circle1);
console.log(circle1.surface);