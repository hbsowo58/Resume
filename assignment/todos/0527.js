const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $custom = document.querySelector('.custom-checkbox');
const $btn = document.querySelector('.btn');
let $active = document.querySelector('.active-todos');
let todos = [];

function render() {
  let html = '';

  todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item"><input class="custom-checkbox" type="checkbox" ${completed ? 'checked' : ''} id="ck-${id}"><label for="ck-${id}">${content}</label><i class="remove-todo far fa-times-circle"></i></li>`;
  });
  $active.innerHTML = todos.length;


  $todos.innerHTML = html;
}

function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

function toggleCompletedAll(check) {
  todos = todos.map(todo => Object.assign({}, todo, { completed: check }));
}


$inputTodo.onkeyup = function (e) {
  const content = $inputTodo.value.trim();
  if (content === '' || e.keyCode !== 13) return;
  $inputTodo.value = '';

  todos = [{ id: generateId(), content, completed: false }, ...todos];
  // console.log(todos);
  render();
};


$todos.onclick = (e) => {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
  render();
};

// eslint-disable-next-line func-names
$todos.onchange = function (e) { // 일반 요소들은 체인지 버튼을 발생시키지 않음 onchange는 변화가 있는친구 레이블을 가리킴
  const id = +e.target.parentNode.id;
  todos = todos.map(todo => (todo.id === id ? Object.assign({},
    todo, { completed: !todo.completed }) : todo));
  render();
};

$custom.onchange = function (e) {
  toggleCompletedAll(e.target.checked);
  render();
};

$btn.onclick = function () {
  todos = todos.filter(todo => !todo.completed);
  render();
};
