/* MUSIC – USER TAP REQUIRED */
const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");

startBtn.onclick = () => {
  music.play().catch(() => {});
  startScreen.style.display = "none";
};

/* TYPEWRITER MESSAGE */
const text = `Aaj ka din sirf ek birthday nahi ❤️
balki ek bohot hi special insaan ka celebration hai 🎂
Khush raho, muskurati raho,
aur hamesha shine karti raho ✨`;

let i = 0;
const msg = document.getElementById("message");

(function typeWriter() {
  if (i < text.length) {
    msg.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
})();

/* CONFETTI */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const confetti = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 5 + 2,
  d: Math.random() * 3 + 2
}));

(function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,50%)`;
    ctx.fill();
    c.y += c.d;
    if (c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(drawConfetti);
})();

/* HEART RAIN */
const hearts = document.getElementById("hearts");

setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (3 + Math.random() * 3) + "s";
  hearts.appendChild(h);

  setTimeout(() => h.remove(), 6000);
}, 300);
