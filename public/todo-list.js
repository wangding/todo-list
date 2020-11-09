/* exported $todoList */
let $todoList = (() => {
  let $tasks = $(`
    <div id="todo-list">
      <input type="text" id="todo">
      <input type="button" id="btnAdd" value="add">
      <ul id="output">
        <!--<li>吃饭<i class="iconfont iconbianji"></i><i class="iconfont iconlajitong"></i></li>-->
        <!--<li>睡觉<i class="iconfont iconbianji"></i><i class="iconfont iconlajitong"></i></li>-->
      </ul>
    </div>`);

  let $todo      = $('#todo'),
      $btnAdd    = $('#btnAdd'),
      $out       = $('#output');

  let items = [];
  let baseURL = location.origin;

  //getItems();

  function onEdtClick(e) {
    let $li  = $(e.target.parentNode),
        src  = $li.text(),
        id   = items.indexOf(src),
        $DOM = $('<div><input class="todo-edit" type="text"><input class="btn-save" type="button" value="save"><div>'),
        $edt = $DOM.find('.todo-edit'),
        $sav = $DOM.find('.btn-save');

    $edt.val(src);
    $sav.click(() => {
      let dst = $edt.val();
      if(dst === '') return;

      $li.html('');
      $li.html(dst + '<i class="iconfont iconbianji"></i><i class="iconfont iconlajitong"></i></li>');

      $li.find('.iconlajitong').click(onDelClick);
      $li.find('.iconbianji').click(onEdtClick);

      fetch(baseURL + '/api/tasks/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:   `item=${dst}`});
      items[id] = dst;
    });

    $li.html('');
    $li.append($DOM);
    $edt[0].focus();
    $edt[0].select();
  }

  function onDelClick(e) {
    let id = items.indexOf(e.target.parentNode.textContent);

    fetch(baseURL + '/api/tasks/' + id, {method: 'DELETE'});
    items.splice(id, 1);

    showData();
  }

  $btnAdd.click(() => {
    if($todo.val() === '') return;

    fetch(baseURL + '/api/tasks/', {method: 'POST', body: `item=${$todo.val()}`});
    items.push($todo.val());

    $todo.val('');
    showData();
  });

  function getItems() {
    fetch(baseURL + '/api/tasks/').then(res => {
      res.text().then(txt => {
        items = JSON.parse(txt);
        showData();
      });
    });
  }

  function showData() {
    $out.html('');

    $out.html(items.map(item => '<li>' + item + '<i class="iconfont iconbianji"></i><i class="iconfont iconlajitong"></i></li>').join('\n'));
    $out.find('.iconlajitong').click(onDelClick);
    $out.find('.iconbianji').click(onEdtClick);
  }

  let show = () => {
    $('body').append($tasks);
  };

  return {
    show
  };
})();
