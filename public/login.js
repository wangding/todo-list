/* exported $login */
let $login = (() => {
  let $dom = $(`
    <div id="mask">
      <div id="login">
        <label>user name: </label>
        <input type="text" id="username" value="408542507@qq.com">
        <br>
        <label>password: </label>
        <input type="password" id="password" value="123">
        <br>
        <label>&nbsp;</label>
        <input type="button" value="login">
      </div>
    </div>`);

  let $username = $dom.find('#username'),
      $password = $dom.find('#password'),
      $loginBtn = $dom.find('input[type="button"]');

  let show = () => {
    $username.focus();
    $('body').append($dom);

    $loginBtn.click(async() => {
      let username = $username.val(),
          password = $password.val();

      if(username === '' || password === '') return;

    fetch(location.origin + '/api/users/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `email=${username}&password=${password}`}).then(res => {
        res.text().then(txt => {
          let res = JSON.parse(txt);

          switch(res.code) {
            case 0:
              console.log(res);
              break;

            case 40201:  // user not exist
              console.log(res);
              break;

            case 40202:  // password error
              console.log(res);
              break;
          }
        })});
    });
  };

  return {
    show
  };
})();
