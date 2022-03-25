console.log("Welcome");

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

sound.addEventListener("click",()=>{
    if (audio.duration > 0 && !audio.paused) {

        //Its playing...do your job
        audio.pause();
        sound.src="nosound.png";
    
    } else {
    
        //Not playing...maybe paused, stopped or never played.
        audio.play();
        sound.src="sound.png";
    }
})
