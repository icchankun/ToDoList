// この度は、本コードを見ていただきありがとうございます。
// ゆっくりと見ていってください！

// 追加するのボタンを押すと発火する関数
const button = document.getElementById('add-button');
button.addEventListener('click', () => {

    const input = document.getElementById('new-todo');

    const li = document.createElement('li');
    li.innerText = input.value;

    const ul = document.querySelector('ul');
    ul.appendChild(li);

    const doneButton = document.createElement('button');
    doneButton.innerText = '終了';
    li.appendChild(doneButton);
    doneButton.classList.add('doneButton')

    doneButton.addEventListener('click', () => {
        const li = doneButton.closest('li');
        li.classList.add('done');
    });

    const p = document.querySelector('p');
    p.innerText = '終了のボタンを押すとタスクに打ち消し線を引きます。';

});
