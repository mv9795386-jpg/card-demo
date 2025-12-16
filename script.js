const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const celebrateBtn = document.getElementById("celebrateBtn");

playBtn.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    playBtn.textContent = "⏸️ Music Playing";
  } else {
    song.pause();
    playBtn.textContent = "▶️ Play Music";
  }
});

celebrateBtn.addEventListener("click", () => {
  for(let i=0;i<120;i++){
    const conf = document.createElement("div");
    conf.style.position="fixed";
    conf.style.left=Math.random()*100+"vw";
    conf.style.top="-10px";
    conf.style.width="8px";
    conf.style.height="14px";
    conf.style.background=`hsl(${Math.random()*360},90%,60%)`;
    conf.style.borderRadius="2px";
    conf.style.zIndex="9999";
    conf.style.pointerEvents="none";
    document.body.appendChild(conf);

    const fall = conf.animate([
      { transform:"translateY(0)" },
      { transform:"translateY(110vh)" }
    ],{
      duration:2000+Math.random()*2000,
      easing:"ease-in"
    });

    fall.onfinish = () => conf.remove();
  }
});