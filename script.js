let counter = 0;
let energy = 100;

const counterEl = document.getElementById("counter");
const energyEl = document.getElementById("energy");
const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", () => {
    if (energy > 0) {
        counter++;
        energy--;
        counterEl.textContent = counter;
        energyEl.textContent = energy;
    }
});
