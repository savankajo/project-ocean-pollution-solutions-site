const sliders = Array.from(document.querySelectorAll('input[type="range"]'));
const scoreNumber = document.querySelector("#score-number");

function updateScore() {
  const score = sliders.reduce((total, slider) => {
    return total + Number(slider.value) * Number(slider.dataset.weight);
  }, 0);

  scoreNumber.textContent = Math.round(score);
}

sliders.forEach((slider) => slider.addEventListener("input", updateScore));
updateScore();
