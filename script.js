// Select the line element
const line = document.getElementById('line');

// Initialize angle
let angle = 0;

// Function to rotate the line
function rotateLine() {
  angle += 2; // Increase by 2 degrees
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

// Rotate every 20 milliseconds
setInterval(rotateLine, 20);
