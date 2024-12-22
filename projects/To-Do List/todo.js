  // Get references to DOM elements
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");
  
  // Add Todo Item
function addTodo() {
      const todoText = todoInput.value.trim();
  
      if (todoText === "") {
          alert("Please enter a todo item!");
          return;
      }
  
      const li = document.createElement("li");
  
      // Create the text span
      const todoSpan = document.createElement("span");
      todoSpan.textContent = todoText;
  
      // Create the delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-btn");
  
      // Delete the todo on click
      deleteButton.addEventListener("click", function () {
          todoList.removeChild(li);
      });
  
      // Append the elements to the li and then to the list
      li.appendChild(todoSpan);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
  
      // Clear input field after adding
      todoInput.value = "";
  }
  
  // Event listener to add todo on button click
  addButton.addEventListener("click", addTodo);
  
  // Allow pressing Enter key to add todo
  todoInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
          addTodo();
      }
  });
