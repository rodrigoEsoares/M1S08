let input = document.querySelector("#input-task");
const button = document.querySelector("#btn");
let task = document.querySelector(".li");
const list = document.querySelector('#list')

let taskList = [];

function addTask() {
  if (input.value == "") {
    alert("Digite uma tarefa!!!");
  } else {
    taskList.push({
        task: input.value,
        completed:false
    });
    input.value = ""
    showTask()
  }
}

function showTask() {
    
    let newLi= ''

    taskList.forEach((element,index) =>{

        newLi = newLi + `
        <li class="task ${element.completed &&"done"}">
         <p>${element.task}</p>
          <div class="images">
            <i class="bi bi-check-circle-fill" onclick = "completedTask(${index})"></i>
            <i class="bi bi-trash3-fill" onclick = "deleteTask(${index})"></i>
          </div>
        </li>`
    })

    list.innerHTML = newLi

}

function completedTask(index) {
  taskList[index].completed = !taskList[index].completed
  showTask()
}

function deleteTask(index) {
    taskList.splice(index, 1)
    showTask()
   
}

button.addEventListener("click", addTask);
