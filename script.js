const pages = document.querySelectorAll(".page");
const song = document.getElementById("song");

const message =  `Happy Birthday ❤️

I just wanted to remind you how special you are.

May this year bring you endless happiness,
beautiful memories, lots of success and
everything you've ever wished for.

Keep smiling because your smile makes the world brighter.

Thank you for always being there for me. I hope our friendship lasts forever.

Enjoy your day to the fullest!

🎂❤️ Happy Birthday ❤️🎂`; 

let index = 0;

// Show a page
function showPage(id){
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// First button
function startWebsite(){

    song.play();

    showPage("cake");
}

// Blow candle
function blowCandle(){

    document.getElementById("flame").style.display="none";

    createConfetti();

    setTimeout(()=>{
        showPage("wish");
    },2000);

}

// Wish button
function openLetter(){

    showPage("letter");

    typeMessage();

}

// Typing Effect
function typeMessage(){

    const typing=document.getElementById("typing");

    typing.innerHTML="";

    index=0;

    function type(){

        if(index<message.length){

            typing.innerHTML+=message.charAt(index);

            index++;

            setTimeout(type,40);

        }

    }

    type();

}

// Final Page

function showFinal(){

    createConfetti();

    setTimeout(()=>{

        showPage("final");

        createConfetti();

    },1200);

}

// Confetti

function createConfetti(){

    for(let i=0;i<180;i++){

        let c=document.createElement("div");

        c.style.position="fixed";

        c.style.width="10px";

        c.style.height="10px";

        c.style.borderRadius="50%";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-20px";

        c.style.background=`hsl(${Math.random()*360},100%,50%)`;

        c.style.transition="4s linear";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.style.transform=`translateY(110vh)
            rotate(${Math.random()*720}deg)`;

        },100);

        setTimeout(()=>{

            c.remove();

        },4000);

    }

}