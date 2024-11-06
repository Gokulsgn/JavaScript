const changeColorBtn = document.getElementById("changeColorBtn");

// Array of colors
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFC300"];

changeColorBtn.addEventListener("click", function() {
    // Select a random color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
