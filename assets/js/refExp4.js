// const form = document.querySelector('form');

// form.addEventListener('submit', submitHandler);

// function submitHandler (e) {    
//     e.preventDefault();


// const [nameInput] = document.querySelectorAll('input');

//    if (/^[A-Z][a-z]{2,19}$/.test(nameInput.value)) {
//     nameInput.classList.add('valid');
//     nameInput.classList.remove('invalid');
// }
//     else {
//     nameInput.classList.remove('valid');
//     nameInput.classList.add('invalid');
// }
// }


///


// const [nameInput] = document.querySelectorAll('input');nameInput.addEventListener('input', inputNameHandler);

// function inputNameHandler (e) {    
//     if (/^[A-Z][a-z]{1,19}$/.test(e.target.value)) {
//     nameInput.classList.add('valid');
//     nameInput.classList.remove('invalid');
// }
//     else {
//     nameInput.classList.remove('valid');
//     nameInput.classList.add('invalid');
// }
// }

////////////////////////////////////////////////////


const todoForm = document.querySelector('.todoContainer > form');

const todoInput = document.querySelector('.todoContainer input');

const todoList = document.querySelector('ul.todoList');

const TODO_REG_EXP = /^\s*$/;

todoInput.oninput = e => {
    if (!TODO_REG_EXP.test(e.target.value)) {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid');
    }
    else {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
    }
};

todoForm.onsubmit = e => {
    e.preventDefault();

    if (!TODO_REG_EXP.test(e.target.elements['todo-item'].value)) {
        const todoListItem = createTodoItem(e.target.elements['todo-item'].value);
        todoList.append(todoListItem);
        e.target.elements['todo-item'].value = '';
        e.target.elements['todo-item'].classList.remove('valid');
    }
    else {
        e.target.elements['todo-item'].classList.add('invalid');
    }
};

function createTodoItem (value) {
    const todoListItem1 = document.createElement('li');

    const delBtn = document.createElement('button');
    delBtn.textContent = 'x';
    delBtn.onclick = (element) => {
        element.target.parentElement.remove();
    };

    const todoValue = document.createElement('span');
    todoValue.textContent = value;

    todoListItem1.append(delBtn, todoValue);

    return todoListItem1;
};