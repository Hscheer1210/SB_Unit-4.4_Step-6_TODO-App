
if(localStorage.getItem('name')) {
    console.log(localStorage.getItem('name'));
};

const doneButton = document.getElementsByClassName('CB');
const removeButton = document.getElementsByClassName('RB');
const form = document.querySelector('#additem');
const input = document.querySelector('#newitem');
const todolist = document.querySelector('#todo-list');

for (let btn of doneButton) {
    btn.addEventListener('click', function(e) {
        const addbutton = document.createElement('button');
        addbutton.innerText = 'Add Back';
        e.target.parentElement.append(addbutton);
        e.target.parentElement.classList.toggle('done');
        e.target.classList.toggle('hidden');
        addbutton.addEventListener('click', function(g) {
            g.target.parentElement.classList.toggle('done');
            e.target.classList.toggle('hidden');
            g.target.remove();
        });
    });
}

for (let btn of removeButton) {
    btn.addEventListener('click', function(h) {
        h.target.parentElement.remove();
    })
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    localStorage.setItem('name', true);
    console.log(localStorage.getItem('name'));
    const newitem = document.createElement('li');
    const newbutton = document.createElement('button');
    const newaddbutton = document.createElement('button');
    const newremovebutton = document.createElement('button');
    newremovebutton.innerText = 'Remove';
    newaddbutton.innerText = 'Add Back';
    newbutton.innerText = 'Complete';
    newbutton.addEventListener('click', function(e){
        e.target.parentElement.classList.toggle('done');
        e.target.classList.toggle('hidden');
        newitem.appendChild(newaddbutton);
        newaddbutton.addEventListener('click', function(g) {
            g.target.parentElement.classList.toggle('done');
            e.target.classList.toggle('hidden');
            g.target.remove();
        });
    });
    newremovebutton.addEventListener('click', function(j) {
        j.target.parentElement.remove();
    })
    newitem.innerText = input.value + ' ';
    newitem.appendChild(newbutton);
    newitem.appendChild(newremovebutton);
    input.value = '';
    todolist.appendChild(newitem);
});

