const text = [
  "SOFTWARE ENGINEER",
  "WEB DEVELOPER",
  "DESIGNER",
  "FRONTEND SPECIALIST",
];

let speed = 100;

const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
  if (characterIndex < text[textIndex].length) {
    textElements.innerHTML += text[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % text.length;
    characterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

function hamburg() {
  document.querySelector(".dropdown").style.transform = "translateY(0)";
}

function cancel() {
  document.querySelector(".dropdown").style.transform = "translateY(-500px)";
}

window.onload = typeWriter;
