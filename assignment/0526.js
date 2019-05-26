const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach((todo) => {
    html += `<li id="${todo.id}">
      <label><input type="checkbox"${todo.completed ? ' checked' : ''}>${todo.content}</label>
    </li>`;
  });
  return html;
}

console.log(render());

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues(key) {
  return todos.map((todo) => todo[key]);
}
console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // [ 'HTML', 'CSS', 'Javascript' ]
console.log(getValues('completed')); // [ false, true, false]

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
  const newarray = todos.slice();
  newarray.sort((a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0)));
  return newarray;
}

console.log(sortBy('id'));
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy('content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
console.log(sortBy('completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  todos = [newTodo].concat(todos);
  // todos = [todos].concat(newTodo);todos 배열뒤에 새로운일 추가
  // todos = [...todos, newTodo]; 스프레드 연산자 이용해 todos풀고, 새로운배열 넣기 이건 앞에들어감
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

removeTodo(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo,
    { completed: !todo.completed }) : todo));
}

toggleCompletedById(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  todos = todos.map(todo => Object.assign({}, todo, { completed: true }));
}

toggleCompletedAll();

console.log(todos);


const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  return todos.filter(todo => todo.completed).length;
}

console.log(countCompletedTodos()); // 1
