const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
while (true) {
  const command = prompt("Enter command (C/R/U/D):");
  if (command === "C") {
    const newTodo = prompt("Enter new todo:");
    todoList.push(newTodo);
    for (let i = 0; i < todoList.length; i++) {
      alert(`${i + 1}. ${todoList[i]}`);
    }
  } else if (command === "R") {
    for (let i = 0; i < todoList.length; i++) {
      alert(`${i + 1}. ${todoList[i]}`);
    }
  } else if (command === "U") {
    const index = prompt("Enter index of todo to update:");
    const newTodo = prompt("Enter new todo:");
    todoList[index - 1] = newTodo;
    for (let i = 0; i < todoList.length; i++) {
      alert(`${i + 1}. ${todoList[i]}`);
    }
  } else if (command === "D") {
    const index = prompt("Enter index of todo to delete:");
    todoList.splice(index - 1, 1);
    for (let i = 0; i < todoList.length; i++) {
      alert(`${i + 1}. ${todoList[i]}`);
    }
  } else {
    alert("Invalid command. Try again.");
  }
}
