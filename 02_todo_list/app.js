addButton = document.getElementById('addButton');
input = document.getElementById('input');
items = document.getElementById('items');

// add task when Add button clicked
function addItem(){
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(input.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    //saveTaskToLocalStorage(input.value);
    input.value = '';
    renderTasks();
} 

// render tasks to localStorage
function renderTasks() {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  items.innerText='';
  tasks.forEach(task => {
    let item = document.createElement('li');
    item.classList.add('item');
    item.innerText = task;
    let deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.innerText = '❌';
    
    
    items.appendChild(item);
    item.appendChild(deleteButton);
  });
}

//strike through task when clicked
items.addEventListener('click', function(e){
    // Check if the clicked element is an <li>
    if (e.target && e.target.nodeName == 'LI') { 
        e.target.classList.toggle('checked');
    }
})

//delete if red cross clicked
items.addEventListener('click', function(e){
    // Check if the clicked element is an <li>
    if (e.target && e.target.classList.contains('delete')) { 
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(tasks.indexOf(e.target.parentElement.innerText), 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
})

renderTasks();