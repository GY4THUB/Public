const gameContainer = document.getElementById("gameContainer");
const basket = document.getElementById("basket");
const scoreDisplay = document.getElementById("score");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let score = 0;
let basketX = 170; // Initial basket position

function moveBasket(direction) {
    if (direction === "left" && basketX > 0) {
        basketX -= 25;
    } else if (direction === "right" && basketX < 340) {
        basketX += 25;
    }
    basket.style.left = basketX + "px";
}

// Keyboard Controls
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") moveBasket("left");
    if (e.key === "ArrowRight") moveBasket("right");
});

// Mobile Controls
leftBtn.addEventListener("click", () => moveBasket("left"));
rightBtn.addEventListener("click", () => moveBasket("right"));

// Function to create falling objects
function createFallingObject() {
    const object = document.createElement("div");
    object.classList.add("fallingObject");
    object.textContent = "🌕";
    object.style.left = Math.random() * 300 + "px";
    gameContainer.appendChild(object);

    let fallInterval = setInterval(() => {
        let objectTop = parseInt(object.style.top || 0);
        if (objectTop >= 375) {
            clearInterval(fallInterval);
            gameContainer.removeChild(object);

            let basketLeft = basketX;
            let basketRight = basketX + 50;
            let objectLeft = parseInt(object.style.left);
            let objectRight = objectLeft + 50;

            // Check if object is caught
            if (objectRight > basketLeft && objectLeft < basketRight) {
                score++;
                scoreDisplay.textContent = score;
            } else {
                alert("Game Over! Final Score: " + score);
                location.reload();
            }
        } else {
            object.style.top = objectTop + 4 + "px";
        }
    }, 50);
}

// Generate falling objects every 1 second
setInterval(createFallingObject, 2500);