const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

const whaleButton = document.getElementById("whale-talk");

whaleButton.addEventListener("click", () => {
  let userInput = document.getElementById("user").value;
  const resultArray = [];

  for (let inputIndex = 0; inputIndex < userInput.length; inputIndex++) {
    if (userInput[inputIndex] === "e" || userInput[inputIndex] === "u") {
      resultArray.push(userInput[inputIndex]);
    }

    for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
      if (userInput[inputIndex] === vowels[vowelIndex]) {
        resultArray.push(userInput[inputIndex]);
      }
    }
  }

  const resultStr = resultArray.join("").toUpperCase();
  const newElements = document.getElementById("js-section");

  const listItems = document.createElement("li");
  newElements.appendChild(listItems);
  listItems.innerHTML = resultStr;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", () => {
    newElements.removeChild(listItems);
  });

  listItems.appendChild(deleteButton);
  newElements.appendChild(listItems);
  document.getElementById("user").value = "";
});

// console.log(resultArray);