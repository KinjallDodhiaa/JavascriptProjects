document.getElementById("button").addEventListener("click", createTask);
function createTask(event) {
  event.preventDefault();

  let input = document.querySelector("input");
  if (input.value === "") {
    alert("You have to write the task before clicking on creating task");
  }

  let section = document.querySelector("section");
  let paragraph = document.createElement("p");
  paragraph.innerHTML = input.value;
  let span = document.createElement("span");
  span.innerHTML = "X";
  section.appendChild(paragraph);
  paragraph.appendChild(span);
  paragraph.classList.add("paragraph");
  span.classList.add("float");
  input.value = "";

  span.addEventListener("click", removeTask);
  function removeTask(ev) {
    let taskToBeRemoved = ev.target.parentElement;
    section.removeChild(taskToBeRemoved);
  }
}

// function clearList() {
//   input.value = "";
// }
