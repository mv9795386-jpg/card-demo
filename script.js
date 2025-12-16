const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const confettiBtn = document.getElementById("confettiBtn");

playBtn.addEventListener("click", async () => {
  try{
    await song.play();
    playBtn.textContent = "⏸️ Playing...";
  }catch(e){
    alert("Tap again to allow music 🎵");
  }
});

confettiBtn.addEventListener("click", () => {
  for(let i=0;i<120;i++){
    const s = document.createElement("span");
    s.style.position="fixed";
    s.style.left=Math.random()*100+"vw";
    s.style.top="-10px";
    s.style.width="8px";
    s.style.height="12px";
    s.style.background=`hsl(${Math.random()*360},90%,60%)`;
    s.style.opacity=".9";
    s.style.transform=`rotate(${Math.random()*360}deg)`;
    s.style.borderRadius="2px";
    s.style.pointerEvents="none";
    s.style.zIndex="9999";
    document.body.appendChild(s);

    const dur = 2000+Math.random()*2000;
    s.animate([
      { transform: s.style.transform, top:"-10px" },
      { transform: s.style.transform, top:"110vh" }
    ],{ duration: dur, easing:"ease-in" });

    setTimeout(()=>s.remove(), dur);
  }
});