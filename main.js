const increaseBtn = document.getElementById("increaseBtn");

increaseBtn.addEventListener('click', () => {
  let rand1 = Math.floor(Math.random() * (200 - 50) + 1);
  let rand2 = Math.floor(Math.random() * (-100 - 25) + 1);
  increaseBtn.style.transform = "translate(" + rand1 + "px, " + rand2 + "px)";
});