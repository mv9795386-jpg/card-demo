const card = document.getElementById("card");
const stage = document.getElementById("stage");

const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const celebrateBtn = document.getElementById("celebrateBtn");
const typeBox = document.getElementById("typeText");

const message =
"Papa, aap humare hero ho ❤️\n" +
"Aapki sehat, khushi aur lambi umar ke liye duaen 🙏\n" +
"Thank you for everything. Love you!";

let i = 0;
function typeEffect(){
  if(i < message.length){
    typeBox.innerHTML += message[i] === "\n" ? "<br>" : message[i];
    i++;
    setTimeout(typeEffect, 32);
  }
}
typeEffect();

// Music play/pause (mobile requires user click)
playBtn.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    playBtn.textContent = "⏸ Playing";
  } else {
    song.pause();
    playBtn.textContent = "▶ Play Music";
  }
});

// Confetti (premium, subtle)
celebrateBtn.addEventListener("click", () => fireConfetti(140));

function fireConfetti(count){
  for(let k=0;k<count;k++){
    const c = document.createElement("div");
    c.style.position="fixed";
    c.style.left = Math.random()*100+"vw";
    c.style.top = "-12px";
    c.style.width = (5 + Math.random()*4) + "px";
    c.style.height = (10 + Math.random()*10) + "px";
    c.style.background = `hsl(${Math.random()*360},90%,62%)`;
    c.style.borderRadius = "2px";
    c.style.opacity = "0.9";
    c.style.pointerEvents="none";
    c.style.zIndex="9999";
    c.style.transform = `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(c);

    const dur = 2200 + Math.random()*2200;
    c.animate(
      [
        { transform: c.style.transform + " translateY(0)" },
        { transform: c.style.transform + ` translateY(115vh)` }
      ],
      { duration: dur, easing: "cubic-bezier(.2,.8,.2,1)" }
    );
    setTimeout(()=>c.remove(), dur);
  }
}

// --- Premium 3D Tilt (touch drag) ---
let down = false;

function applyTilt(clientX, clientY){
  const r = stage.getBoundingClientRect();
  const x = (clientX - r.left) / r.width;   // 0..1
  const y = (clientY - r.top) / r.height;   // 0..1
  const rotY = (x - 0.5) * 16;
  const rotX = (0.5 - y) * 12;
  card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
}

function resetTilt(){
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
}

stage.addEventListener("pointerdown", (e) => {
  down = true;
  stage.setPointerCapture?.(e.pointerId);
  applyTilt(e.clientX, e.clientY);
});

stage.addEventListener("pointermove", (e) => {
  if(!down) return;
  applyTilt(e.clientX, e.clientY);
});

stage.addEventListener("pointerup", () => {
  down = false;
  resetTilt();
});

stage.addEventListener("pointerleave", () => {
  down = false;
  resetTilt();
});

// Auto subtle confetti once (small)
window.addEventListener("load", () => {
  setTimeout(()=>fireConfetti(80), 700);
});
