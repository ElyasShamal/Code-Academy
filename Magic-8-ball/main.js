let magicBtn = document.getElementById("magic");
let clearBtn = document.getElementById("clear");
let descriptionText = document.getElementById("magic-ball-text");
let magicBallIcon = document.getElementById("magic-ball-icon");

magicBtn.addEventListener("click", function () {
  magicBallIcon.classList.add("spin");

  magicBallIcon.addEventListener(
    "animationend",
    function () {
      magicBallIcon.classList.remove("spin");
    },
    { once: true }
  );

  let randomNumber = Math.floor(Math.random() * 8);
  switch (randomNumber) {
    case 0:
      descriptionText.textContent = "It is certain";
      break;
    case 1:
      descriptionText.textContent = "Without a doubt";
      break;
    case 2:
      descriptionText.textContent = "it is decidedly so";
      break;
    case 3:
      descriptionText.textContent = "Replay hazy try again";
      break;
    case 4:
      descriptionText.textContent = "My sources say no";
      break;
    case 5:
      descriptionText.textContent = "connot predict now";
      break;
    case 6:
      descriptionText.textContent = "Outlook not so good";
      break;
    case 7:
      descriptionText.textContent = "do not count on it";
      break;
    default:
      descriptionText.textContent = "Try again";
      break;
  }
});

clearBtn.addEventListener("click", function () {
  descriptionText.textContent = "";
});