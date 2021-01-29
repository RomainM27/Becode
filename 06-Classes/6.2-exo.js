class Rectangle {
    constructor (topLeftXPos,topLeftYPos,width,length){
        this.topLeftXPos=  topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width= width;
        this.length= length;
    }
    collides(otherRectangle) {
        let collisionRightLeft = 
        /**
         * la droite du 1 est plus grande que la gauche du 2 ===> droit du 1  =  x + length
         * et
         * la droite du 2 est plus grande que la gauche de 1
         */
        this.topLeftXPos + this.length  >= otherRectangle.topLeftXPos 
        && otherRectangle.topLeftXPos + otherRectangle.length >= this.topLeftXPos ;

        /**
         * le haut du 1 est plus grand que le bas du 2 ===> bas du 2 = y - width
         * et
         * le haut du 2 est plus grand que le bas du 1
         */
        let collisionTopBottom = 
        this.topLeftYPos >= otherRectangle.topLeftYPos  - otherRectangle.width
        && otherRectangle.topLeftYPos >= this.topLeftYPos - this.width;
        return collisionRightLeft && collisionTopBottom
    }
}

let rect1 = new Rectangle(2,2,10,5);
let rect2 = new Rectangle(4,4,5,7);
let bool = rect1.collides(rect2);
console.log(bool);

// let R = new Rectangle(1,10,5,7);
// console.log(R);
// let Nr = new Rectangle (3,8,5,7);
// console.log(Nr);
// let test1 = new Rectangle(5, 5, 20, 20);
// console.log(test1)
// let test2 = new Rectangle(10, 10, 20, 20);
// console.log(test2);
// let test3 = new Rectangle(30, 30, 20, 20);
// console.log(test3)

// console.log(R.collides(Nr));

// console.log(R.collides(test1));
// console.log(R.collides(test2));
// console.log(R.collides(test3));

// console.log(test1.collides(test2));
// console.log(test1.collides(test3));
// console.log(test1.collides(R));