document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const main = document.querySelector("#main-content")
  console.log(main)

  const idForm = document.querySelector("#user-id")
  const idDisplay = document.querySelector("#user")
  
  const taskForm = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")

  // additional form added after passing the lab 
  idForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const userId = document.querySelector("#current-user-id").value 
    const idItem = document.createElement("h3")
    idDisplay.innerHTML += `${userId}`
    idDisplay.appendChild(idItem)
    idForm.reset()
  })

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault()
    // have the user input
    const newTask = document.querySelector("#new-task-description").value
    // added task duration in form after passing the lab 
    const taskDuration = document.querySelector("#task-duration").value  
    // slap it on the document
    const taskItem = document.createElement("li")
    taskItem.innerHTML += `
    <li> ${newTask} - ${taskDuration} <button data-action="delete"> X </button> </li> 
    `
    taskList.appendChild(taskItem)
    taskForm.reset()
  })

  taskList.addEventListener("click", function(e) {
    console.log(e.target)
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()
    }
  })

})
