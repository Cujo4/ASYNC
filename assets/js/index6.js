const left = document.querySelector('.left');
const form = document.querySelector('.form');
const form1 = document.querySelector('.form1');
const title = document.querySelector('[name="title"]');
const content = document.querySelector('[name="content"]');
const subBtn = document.querySelector('.subBtn');
const delBtn = document.querySelector('.delBtn');

////

const rightEl = document.createElement('div');
rightEl.classList.add('right');
document.body.append(rightEl);

delBtn.addEventListener('click', () => rightEl.innerHTML='');

const patternEl = /.{1,}/


form.addEventListener('submit', e => {
    e.preventDefault();
    
    if (!patternEl.test(title.value) || !patternEl.test(content.value)) {
    return;
    };

    const noteEl = document.createElement('div');
    noteEl.classList.add('notes');

    const titleFormEl = document.createElement('h2');
    titleFormEl.textContent = title.value;
    titleFormEl.classList.add('titleForm');

    const contentFormEl = document.createElement('p');
    contentFormEl.textContent = content.value;
    contentFormEl.classList.add('contentForm');

    const xBtnEl = document.createElement('p');
    xBtnEl.textContent = 'X';
    xBtnEl.classList.add('xBtn');
    xBtnEl.addEventListener('click', () => noteEl.remove());

    noteEl.append(titleFormEl, contentFormEl, xBtnEl);

    rightEl.append(noteEl);
    
    title.value = '';
    content.value = '';
});





