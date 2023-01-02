// javascript code goes here
const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');
const numberDisplay = document.getElementById('number-display');

let page = 1;

nextButton.addEventListener('click', () => {
  page++;
  backButton.disabled = false;
  updateNumbers();
});

backButton.addEventListener('click', () => {
  page--;
  if (page === 1) {
    backButton.disabled = true;
  }
  updateNumbers();
});

function updateNumbers() {
  numberDisplay.innerHTML = '';
  for (let i = (page - 1) * 5 + 1; i <= page * 5; i++) {
    numberDisplay.innerHTML += `<div class="number">${i}</div>`;
  }
}
