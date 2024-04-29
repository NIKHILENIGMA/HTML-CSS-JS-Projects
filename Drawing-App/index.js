//* Handling the panel card display

document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.options');
  options.forEach(option => {
      option.addEventListener('click', function() {
          const targetCard = document.getElementById(this.getAttribute('data-target'));
          const isActive = targetCard.classList.contains('active'); // Check if the card is already active

          // Hide all cards and remove 'active' class from all options
          document.querySelectorAll('.card, .card1, .card2, .card3, .card4').forEach(card => {
              card.style.display = "none"; // Hide the card
              card.classList.remove('active'); // Remove 'active' class
          });
          options.forEach(opt => {
              opt.classList.remove('active'); // Remove 'active' class from all options
              opt.classList.remove('active-option'); // Remove the active-option class to reset the color
          });

          // Toggle the clicked card and option based on its active state
          if (!isActive) {
              targetCard.style.display = "grid"; // Show the clicked one
              targetCard.classList.add('active'); // Add 'active' class to the card
              this.classList.add('active'); // Mark the clicked option as active
              this.classList.add('active-option'); // Add the active-option class to change the color
          }
          
      });
  });
});



// const canvas = document.querySelector("canvas");
// const shapesTools = document.querySelectorAll(".shapes-tools");
// const paintingBrush = document.querySelector("#paint-brush");
// const brushTools = document.querySelector(".card-body");

// //@ Global Variables
// let ctx = canvas.getContext("2d");
// let isDrawing = false;
// let brushWidth = 15;
// let selectedTool = "brush";
// let initialX, initialY;
// let clearCanvas = document.querySelector(".clear-canvas");

// //@ Get the actual width and height of the canvas which will be displayed.
// window.addEventListener("load", () => {
//   // Getting the exact size of the canvas
//   canvas.width = canvas.offsetWidth;
//   canvas.height = canvas.offsetHeight;
// });

// //@ Follows the track of the mouse on the canvas
// const draw = (e) => {
//   if (!isDrawing) return;
//   // Creating a line according to the mouse position
//   ctx.lineTo(e.offsetX, e.offsetY);
//   ctx.stroke();
// };

// //@ Draw the rectangle
// const drawRectangle = (e) => {
//   ctx.strokeRect(
//     e.offsetX,
//     e.offsetY,
//     initialX - e.offsetX,
//     initialY - e.offsetY
//   );
// };

// //@ Draw with the brush
// const startDrawing = (e) => {
//   isDrawing = true;
//   initialX = e.offsetX;
//   initialY = e.offsetY;
//   // Create a brush stroke
//   if (selectedTool === "brush") {
//     ctx.beginPath();
//     // ctx.lineWidth = brushWidth;
//   } else if (selectedTool === "rectangle") {
//     drawRectangle(e);
//   }
// };

// paintingBrush.addEventListener("click", () => {
//   selectedTool = "brush";
//   // Remove active class from all shape tools
//   shapesTools.forEach((btn) => btn.classList.remove("active"));
//   // Add active class to the paint brush button
//   paintingBrush.classList.add("active");
// });

// //@ Check options is active ?
// shapesTools.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     document.querySelector("options .active").classList.remove("active");
//     btn.classList.add("active");
//     selectedTool = btn.id;
//     console.log(selectedTool);
//   });
// });

// //@ CLear the entire canvas
// clearCanvas.addEventListener("click", () => {
//   // Clear entire canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// });

// paintingBrush.addEventListener("click", () => {
//   if (brushTools.style.display == "none") {
//     brushTools.style.display = "block";
//   } else {
//     brushTools.style.display = "none";
//   }
// });

// canvas.addEventListener("mousedown", startDrawing);
// canvas.addEventListener("mouseup", () => (isDrawing = false));
// canvas.addEventListener("mousemove", draw);
