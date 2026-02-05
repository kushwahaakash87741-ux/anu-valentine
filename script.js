// Music
function playMusic() {
  document.getElementById("music").play();
}

// Surprise text
function showLove() {
  document.getElementById("msg").innerHTML =
    "Anu ❤️<br>You are my today, my tomorrow & my forever 💕";
}

// Proposal
function proposal() {
  alert("Anu 💍\nWill you be my Valentine today, tomorrow & forever? ❤️");
}

// Create floating hearts
const heartsContainer = document.querySelector(".hearts");
const heartEmojis = ["❤️","💖","💕","💘","💝"];

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (6 + Math.random() * 4) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 400);
