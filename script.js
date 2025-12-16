const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const wowBtn = document.getElementById("wowBtn");

// Music play / pause (mobile-safe)
playBtn.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    playBtn.textContent = "⏸ Playing";
  } else {
    song.pause();
    playBtn.textContent = "▶ Play Music";
  }
});

// WOW: confetti + sparkle burst
wowBtn.addEventListener("click", () => {
  fireConfetti(220);
  sparkBurst(28);
});

function fireConfetti(count){
  for(let i=0;i<count;i++){
    const c = document.createElement("div");
    c.style.position="fixed";
    c.style.left = Math.random()*100+"vw";
    c.style.top = "-12px";
    c.style.width = (5 + Math.random()*4) + "px";
    c.style.height = (10 + Math.random()*12) + "px";
    c.style.background = `hsl(${Math.random()*360},92%,62%)`;
    c.style.borderRadius = "2px";
    c.style.opacity = "0.95";
    c.style.pointerEvents="none";
    c.style.zIndex="9999";
    c.style.transform = `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(c);

    const dur = 2200 + Math.random()*2200;
    c.animate(
      [
        { transform: c.style.transform + " translateY(0)" },
        { transform: c.style.transform + " translateY(115vh)" }
      ],
      { duration: dur, easing: "cubic-bezier(.2,.8,.2,1)" }
    );
    setTimeout(()=>c.remove(), dur);
  }
}

function sparkBurst(n){
  for(let i=0;i<n;i++){
    const s = document.createElement("div");
    s.textContent = "✨";
    s.style.position="fixed";
    s.style.left = (50 + (Math.random()*20 - 10)) + "vw";
    s.style.top  = (45 + (Math.random()*18 - 9)) + "vh";
    s.style.fontSize = (14 + Math.random()*18) + "px";
    s.style.opacity = "0.95";
    s.style.pointerEvents="none";
    s.style.zIndex="9999";
    document.body.appendChild(s);

    const dx = (Math.random()*240 - 120);
    const dy = (Math.random()*240 - 120);
    const dur = 900 + Math.random()*700;

    s.animate(
      [
        { transform: "translate(0,0) scale(1)", opacity: 0.95 },
        { transform: `translate(${dx}px,${dy}px) scale(0.6)`, opacity: 0 }
      ],
      { duration: dur, easing: "ease-out" }
    );

    setTimeout(()=>s.remove(), dur);
  }
}

// Auto tiny WOW once (subtle)
window.addEventListener("load", () => {
  setTimeout(()=>fireConfetti(90), 650);
});
