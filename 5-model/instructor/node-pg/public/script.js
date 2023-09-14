document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const id = checkbox.dataset.todoId;
      const completed = checkbox.checked;

      // Send a PUT request to update the todo item
      fetch(`/todo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
});
