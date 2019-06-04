let todos = [];
const $todos = document.querySelector('.todos');
const $btn = document.querySelector('.btn');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('#ck-complete-all');
const $clearLength = document.querySelector('.completed-todos');
const $activeTodo = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');
let navState = 'all';
// 전역변수들 모아놓은곳 , 전역변수 선언 

function render(todosFromServer) {
 todos = todosFromServer;
let _todos = [];
 _todos = todos;
//  console.log(_todos)
 let html = '';
 if (navState === 'all') {
   _todos = todos;
 } else if (navState === 'active') {
   _todos = todos.filter(todo => !todo.completed);
 } else {
   _todos = todos.filter(todo => todo.completed);
 }
  // console.log(_todos)
 _todos.forEach(({ id, content, completed }) => {
   html += `<li id="${id}" class="todo-item"><input class="custom-checkbox" type="checkbox"${completed ? 'checked' : ''} id="ck-${id}"><label for="ck-${id}"> ${content} </label><i class="remove-todo far fa-times-circle"></i></li>`;
 });

 $todos.innerHTML = html;
 $clearLength.innerHTML = todos.filter(todo => todo.completed).length;
 $activeTodo.innerHTML = todos.filter(() => todos).length;
}
//1 랜더함수 - > 로드되면 서버로부터 데이터를 받아와서, 랜더함수의 매개변수로 넣어준다.

// 서버에서 받아온 데이터를 , todos, _todos에 할당하고 (넣고)

//html이라는 지역변수를 '빈문자열'로 초기화한다 (싹 비운다)

//navState라는 변수는 초기값으로 all을 갖고있는데, 이중 변화가 생기는지 검사해서, _todos배열에 필터링하여 넣는다.

//그후 _todos배열을 화면에 html이라는 변수에 '누적'한다

// html변수를 todos에 그려준다

//todos를 필터링하여 clearLength에 그려준다

//actvieTodo도 그려준다




function getTodos () {
 fetch('http://localhost:9000/todos')
   .then(res => res.json())
   .then(render)
   .catch(console.error);
}
//갯함수 서버에 저장되어있는 데이터를 가져오고 랜더로 보낸다.


function postTodos(todosPost) {
 fetch('http://localhost:9000/todos', {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ id: generateId(), content: todosPost, completed: false })
 }).then(res => res.json())
   .then(render)
   .catch(console.log);
}
//포스트함수, todosPost라는 매개변수를 받아와서, 서버로 보내는데 그려주는 내용은 아이디 생성함수로 생성한것, 입력받은것, 컴플리트를
//서버로 보낸후, 결과를 랜더로 보낸다.

function todoDelete(id) {
 fetch(`http://localhost:9000/todos/${id}`, {
   method: 'DELETE'
 }).then(res => res.json())
   .then(render)
   .catch(console.log);
}
//딜리트함수 id를 입력받아 (id는 마우스클릭이벤트임) 바로 삭제, 그후 결과를 받아오고 랜더함수 호출, 에러발생시 콘솔출력


// function todoPut(box){
//   fetch(`http://localhost:9000/todos/`)
// }



window.onload = () => { getTodos(); };

function generateId() {
 return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}
//아이디생성함수 todos라는 변수의 길이를 읽어와 최대값을 구하고, 0이면 1로 초기화

$inputTodo.onkeyup = function (e) {
 const content = $inputTodo.value.trim();
 if (!content || e.keyCode !== 13) return;
 postTodos($inputTodo.value);
 $inputTodo.value = '';
};
//inputTodo라는에에 키보드가 들어오면
//들어온것 양쪽 빈공백 제거해서 content 지역상수에 담고(할당하고)
//그 content변수가 없거나, 엔터키가 아니면 이벤트를 종료하고
//그 입력값을 postTodos의 인수로 보낸다
//그후 초기화한다.

$todos.onchange = function (e) {
 const id = +e.target.parentNode.id;
//  console.log(e.target.checked)
 fetch(`http://localhost:9000/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: e.target.checked })
    }).then(res => res.json())
      // .then(res => console.log(res))
      .then(render)
      .catch(console.log);

//  todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
//  render();
};
//todos배열이 변화가 생기면
// 지역상수 id에 문자열로 그 이벤트발생한 타겟의 부모의 id를 넣고 (할당하고)
// todos에 맵조건에 해당하는 애들을 넣고
// 랜더함수 호출


$nav.onclick = function (e) {
 [...$nav.children].forEach((navItem) => {
   if (navItem.id === e.target) navItem.classList.add('active');
   navItem.classList.remove('active');
 });
 e.target.classList.add('active');
 navState = e.target.id;
//  render();
getTodos();
};

//nav가 클릭되면
//네브의 자식들을 배열로 풀어서 반복문을 돌리는데, 
//네브아이템의 아이디가 이타겟과 같으면 active를 추가하고
//navitem의 클래스 리스트에 active를 제거한다
//이벤트 발생한 타겟에 클래스에 actvie추가
// navState변수에 이벤트 발생한 아이디를 넣고
// 랜더



$todos.onclick = function (e) {
 if (!e.target.classList.contains('remove-todo')) return;
 todoDelete(e.target.parentNode.id);
};

// todos의 삭제버튼을 클릭하면, todoDelete함수에(눌린친구의 부모의 아이디를 인수로 보내준다)


$completeAll.onchange = function (e) {
if (e.target.checked) {
  fetch('http://localhost:9000/todos/', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: true })
  }).then(res => res.json())
    .then(render)
    .catch(console.log);
  }
  
  else {
  fetch('http://localhost:9000/todos/', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: false })
  }).then(res => res.json())
    .then(render)
    .catch(console.log);
}
};

//completeAll이변화되면
//그 타겟이 체크되어있으면, completed를 트루로 바꾸고
//아니면 completed가 false값인 애들을 맵핑해서 todos에 대입
//랜더함수 호출

$btn.onclick = function () {
//  todos = todos.filter(todo => todo.completed !== true);
 fetch('http://localhost:9000/todos/completed', {
  method: 'DELETE'
}).then(res => res.json())
  .then(render)
  .catch(console.log);
};
//btn이 클릭되면 todos를 필터링해서 todos에 대입한후
//랜더

