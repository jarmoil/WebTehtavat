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
    <li>
      <input type="checkbox" id="todo-${item.id}" ${item.completed ? 'checked' : ''}>
      <label for="todo-${item.id}">${item.task}</label>
    </li>
    `;
  }
  return html;
}

const listHtml = createHtml(todoList);

taulukko.insertAdjacentHTML('afterend', listHtml)



