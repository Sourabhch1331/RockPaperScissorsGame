const game = () => {
  let pSocre = 0;
  let cSocre = 0;
  //start game
  const startgame = () => {
    const playbtn = document.querySelector(".play");
    const introscreen = document.querySelector(".intro");
    const matchscreen = document.querySelector(".match");
    const cancelbtn = document.querySelector(".cancel");
    playbtn.addEventListener("click", () => {
      introscreen.classList.add("fadeout");
      matchscreen.classList.add("fadein");
      cancelbtn.classList.remove("fadeout");
    });
    cancelbtn.addEventListener("click", () => {
      introscreen.classList.remove("fadeout");
      matchscreen.classList.remove("fadein");
      cancelbtn.classList.toggle("fadeout");
      canceled();
    });
  };

  //play match
  const playmatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerhand = document.querySelector(".player-hand");
    const computerhand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //computer options
    const computeroptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer choise...
        const computerNumber = Math.floor(Math.random() * 3);
        const computerchoise = computeroptions[computerNumber];
        //player choise
        const playerchoise = this.textContent;

        setTimeout(() => {
          //comapre hands
          comaprehands(computerchoise, playerchoise);

          //change images
          playerhand.src = `https://raw.githubusercontent.com/developedbyed/rock-paper-scissor/master/assets/${this.textContent}.png`;
          computerhand.src = `https://raw.githubusercontent.com/developedbyed/rock-paper-scissor/master/assets/${computerchoise}.png`;
          updatescore();
        }, 2000);

        //animaiton
        playerhand.style.animation = "shakep 2s ease";
        computerhand.style.animation = "shakec 2s ease";
      });
    });
  };
  const comaprehands = (computerchoise, playerchoise) => {
    const winner = document.querySelector(".winner");
    if (computerchoise === playerchoise) {
      winner.textContent = "It's a Tie";
      return;
    }
    if (playerchoise === "rock") {
      if (computerchoise === "paper") {
        winner.textContent = "Computer wins!";
        cSocre++;
        return;
      } else {
        winner.textContent = "Player wins!";
        pSocre++;
        return;
      }
    }
    if (playerchoise === "paper") {
      if (computerchoise === "rock") {
        winner.textContent = "Player wins!";
        pSocre++;
        return;
      } else {
        winner.textContent = "Computer wins!";
        cSocre++;
        return;
      }
    }
    if (playerchoise === "scissors") {
      if (computerchoise === "rock") {
        winner.textContent = "Computer wins!";
        cSocre++;
        return;
      } else {
        winner.textContent = "Player wins!";
        pSocre++;
        return;
      }
    }
  };
  let updatescore = () => {
    let f = 0;
    let playerscore = document.querySelector(".player-score p");
    let computerscore = document.querySelector(".Computer-score p");
    playerscore.textContent = pSocre;
    computerscore.textContent = cSocre;
    if (pSocre === 5) {
      window.alert("Player won");
      f = 1;
    } else if (cSocre === 5) {
      window.alert("Computer won");
      f = 1;
    }
    if (f === 1) {
      //the score is 10 so we make score=0;
      pSocre = 0;
      cSocre = 0;
      //update screen;
      playerscore.textContent = pSocre;
      computerscore.textContent = cSocre;
      //show choose option again
      let winner=document.querySelector(".winner");
      winner.textContent="Choose An Option";
      //again show intro screen
      const introscreen = document.querySelector(".intro");
      const matchscreen = document.querySelector(".match");
      introscreen.classList.remove("fadeout");
      matchscreen.classList.remove("fadein");
      //make images to rock again...
      const playerhand = document.querySelector(".player-hand");
      playerhand.src = `https://raw.githubusercontent.com/developedbyed/rock-paper-scissor/master/assets/rock.png`;

      const computerhand = document.querySelector(".computer-hand");
      computerhand.src = `https://raw.githubusercontent.com/developedbyed/rock-paper-scissor/master/assets/rock.png`;
    }
    return;
  };
  //canceled
  const canceled = () => {
    pSocre = 0;
    cSocre = 0;
    let playerscore = document.querySelector(".player-score p");
    let computerscore = document.querySelector(".Computer-score p");
    let winner=document.querySelector(".winner");
    playerscore.textContent = pSocre;
    computerscore.textContent = cSocre;
    winner.textContent="Choose An Option";
    return;
  };
  //call functions
  startgame();
  playmatch();
};
game();
