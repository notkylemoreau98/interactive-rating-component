let rating;

// DOM Variables
const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit");

// Event Listeners
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", handleRatingSelect);
});

submitBtn.addEventListener("click", handleSubmit);

// Functions
function handleRatingSelect(e) {
  const btn = e.target;
  rating = btn.value;
  console.log(rating);

  const previousSelectedRatings = document.querySelector(".selected");
  if (previousSelectedRatings !== null) {
    previousSelectedRatings.classList.remove("selected");
  }
  btn.classList.add("selected");
}

function handleSubmit() {
  const thanksModal = document.getElementById("thanks-modal");
  const activeModal = document.querySelector(".active");

  activeModal.classList.remove("active");
  thanksModal.classList.add("active");

  const ratingDisplay = document.getElementById("rating");
  ratingDisplay.innerText = rating;
}
