// // /* ========================================= */
// // /* FILE 1 */
// // /* ========================================= */

const scream = document.querySelector(".scream");

/* ========================================= */
/* FILE */
/* ========================================= */

const file1 = document.querySelector(".file1-content");
const file2 = document.querySelector(".file2-content");
const file3 = document.querySelector(".file3-content");

/* ========================================= */
/* CAKE */
/* ========================================= */

// const candlesContainer = document.getElementById("candles");
// const blowArea = document.getElementById("blowArea");
// const gifContainer = document.getElementById("gifContainer");

// let cakeCreated = false;
// let blown = false;

/* ========================================= */
/* RESET ANIMASI FILE */
/* ========================================= */

function resetAnimation(){

    file2.classList.remove("file2-down");
    file3.classList.remove("file3-down");
    file3.classList.remove("file3-down2");
    file3.classList.remove("file3-up");

}



function stopAllMedia(){

    const music = document.getElementById("birthdayMusic");
    const video = document.getElementById("birthdayVideo");

    if(music){
        music.pause();
        music.currentTime = 0;
    }

    if(video){
        video.pause();
        video.currentTime = 0;
    }

}



/* ========================================= */
/* FILE 1 */
/* ========================================= */

// function openFile1(){

//     scream.classList.remove("play");
//     void scream.offsetWidth;
//     scream.classList.add("play");

//     resetAnimation();

//     document.querySelector(".cake-page").style.display = "none";

//     file2.classList.add("file2-down");
//     file3.classList.add("file3-down");

// }

// function openFile1(){

//     stopAllMedia();

//     scream.classList.remove("play");
//     void scream.offsetWidth;
//     scream.classList.add("play");

//     resetAnimation();

//     document.querySelector(".cake-page").style.display="none";

//     file2.classList.add("file2-down");
//     file3.classList.add("file3-down");

// }


function openFile1(){

    scream.classList.remove("play");
    void scream.offsetWidth;
    scream.classList.add("play");

    resetAnimation();

    document.querySelector(".cake-page").style.display = "none";

    // stop musik file 2
    const music = document.getElementById("birthdayMusic");
    music.pause();
    music.currentTime = 0;

    // stop video file 3
    const video = document.getElementById("birthdayVideo");
    video.pause();
    video.currentTime = 0;

    file2.classList.add("file2-down");
    file3.classList.add("file3-down");

    const page = document.querySelector(".cake-page");

    page.style.display = "none";
    page.style.pointerEvents = "none";
}

/* ========================================= */
/* FILE 2 */
/* ========================================= */

// function openFile2(){

//     resetAnimation();

//     file3.classList.add("file3-down2");

//     const page = document.querySelector(".cake-page");

//     page.style.display = "block";

//     // reset setiap buka file
//     candlesContainer.innerHTML = "";
//     gifContainer.style.display = "none";
//     blown = false;

//     createCandles();

// }

/* ========================================= */
/* FILE 3 */
/* ========================================= */
// const video = document.getElementById("birthdayVideo");

// video.volume = 1;   // 20% volume

// function openFile3(){

//     resetAnimation();

//     document.querySelector(".cake-page").style.display = "none";

//     file3.classList.add("file3-up");

//     const video = document.getElementById("birthdayVideo");

//     video.muted = false;
//     video.volume = 1; // 20%
//     video.play();
// }

// function openFile3(){

//     stopAllMedia();

//     resetAnimation();

//     document.querySelector(".cake-page").style.display="none";

//     file3.classList.add("file3-up");

//     const video = document.getElementById("birthdayVideo");

//     video.volume = 0.2;
//     video.currentTime = 0;

//     video.play().catch(()=>{});

// }

function openFile3(){

    resetAnimation();

    document.querySelector(".cake-page").style.display="none";

    file3.classList.add("file3-up");

    // stop musik
    const music=document.getElementById("birthdayMusic");
    music.pause();
    music.currentTime=0;

    // play video
    const video = document.getElementById("birthdayVideo");

    // video.pause();
    // video.currentTime = 0;
    // video.load();
    video.volume = 0.2;

    video.pause();
    video.currentTime = 0;
    video.load();

    video.oncanplay = () => {
        video.play();
    };

    const page = document.querySelector(".cake-page");

    page.style.display = "none";
    page.style.pointerEvents = "none";
}

/* ========================================= */
/* CAKE */
/* ========================================= */

const candlesContainer = document.getElementById("candles");
const blowArea = document.getElementById("blowArea");
const gifContainer = document.getElementById("gifContainer");

let cakeStarted = false;
let blown = false;

/* ========================================= */
/* FILE 2 */
/* ========================================= */

// function openFile2(){

//     resetAnimation();

//     file3.classList.add("file3-down2");

//     document.querySelector(".cake-page").style.display = "block";

//     // Reset animasi SVG
//     const oldCake = document.getElementById("cake");
//     const newCake = oldCake.cloneNode(true);
//     oldCake.parentNode.replaceChild(newCake, oldCake);

//     startCakeAnimation();

// }

// function openFile2(){

//     resetAnimation();

//     file3.classList.add("file3-down2");

//     document.querySelector(".cake-page").style.display = "block";

