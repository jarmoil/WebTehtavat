// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const taulukko = document.querySelector('#target');

function createHtml (todoList) {
  let html = '';

  for (const item of todoList) {
    html += `
    <li id="todo-item-${item.id}">
      <input type="checkbox" id="todo-${item.id}" ${item.completed ? 'checked' : ''}>
      <label for="todo-${item.id}">${item.task}</label>
      <button class="delete-btn" data-id="${item.id}">Delete</button>
    </li>
    `;
  }
  return html;
}

taulukko.innerHTML = createHtml(todoList);

// Attach the event listener to the `taulukko` element
taulukko.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    const id = parseInt(event.target.id.replace('todo-', ''), 10);
    const todoItem = todoList.find(item => item.id === id);
    if (todoItem) {
      todoItem.completed = event.target.checked;
      console.clear(); // Clear the console
      console.log(todoItem); // Log only the updated item
    }
  }
});

// Add event listener for delete buttons
taulukko.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const id = parseInt(event.target.dataset.id, 10);
    const index = todoList.findIndex(item => item.id === id);
    if (index !== -1) {
      todoList.splice(index, 1); // Remove item from the array
      const listItem = document.querySelector(`#todo-item-${id}`);
      taulukko.removeChild(listItem); // Remove item from the DOM
      console.clear(); // Clear the console
      console.log(todoList); // Log updated todoList
    }
  }
});

const dialog = document.querySelector('#add-todo-dialog');
const openDialogBtn = document.querySelector('#open-dialog-btn');
const addTodoForm = document.querySelector('#add-todo-form');
const newTodoInput = document.querySelector('#new-todo-input');

// Open the modal when "Add Todo Item" button is clicked
openDialogBtn.addEventListener('click', () => {
  dialog.showModal();
});

// Handle form submission to add a new TODO item
addTodoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from refreshing the page
  const newTask = newTodoInput.value.trim();
  if (newTask) {
    const newTodo = {
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1, // Generate a new ID
      task: newTask,
      completed: false,
    };
    todoList.push(newTodo); // Add new item to the array
    taulukko.innerHTML = createHtml(todoList); // Re-render the list
    console.clear(); // Clear the console
    console.log(todoList); // Log updated todoList
    dialog.close(); // Close the modal
    newTodoInput.value = ''; // Clear the input field
  }
});

