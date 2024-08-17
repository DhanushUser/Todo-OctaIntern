document.getElementById('add-btn').addEventListener('click', function() {
    addTask();
});

document.getElementById('todo-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    
    if (todoText !== "") {
        addTodo(todoText);
        todoInput.value = "";
    }
}

function addTodo(todoText) {
    const todoList = document.getElementById('todo-list');
    
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(todoItem);
    });
    
    todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
    });
    
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
}
