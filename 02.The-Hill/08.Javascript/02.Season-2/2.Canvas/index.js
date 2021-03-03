window.onload = () => {
    const c = document.getElementById("mon_canvas");
    const width = c.width;
    const height = c.height;
    let ctx = c.getContext("2d");
    KeyPress = {};
    let imageObj = new Image();
    let ImageCannon = new Image();
    let ImageProjectile = new Image();
    let test = new projectile;
    function init() {
        ImageCannon.src= 'canon 40px.png';
        ImageProjectile.src= 'boulet.png';
        let test = new projectile;
        requestAnimationFrame(update);
    }

    // canon
    canon = {
        x: width/2 ,
        y: height-50 ,
        update: () => {
            if (KeyPress['ArrowLeft']) {
                canon.x -= 1;
            }
            if (KeyPress['ArrowRight']) {
                canon.x += 1;
            }
        },
        draw: () => {
            ctx.drawImage(ImageCannon, canon.x, canon.y);
        }
    };

    // projectile 
    class projectile {
        constructor(){
            this.x = canon.x+10;
            this.y = canon.y-10;
            this.w = 10;
            this.h = 10;
        }
        update() {
            this.y -= 2;
        }
        draw() {
            ctx.drawImage(ImageProjectile, this.x, this.y ,this.w ,this.h );
        }
    }
    /*
    projectile ={
        x: canon.x+10,
        y: canon.y-10,
        w: 10,
        h: 10,
        update: () =>{
            projectile.y -= 2;
        },
        draw: () => {
            ctx.drawImage(ImageProjectile, projectile.x, projectile.y,projectile.w ,projectile.h );
        }
    };
    */

    // listen keyboard
    function listenKeyboard() {
        document.addEventListener("keyup", keyUp.bind(this));
        document.addEventListener("keydown", keyDown.bind(this));
        
    };
    function keyUp(e) {
        KeyPress[e.key] = false;
    };
    function keyDown(e) {
        KeyPress[e.key] = true;
    };

    function draw() {
        ctx.clearRect(0, 0, 650, 650);
        canon.draw();
        test.draw();
    };


    function update() {
        draw();
        listenKeyboard();
        canon.update();
        test.update();
        requestAnimationFrame(update);
    };

    init()
}


/*
left = 37
up = 38
right = 39
down = 40
*/