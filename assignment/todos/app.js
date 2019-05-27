const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $custom = document.querySelector('.custom-checkbox');
const $btn = document.querySelector('.btn');
let $active = document.querySelector('.active-todos');
let todos = [];

function render() {
  let html = '';
  
  todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item"><input class="custom-checkbox" type="checkbox" ${completed ? 'checked' : ''} id="ck-${id}"><label for="ck-${id}">${content}</label><i class="remove-todo far fa-times-circle"></i></li>`
  });
  $active.innerHTML = todos.length;
  

  $todos.innerHTML = html;
}


$inputTodo.onkeyup = function (e) {
  const content = $inputTodo.value.trim();
  if(content === '' || e.keyCode !== 13) return;
  $inputTodo.value = '';
  
  todos = [{ id: generateId(), content, completed: false}, ...todos];
  // console.log(todos);
  render();
}

function generateId(){
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

$todos.onclick = (e) => {
  if (!e.target.classList.contains('remove-todo')) return;
  // this.removeChild(e.target.parentNode);
  // ID !!!
  // console.log(e.target.parentNode.id);
  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
  // console.log(todos);
  render();
};

$todos.onchange = function(e){//일반 요소들은 체인지 버튼을 발생시키지 않음 onchange는 변화가 있는친구 레이블을 가리킴
  const id = +e.target.parentNode.id;
  todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, {completed:!todo.completed}): todo));
  render();
};

$custom.onchange = function(e){
  // console.dir(e.target.checked);
  toggleCompletedAll(e.target.checked);
  render();
}
function toggleCompletedAll(check) {
  todos = todos.map(todo => Object.assign({}, todo, { completed: check }));
}
$btn.onclick = function(){
   todos = todos.filter(todo => !todo.completed);
   
  // todos의 completed값이 ture인 애들 모두삭제
  render();
}