//     // Putar musik
//     const music = document.getElementById("birthdayMusic");
//     music.currentTime = 0;
//     music.volume = 0.2;   // 20%
//     music.play();

//     startCakeAnimation();
// }


// function openFile2(){

//     stopAllMedia();

//     resetAnimation();

//     file3.classList.add("file3-down2");

//     document.querySelector(".cake-page").style.display="block";

//     const music = document.getElementById("birthdayMusic");

//     music.volume = 0.2;
//     music.currentTime = 0;

//     music.play().catch(()=>{});

//     startCakeAnimation();

// }

function openFile2(){

    resetAnimation();

    file3.classList.add("file3-down2");

    document.querySelector(".cake-page").style.display="block";

    // stop video
    const video=document.getElementById("birthdayVideo");
    video.pause();
    video.currentTime=0;

    // play music
    const music=document.getElementById("birthdayMusic");

    music.pause();
    music.currentTime=0;
    music.volume=0.2;

    music.play().catch(()=>{});

    startCakeAnimation();

    const page = document.querySelector(".cake-page");

    page.style.display = "block";
    page.style.pointerEvents = "auto";
}

/* ========================================= */
/* START CAKE */
/* ========================================= */

const crema = document.getElementById("crema");

// function startCakeAnimation(){

//     blown = false;

//     gifContainer.style.display = "none";

//     blowArea.style.pointerEvents = "none";

//     document.querySelectorAll(".confetti").forEach(c=>c.remove());

//     candlesContainer.innerHTML="";

//     candlesContainer.style.opacity="1";

//     document.querySelectorAll(".fuego").forEach(f=>{
//         f.style.opacity="1";
//         f.style.transform="scale(1)";
//     });

//     clearTimeout(window.candleTimer);

//     candlesContainer.innerHTML = "";

//     window.candleTimer=setTimeout(showCandles,6500);

// }

function startCakeAnimation(){

    blown = false;

    gifContainer.style.display = "none";

    blowArea.style.pointerEvents = "none";

    document.querySelectorAll(".confetti").forEach(c=>c.remove());

    clearTimeout(window.candleTimer);

    candlesContainer.innerHTML = "";

    candlesContainer.style.opacity = "1";

    /* ==========================
       RESET SVG CAKE
    ========================== */

    const oldCake = document.getElementById("cake");
    const newCake = oldCake.cloneNode(true);

    oldCake.parentNode.replaceChild(newCake, oldCake);

    /* ==========================
       MULAI LAGI DARI AWAL
    ========================== */

    window.candleTimer = setTimeout(showCandles,6500);

}

/* ========================================= */
/* MUNCULKAN LILIN */
/* ========================================= */

function showCandles(){

    candlesContainer.innerHTML="";

    const positions=[10,20,30,40,50,60,70,80,90];

    positions.forEach((x,index)=>{

        const candle=document.createElement("div");
        candle.className="velas";

        candle.style.left=x+"%";

        candle.style.opacity="0";
        candle.style.transform="translateY(-20px)";

        const flame=document.createElement("div");
        flame.className="fuego";

        candle.appendChild(flame);

        candlesContainer.appendChild(candle);

        setTimeout(()=>{

            candle.style.transition="all .4s ease";

            candle.style.opacity="1";
            candle.style.transform="translateY(0)";

            flame.style.opacity="1";
            flame.style.animation="flicker 1s infinite alternate";

        },index*180);

    });

    setTimeout(()=>{
        blowArea.style.pointerEvents="auto";
    },2200);

}

/* ========================================= */
/* TIUP LILIN */
/* ========================================= */

blowArea.addEventListener("click",blowCandles);
blowArea.addEventListener("touchstart",blowCandles);

function blowCandles(){

    if(blown) return;

    blown=true;

    blowArea.style.pointerEvents="none";

    const candles=document.querySelectorAll(".velas");

    candles.forEach((candle,index)=>{

        const flames=candle.querySelectorAll(".fuego");

        setTimeout(()=>{

            flames.forEach(flame=>{

                flame.style.animation="fuego 1s infinite";

            });

            setTimeout(()=>{

                flames.forEach(flame=>{

                    flame.style.opacity="0";
                    flame.style.transform="scale(0)";
                    flame.style.transition="all .15s ease";

                });

            },400);

        },index*50);

    });

    setTimeout(createConfetti,1300);

}

/* ========================================= */
/* CONFETTI */
/* ========================================= */

function createConfetti(){

    const colors=[
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#8338ec",
        "#ef476f",
        "#00c2ff",
        "#ff9800",
        "#7cff6b"
    ];

    for(let i=0;i<100;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.backgroundColor=
            colors[Math.floor(Math.random()*colors.length)];

        confetti.style.left=Math.random()*100+"%";

        confetti.style.width=(5+Math.random()*8)+"px";

        confetti.style.height=(5+Math.random()*8)+"px";

        confetti.style.animationDelay=(Math.random()*0.5)+"s";

        confetti.style.animationDuration=
            (1.5+Math.random()*1.5)+"s";

        document.querySelector(".cake-page").appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },3000);

    }

    setTimeout(()=>{

        gifContainer.style.display="block";

    },3000);

}