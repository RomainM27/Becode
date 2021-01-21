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

let rect1 = new Rectangle(1,2,1,2);
let i= 0;
while  (i <= 1000) {

    i = i + 1;

    rect2 = new Rectangle (
        Math.floor(Math.random() * 100 ) + 1,
        Math.floor(Math.random() * 100 ) + 1,
        Math.floor(Math.random() * 100 ) + 1,
        Math.floor(Math.random() * 100 ) + 1

    )
    console.log(rect2); 
    let bool = rect1.collides(rect2);
    rect1.collides(rect2);
    console.log(bool);
}



