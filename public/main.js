/* global fetch, location: true */
const q = document.querySelector,
      $ = q.bind(document);

let isLogin = localStorage.getItem('isLogin') || false;

if(isLogin) {
  $todoList.show();
} else {
  $login.show();
}
