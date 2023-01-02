const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
let currentPage = 1;

nextButton.addEventListener("click", () => {
  currentPage++;

  if (currentPage > 1) {
    backButton.disabled = false;
  }

  updateNumbers(currentPage);
});

backButton.addEventListener("click", () => {

  if (currentPage === 1) {
    backButton.disabled = true;
  }
  updateNumbers(currentPage);
});

function updateNumbers(page) {
  const numberDisplay = document.getElementById("number-display");
  numberDisplay.innerHTML = "";

  // Calculate the range of numbers to display based on the current page
  const start = (page - 1) * 5 + 1;
  const end = start + 4;
  for (let i = start; i <= end; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    numberDisplay.appendChild(div);
  }
}
