const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let tasks = [];

function addTask() {
  if (taskInput.value !== "") {
    tasks.push(taskInput.value);
    taskInput.value = "";
    updateList();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateList();
}

function completeTask(index) {
  const li = taskList.childNodes[index];
  li.classList.toggle("completed");
}

function updateList() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(tasks[i]));
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.setAttribute("onclick", `deleteTask(${i})`);
    li.appendChild(deleteButton);
    const completeButton = document.createElement("button");
    completeButton.appendChild(document.createTextNode("Complete"));
    completeButton.setAttribute("onclick", `completeTask(${i})`);
    li.appendChild(completeButton);
    taskList.appendChild(li);
  }
}