const card = document.getElementById("card");
const scene = document.getElementById("scene");
const flipBtn = document.getElementById("flipBtn");

const numberInput = document.getElementById("numberInput");
const nameInput = document.getElementById("nameInput");
const expInput = document.getElementById("expInput");
const cvvInput = document.getElementById("cvvInput");

const cardNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const cardExp = document.getElementById("cardExp");
const cardCvv = document.getElementById("cardCvv");
const cardId = document.getElementById("cardId");

const badge = document.getElementById("brandBadge");
const badgeMini = document.getElementById("brandBadgeMini");

function onlyDigits(s){ return (s || "").replace(/\D/g, ""); }

function formatCardNumber(raw){
  const digits = onlyDigits(raw).slice(0, 16);
  const groups = digits.match(/.{1,4}/g) || [];
  const spaced = groups.join(" ");
  return (spaced || "").padEnd(19, "#").replace(/#/g, "•");
}

function clampMonth(mm){
  const n = parseInt(mm, 10);
  if (Number.isNaN(n)) return "";
  if (n <= 0) return "01";
  if (n > 12) return "12";
  return String(n).padStart(2, "0");
}

function formatExpiry(raw){
  const digits = onlyDigits(raw).slice(0, 4);
  if (digits.length <= 2) return (digits || "").padEnd(2, "M") + "/YY";
  return digits.slice(0,2) + "/" + digits.slice(2).padEnd(2, "Y");
}

function setFlip(on){
  card.classList.toggle("is-flipped", !!on);
  resetTilt();
}

flipBtn.addEventListener("click", () => {
  setFlip(!card.classList.contains("is-flipped"));
});

// Tap card to flip
card.addEventListener("click", () => {
  setFlip(!card.classList.contains("is-flipped"));
});

// Brand switch
document.querySelectorAll(".pill").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pill").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const brand = btn.dataset.brand;
    card.dataset.brand = brand;

    // force repaint of badges (purely visual)
    badge.textContent = "";
    badgeMini.textContent = "";
  });
});

// Live updates
numberInput.addEventListener("input", (e) => {
  let digits = onlyDigits(e.target.value).slice(0,16);
  let groups = (digits.match(/.{1,4}/g) || []).join(" ");
  e.target.value = groups;
  cardNumber.textContent = formatCardNumber(groups);

  // demo Card ID from last 8 digits
  const last8 = digits.slice(-8).padStart(8, "0");
  cardId.textContent = last8.match(/.{1,4}/g).join(" ");
});

nameInput.addEventListener("input", (e) => {
  const v = (e.target.value || "").toUpperCase().trim();
  cardName.textContent = v ? v : "YOUR NAME";
});

expInput.addEventListener("input", (e) => {
  let digits = onlyDigits(e.target.value).slice(0,4);
  if (digits.length >= 2) {
    const mm = clampMonth(digits.slice(0,2));
    digits = mm + digits.slice(2);
  }
  let out = digits.length <= 2 ? digits : `${digits.slice(0,2)}/${digits.slice(2)}`;
  e.target.value = out;
  cardExp.textContent = formatExpiry(out);
});

cvvInput.addEventListener("input", (e) => {
  const digits = onlyDigits(e.target.value).slice(0,4);
  e.target.value = digits;
  cardCvv.textContent = digits ? digits : "***";
});

// Auto flip on CVV focus
cvvInput.addEventListener("focus", () => setFlip(true));
cvvInput.addEventListener("blur", () => setFlip(false));

// --- Premium tilt (drag / pointer) ---
let pointerDown = false;

function applyTilt(clientX, clientY){
  const r = scene.getBoundingClientRect();
  const x = (clientX - r.left) / r.width;   // 0..1
  const y = (clientY - r.top) / r.height;   // 0..1
  const rotY = (x - 0.5) * 18;
  const rotX = (0.5 - y) * 12;

  const isFlipped = card.classList.contains("is-flipped");
  card.style.transform =
    `rotateY(${isFlipped ? 180 : 0}deg) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
}

function resetTilt(){
  card.style.transform = "";
}

scene.addEventListener("pointerdown", (e) => {
  pointerDown = true;
  scene.setPointerCapture?.(e.pointerId);
  applyTilt(e.clientX, e.clientY);
});

scene.addEventListener("pointermove", (e) => {
  if (!pointerDown) return;
  applyTilt(e.clientX, e.clientY);
});

scene.addEventListener("pointerup", () => {
  pointerDown = false;
  resetTilt();
});

scene.addEventListener("pointerleave", () => {
  pointerDown = false;
  resetTilt();
});
