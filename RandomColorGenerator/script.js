let inputNumber = document.querySelector("input");
let colorSection = document.getElementById("colorSection");

function randomColorGenerator() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function addColors() {
  let randomColor = randomColorGenerator();
  let colorBox = document.createElement("div");
  let colorName = document.createElement("div");
  let close = document.createElement("div");

  colorSection.appendChild(colorBox);
  colorBox.appendChild(colorName);
  colorBox.appendChild(close);

  colorBox.classList.add("colorBox");
  colorName.classList.add("colorNameClose");
  close.classList.add("colorNameClose");

  close.innerText = "X";
  colorBox.style.backgroundColor = randomColor;
  colorName.innerHTML = randomColor;

  close.addEventListener("click", function (ev) {
    let colorBoxToBeRemoved = ev.target.parentElement;
    colorSection.removeChild(colorBoxToBeRemoved);
  });
}

 function init() {
   let colorNumber = inputNumber.value;
   inputNumber.value = "";
   for (let i = 0; i < colorNumber - 1; i++) {
     addColors();
   }
 }

