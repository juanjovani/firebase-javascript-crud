import {saveTask, getTask} from './firebase.js'


window.addEventListener("DOMContentLoaded", async () => {
  const querySnapshot = await getTasks()
})
const tasksForm = document.getElementById("tasks-form")

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = taskForm["task-title"];
  const description = taskForm["task-description"];

  saveTask(title.value, description.value)

  taskForm.reset();
})