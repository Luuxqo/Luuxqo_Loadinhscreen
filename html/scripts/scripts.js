const audio = new Audio("assets/jmusic.mp3");

let music = false;

window.onload = () => {
    audio.volume = 0.2;
    audio.play();
};

audio.addEventListener("timeupdate", function() {
    // Obliczamy procent postępu
    const percentPlayed = (audio.currentTime / audio.duration) * 100;
    console.log("Postęp odtwarzania: " + percentPlayed.toFixed(2) + "%")

    document.querySelector('.fill').style.width = percentPlayed + "%";
});

window.addEventListener("keydown", function(e){
    if(e.code == "Space"){
        if(!music) {
            audio.pause();
            music = true;
        } else {
            audio.play();
            music = false;
        }
    }
});