const card=document.getElementById("card");

function flip(){
  card.classList.toggle("flip");
}

function setNumber(v){
  document.getElementById("number").innerText=v||"•••• •••• •••• ••••";
}

function setName(v){
  document.getElementById("name").innerText=v||"YOUR NAME";
}

function setExp(v){
  document.getElementById("exp").innerText=v||"MM/YY";
}

function setCvv(v){
  document.getElementById("cvv").innerText=v||"***";
}