console.log("Working...");

// Get Global components

let cardBoxes = document.getElementsByClassName("card-box");

let mainCard = null;

Array.from(cardBoxes).map((card) => {
  card.addEventListener("click", (e) => {
    const selectedCard = e.target;
    if (selectedCard.classList.contains("main-card")) {
      mainCard = selectedCard;
      console.log(mainCard);
    }
  });
});
