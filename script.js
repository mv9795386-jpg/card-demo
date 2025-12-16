const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  if(song.paused){
    song.play();
    playBtn.textContent = "⏸️ Music Playing";
  }else{
    song.pause();
    playBtn.textContent = "🎵 Play Birthday Song";
  }
});
