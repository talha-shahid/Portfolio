console.log("Welcome");
let pepe=document.getElementById("pepe");
let pepe2=document.getElementById("pepe2");
let peter=document.getElementById("peter");
let infoContainer= document.getElementById("infoContainer");

pepe.style.display="none";
pepe2.style.display="none";
peter.style.display="none";
document.querySelector('.cross').style.display = 'none';
document.querySelector('.icons').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle("sidebarGo");
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display ='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        document.querySelector('.ham').style.display='none';
        setTimeout(() => {
            document.querySelector('.cross').style.display ='inline';
        }, 400);

    }
})


audio=new Audio("parasthesia.mp3");
let sound= document.getElementById("sound");

// pepe.style.transition = "all 2s";
sound.addEventListener("click",()=>{
    if (audio.duration > 0 && !audio.paused) {

        //Its playing...do your job
        audio.pause();
        sound.src="nosound.png";
        // infoContainer.classList.remove("mystyle");
        
        setTimeout(() => {
            pepe.style.display="none";
            pepe2.style.display="none";
            peter.style.display="none";

        }, 100);

    
    } else {
    
        //Not playing...maybe paused, stopped or never played.
        audio.loop=true;
            audio.play();


        sound.src="sound.png";
        setTimeout(() => {


            const myInterval = setInterval(() => {
                infoContainer.classList.add("mystyle");
                setTimeout(() => {
                    infoContainer.classList.remove("mystyle");
                }, 300);
            }, 600);

            sound.addEventListener("click", ()=>{clearInterval(myInterval);})

            pepe.style.display="inline";
            pepe2.style.display="inline";
            peter.style.display="inline";
        }, 100);
    }
})


