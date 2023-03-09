const counter = document.getElementById("counter");
const error = document.getElementById("error");

const dec_btn = document.getElementById("dec");
const inc_btn = document.getElementById("inc");
const clear_btn = document.getElementById("clear");

let count = 0;

inc_btn.addEventListener("click", () => {
  count += 1;
  if (count > 0) {
    error.innerHTML = "";
  }
  if (count == 0) {
    clear_btn.disabled = true;
  }

  if (count > 0) {
    clear_btn.disabled = false;
  }
  counter.innerHTML = count;
});

dec_btn.addEventListener("click", () => {
  if (count == 0) {
    error.classList.remove("hidden");
    error.innerHTML = "Error: Cannot go below 0";
  } else {
    count = count - 1;
    counter.innerHTML = count;
  }
  if (count == 0) {
    clear_btn.disabled = true;
  }
  if (count > 0) {
    clear_btn.disabled = false;
  }
});

clear_btn.addEventListener("click", () => {
  counter.innerHTML = 0;
  count = 0;
  clear_btn.disabled = true;
});
