const intro = document.querySelector(".intro");

// start animation
requestAnimationFrame(() => intro.classList.add("play"));

// redirect after animation (Netflix-like)
const GO_AFTER_MS = 2200;
let t = setTimeout(() => {
  window.location.href = "login.html";
}, GO_AFTER_MS);

// click to skip
document.addEventListener("click", () => {
  clearTimeout(t);
  window.location.href = "login.html";
});
