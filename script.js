let angle = 0; // initial rotation angle
const line = document.getElementById("line");

// function to update rotation
setInterval(() => {
  angle += 2; // increase by 2 degrees
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20); // update every 20 milliseconds
