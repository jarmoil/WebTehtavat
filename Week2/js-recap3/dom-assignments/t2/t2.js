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

todoList.forEach(item => {
  const i = document.createElement('input');
  i.type = 'checkbox';
  i.id = `todo-${item.id}`;
  i.checked = item.completed;

  const l = document.createElement('label');
  l.htmlFor = `todo-${item.id}`;
  l.textContent = item.task;

  const li = document.createElement('li');
  li.appendChild(i);
  li.appendChild(l);

  taulukko.appendChild(li);
});
