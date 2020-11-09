/* global fetch, location: true */
$(() => {
  let isLogin = localStorage.getItem('isLogin') || false;

  if(isLogin) {
    $todoList.show();
  } else {
    $login.show();
  }
});
