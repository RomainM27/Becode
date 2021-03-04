window.onload = () => {
    const c = document.getElementById("mon_canvas");
    const width = c.width;
    const height = c.height;
    let ctx = c.getContext("2d");
    KeyPress = {};
    let ImageCannon = new Image();
    let ImageProjectile = new Image();
    //les demons
    let ImageDemon0 = new Image();
    let ImageDemon1 = new Image();
    let ImageDemon2 = new Image();

    function init() {
        ImageDemon0.src= 'demons0.png';
        ImageDemon1.src= 'demons1.png';
        ImageDemon2.src= 'demons2.png';
        ImageCannon.src= 'canon 40px.png';
        ImageProjectile.src= 'boulet.png';
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
    projectile = {
        x : canon.x+10,
        y : canon.y-10,
        w : 10,
        h : 10,
        isMoving : false,
        update: () => {
            if(projectile.isMoving){
                projectile.y -= 2;
            }else{
                projectile.x =canon.x+10  
            }
            if(projectile.y < 0){
                projectile.isMoving = false;
                projectile.y = canon.y-10
            }
        },
        draw: () => {
            if(projectile.isMoving){
                ctx.drawImage(ImageProjectile, projectile.x, projectile.y ,projectile.w ,projectile.h);
            }
        }
    }

    // monster
    monster = {
        x : Math.floor(Math.random() * 621),
        y : Math.floor(Math.random() * 400),
        w : 30,
        h : 30,
        draw: () => {
            ctx.drawImage(ImageDemon0, monster.x, monster.y ,monster.w ,monster.h );
        }
    }

 
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
        if(e.key === " "){
            projectile.isMoving = true;
        }
    };

    function draw() {
        ctx.clearRect(0, 0, 650, 650);
        canon.draw();
        monster.draw();
        projectile.draw();
    };


    function update() {
        draw();
        listenKeyboard();
        canon.update();
        projectile.update();
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