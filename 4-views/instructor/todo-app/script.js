document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const exportButton = document.getElementById("exportButton");

  // Load tasks from local storage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Function to render tasks from the tasks array
  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <span>${task}</span>
                <button class="delete" data-index="${index}">Delete</button>
            `;
      taskList.appendChild(li);
    });
  }

  // Initial rendering of tasks
  renderTasks();

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      tasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskInput.value = "";

      // Render only the newly created task
      const newIndex = tasks.length - 1;
      const li = document.createElement("li");
      li.innerHTML = `
                <span>${tasks[newIndex]}</span>
                <button class="delete" data-index="${newIndex}">Delete</button>
            `;
      taskList.appendChild(li);

      // Trigger the animation by adding a CSS class
      setTimeout(() => {
        li.classList.add("animate-entry");
      }, 0);
    }
  });

  taskList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      const index = e.target.getAttribute("data-index");
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    }
  });

  // Export as CSV
  exportButton.addEventListener("click", function () {
    const csvContent = "data:text/csv;charset=utf-8," + tasks.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tasks.csv");
    document.body.appendChild(link);
    link.click();
  });
});
