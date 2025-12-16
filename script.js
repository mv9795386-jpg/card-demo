const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const celebrateBtn = document.getElementById("celebrateBtn");
const typeBox = document.getElementById("typeText");

const message =
"Aap humare hero ho ❤️\n" +
"Aapki sehat, khushi aur lambi umar ke liye duaein 🙏\n" +
"Thank you for everything Papa.";

let i = 0;
function typeEffect(){
  if(i < message.length){
    typeBox.innerHTML += message[i] === "\n" ? "<br>" : message[i];
    i++;
    setTimeout(typeEffect, 45);
  }
}
typeEffect();

// Music play / pause
playBtn.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    playBtn.textContent = "⏸️ Music Playing";
  } else {
    song.pause();
    playBtn.textContent = "▶️ Play Music";
  }
});

// Celebrate button confetti
celebrateBtn.addEventListener("click", fireConfetti);

// Auto soft confetti on load
window.addEventListener("load", () => {
  setTimeout(fireConfetti, 800);
});

// Confetti function
function fireConfetti(){
  for(let i=0;i<120;i++){
    const c = document.createElement("div");
    c.style.position="fixed";
    c.style.left=Math.random()*100+"vw";
    c.style.top="-10px";
    c.style.width="6px";
    c.style.height="10px";
    c.style.background=`hsl(${Math.random()*360},90%,65%)`;
    c.style.borderRadius="2px";
    c.style.opacity="0.8";
    c.style.pointerEvents="none";
    c.style.zIndex="9999";
    document.body.appendChild(c);

    const d = 2500 + Math.random()*2000;
    c.animate(
      [{transform:"translateY(0)"},{transform:"translateY(110vh)"}],
      {duration:d,easing:"ease-in"}
    );
    setTimeout(()=>c.remove(), d);
  }
}

// Floating hearts background
setInterval(() => {
  const h = document.createElement("div");
  h.innerText = "❤️";
  h.style.position="fixed";
  h.style.left=Math.random()*100+"vw";
  h.style.bottom="-20px";
  h.style.fontSize=(14+Math.random()*18)+"px";
  h.style.opacity="0.8";
  h.style.zIndex="1";
  document.body.appendChild(h);

  const t = 4000 + Math.random()*2000;
  h.animate(
    [{transform:"translateY(0)",opacity:0.8},
     {transform:"translateY(-110vh)",opacity:0}],
    {duration:t,easing:"linear"}
  );
  setTimeout(()=>h.remove(), t);
}, 900);
