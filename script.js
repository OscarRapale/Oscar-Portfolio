// Array of text strings to be displayed in the typewriter effect
const text = [
  "SOFTWARE ENGINEER",
  "WEB DEVELOPER",
  "DESIGNER",
  "FRONTEND SPECIALIST",
];

// Speed of typing effect in milliseconds
let speed = 100;

// Reference to the HTML element where the typewriter text will be displayed
const textElements = document.querySelector(".typewriter-text");

// Index to keep track of the current text string
let textIndex = 0;

// Index to keep track of the current character in the text string
let characterIndex = 0;

/**
 * Function to handle the typing effect
 */
function typeWriter() {
  if (characterIndex < text[textIndex].length) {
    // Add the next character to the text element
    textElements.innerHTML += text[textIndex].charAt(characterIndex);
    characterIndex++;
    // Call typeWriter again after a delay
    setTimeout(typeWriter, speed);
  } else {
    // Call eraseText after a delay once the entire text string is typed
    setTimeout(eraseText, 1000);
  }
}

/**
 * Function to handle the erasing effect
 */
function eraseText() {
  if (textElements.innerHTML.length > 0) {
    // Remove the last character from the text element
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    // Call eraseText again after a delay
    setTimeout(eraseText, 50);
  } else {
    // Move to the next text string and start typing again
    textIndex = (textIndex + 1) % text.length;
    characterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

/**
 * Function to show the dropdown menu
 */
function hamburg() {
  document.querySelector(".dropdown").style.transform = "translateY(0)";
}

/**
 * Function to hide the dropdown menu
 */
function cancel() {
  document.querySelector(".dropdown").style.transform = "translateY(-500px)";
}

// Start the typewriter effect when the window loads
window.onload = typeWriter;