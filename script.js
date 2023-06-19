document.addEventListener("DOMContentLoaded", function() {
    // DOM elements
    const startPage = document.getElementById("startPage");
    const gamePage = document.getElementById("gamePage");
    const startButton = document.getElementById("startButton");
    const overlay = document.getElementById("overlay");
  
    // Background music
    let audio = new Audio('Chota Bheem - BGM.mp3');
    audio.loop = true;
  
    // Start button click event listener
    startButton.addEventListener("click", function() {
      startPage.style.display = "none";
      gamePage.style.display = "block";
      showOverlay();
      playBackgroundMusic();
    });
  
    // Function to show overlay for a certain duration
    function showOverlay() {
      overlay.style.display = "flex";
      setTimeout(hideOverlay, 1500); // Adjust the duration (in milliseconds) as needed
    }
  
    // Function to hide overlay and start the game
    function hideOverlay() {
      overlay.style.display = "none";
    }
  
    // Function to play background music
    function playBackgroundMusic() {
      audio.play();
    }

  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const startPage = document.getElementById("startPage");
    const gamePage = document.getElementById("gamePage");
    const startButton = document.getElementById("startButton");
  
    // Start button click event listener
    startButton.addEventListener("click", function () {
      startPage.style.display = "none";
      gamePage.style.display = "block";
      startGame();
    });
  
    // Function to start the game
    function startGame() {
      let score = 0;
      let cross = true;
  
      let audio = new Audio("Chota Bheem - BGM.mp3");
      let audiogo = new Audio("gameover.mp3");
      setTimeout(() => {
        audio.play();
      }, 1000);
  
      // Keyboard input event listener
      document.onkeydown = function (e) {
        console.log("Key code is: ", e.keyCode);
        if (e.keyCode == 38) {
          // Up arrow key
          dino = document.querySelector(".dino");
          dino.classList.add("animateDino");
          setTimeout(() => {
            dino.classList.remove("animateDino");
          }, 700);
        }
        if (e.keyCode == 39) {
          // Right arrow key
          dino = document.querySelector(".dino");
          dinoX = parseInt(
            window.getComputedStyle(dino, null).getPropertyValue("left")
          );
          dino.style.left = dinoX + 112 + "px";
        }
        if (e.keyCode == 37) {
          // Left arrow key
          dino = document.querySelector(".dino");
          dinoX = parseInt(
            window.getComputedStyle(dino, null).getPropertyValue("left")
          );
          dino.style.left = dinoX - 112 + "px";
        }
      };
  
      // Game logic interval
      setInterval(() => {
        dino = document.querySelector(".dino");
        gameOver = document.querySelector(".gameOver");
        obstacle = document.querySelector(".obstacle");
  
        dx = parseInt(
          window.getComputedStyle(dino, null).getPropertyValue("left")
        );
        dy = parseInt(
          window.getComputedStyle(dino, null).getPropertyValue("top")
        );
  
        ox = parseInt(
          window.getComputedStyle(obstacle, null).getPropertyValue("left")
        );
        oy = parseInt(
          window.getComputedStyle(obstacle, null).getPropertyValue("top")
        );
  
        offsetX = Math.abs(dx - ox);
        offsetY = Math.abs(dy - oy);
        // console.log(offsetX, offsetY)
        if (offsetX < 50 && offsetY < 40) {
          // Collision detected
          gameOver.innerHTML = "Game Over - Reload to Play Again" ;
          
          obstacle.classList.remove("obstacleAni");
          audio.play();
          setTimeout(() => {
            audio.pause();
          }, 1000);
        } else if (offsetX < 145 && cross) {
          // Successful cross without collision
          score += 1;
          updateScore(score);
          cross = false;
          setTimeout(() => {
            cross = true;
          }, 1000);
          setTimeout(() => {
            aniDur = parseFloat(
              window
                .getComputedStyle(obstacle, null)
                .getPropertyValue("animation-duration")
            );
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + "s";
            console.log("New animation duration: ", newDur);
          }, 500);
        }
      }, 10);
  
      // Function to update the score display
      function updateScore(score) {
        scoreCont.innerHTML = "Your Score: " + score;
      }
    }
  });
  