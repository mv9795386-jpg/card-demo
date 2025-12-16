const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const wowBtn = document.getElementById("wowBtn");

/* MUSIC */
playBtn.addEventListener("click", () => {
  if(song.paused){
    song.play();
    playBtn.textContent = "⏸ Music Playing";
  }else{
    song.pause();
    playBtn.textContent = "🎵 Play Music";
  }
});

/* CONFETTI – POLISHED */
wowBtn.addEventListener("click", () => {
  for(let i=0;i<160;i++){
    const c = document.createElement("div");
    c.style.position="fixed";
    c.style.left=Math.random()*100+"vw";
    c.style.top="-10px";
    c.style.width="6px";
    c.style.height="14px";
    c.style.background=`hsl(${Math.random()*360},90%,60%)`;
    c.style.opacity="0.9";
    c.style.borderRadius="2px";
    c.style.zIndex="9999";
    document.body.appendChild(c);

    const dur=2200+Math.random()*2000;
    c.animate(
      [{transform:"translateY(0) rotate(0deg)"},
       {transform:"translateY(110vh) rotate(360deg)"}],
      {duration:dur,easing:"ease-in"}
    );
    setTimeout(()=>c.remove(),dur);
  }
});
