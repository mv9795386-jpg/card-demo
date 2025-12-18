/* TYPEWRITER MESSAGE */
const text = `Aaj ka din sirf ek birthday nahi ❤️
balki ek bohot hi special insaan ka celebration hai 🎂
Khush raho, muskurati raho,
aur hamesha shine karti raho ✨`;

let i = 0;
const messageEl = document.getElementById("message");

function typeWriter() {
  if (i < text.length) {
    messageEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
typeWriter();

/* MUSIC TOGGLE */
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.onclick = () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔊";
  } else {
    music.pause();
    btn.textContent = "🔇";
  }
};

/* CONFETTI */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 6 + 2,
  d: Math.random() * 4 + 2
}));

function drawConfetti() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
    ctx.fill();
    c.y += c.d;
    if (c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(drawConfetti);
}
drawConfetti();

/* HEART RAIN */
const hearts = document.getElementById("hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);
