window.onload = () => {
    const c = document.getElementById("mon_canvas");
    const width = c.width;
    const height = c.height;
    let ctx = c.getContext("2d");
    // variable
    let timer = 0;
    let play = false;
    let countMiss = 0; // mis shoot
    let countHit = 0; // good shoot
    let nbrPartie = 0;
    let time = 30;
    let winOrLoose = "";
    // what we need in document
    let timerInhtml = document.getElementById("timer");
    let startButton = document.getElementById("start");
    let hits = document.getElementById("hits");
    let miss = document.getElementById("miss");
    let listOfScore = document.getElementById("listOfScore");

    // image
    let ImageCannon = new Image();
    let ImageProjectile = new Image();
    //les demons
    let ImageDemon0 = new Image();
    let ImageDemon1 = new Image();
    let ImageDemon2 = new Image();
    let allMonsters = [ImageDemon0, ImageDemon1, ImageDemon2]

    function init() {
        ImageDemon0.src= './asset/img/demons0.png';
        ImageDemon1.src= './asset/img/demons1.png';
        ImageDemon2.src= './asset/img/demons2.png';
        ImageCannon.src= './asset/img/canon 40px.png';
        ImageProjectile.src= './asset/img/boulet.png';
        requestAnimationFrame(update);
    }

    KeyPress = {}; // to get the key press
    // canon
    canon = {
        x: width/2 ,
        y: height-50 ,
        update: () => {
            if (KeyPress['ArrowLeft'] && canon.x > 0) {
                canon.x -= 2;
            }
            if (KeyPress['ArrowRight'] && canon.x < height-30) {
                canon.x += 2;
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
                projectile.y -= 3;
                if(projectile.y < 0){
                    projectile.isMoving = false;
                    projectile.y = canon.y-10;
                    countMiss++;
                    miss.children[0].innerHTML = countMiss;
                }
            }else{
                projectile.x =canon.x+10  
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
        x : Math.floor(Math.random() * (height - 29)),
        y : Math.floor(Math.random() * 400),
        w : 30,
        h : 30,
        image : ImageDemon0,
        draw: () => {
            ctx.drawImage(monster.image, monster.x, monster.y ,monster.w ,monster.h );
            
            if ( (monster.x + monster.w  >= projectile.x && projectile.x + projectile.w >= monster.x) && (monster.y >= projectile.y  - projectile.h && projectile.y >= monster.y - monster.h) ){ // check if the ball touch the demons
                monster.x = Math.floor(Math.random() * (height - 29)); 
                monster.y = Math.floor(Math.random() * 400);
                monster.image = allMonsters[Math.floor(Math.random() * allMonsters.length)]; // random demons
                projectile.isMoving = false; // le conon ne bouge plus (donc plus draw)
                projectile.y = canon.y-10; // reinitialise sa position
                countHit++;
                hits.children[0].innerHTML = countHit;
                if (countHit == 3){
                    winOrLoose = "WINN !";
                    endGame();
                }
            }
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
        if (play){
            draw();
        listenKeyboard();
        canon.update();
        projectile.update();
        requestAnimationFrame(update);
        }
    };

    // met les variables a zero
    function resetVarr() { 
        countHit = 0;
        countMiss = 0;
    }

    function endGame() { 
        play = false;
        clearInterval(timer);
        displayScore()
        ctx.clearRect(0,0, width, height);
        startButton.disabled = false;
        resetVarr()
    }

    function displayScore() {
        listOfScore.innerHTML += `<div><span class="partieNumb">${nbrPartie}</span> Hit :<span class="hits">${countHit}</span>
        Miss : <span class="missNbr">${countMiss}</span> Time : <span>${time}</span>
        <span>WIN !</span>
        </div>`;
    }

    // game start
    startButton.addEventListener("click", () => {
        play = true;
        nbrPartie++;
        init();
        timer = setInterval(myTimer, 1000);
        startButton.disabled = true;
    })
    function myTimer() {
        timerInhtml.children[0].innerHTML = time;
        if(time == 0){
            clearInterval(timer);
            winOrLoose = "LOOSE !";
            endGame();
        }
        time--; 
    }
}
