score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e) {
    console.log("key code is: ", e.keyCode); //this event  for chake key number on clicking on it
    if (e.keyCode == 38) {
        //dino = document.getElementById('.dino');   //not allowed
        dino = document.querySelector('.dino'); //main class is dino
        dino.classList.add('animatedino'); //animatedino is the class of class dino
        setTimeout(() => {
            dino.classList.remove('animatedino');
        }, 700);

    }
    if (e.keyCode == 37) {
        //dino = document.getElementById('.dino');   //not allowed
        dino = document.querySelector('.dino'); //main class is dino
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";

    }
    if (e.keyCode == 39) {
        //dino = document.getElementById('.dino');   //not allowed
        dino = document.querySelector('.dino'); //main class is dino
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left')); //take the left value 
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    //console.log(offsetX, offsetY);


    if (offsetX < 73 && offsetY < 52) {
        gameover.innerHTML = "<pre><h1>       Game-Over</h1></pre>";
        obstacle.classList.remove('obstacleAni');
        dino.style.visibility = "hidden" //thats my idea
        audiogo.play();
        audio.pause();
        setTimeout(() => {
            audiogo.pause();

        }, 1000);
    }

    // it remove the animation of obstacle like running
    else if (offsetX < 145 && cross) {
        score = score + 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);


function updateScore(score) {
    scoreCont.innerHTML = "Mangesh Score: " + score
}