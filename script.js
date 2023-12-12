// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.checkValidity() && taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onchange="completeTask(this)">
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Function to handle the "Enter" key 
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

// Function to mark item as completed
function completeTask(checkbox) {
    const taskItem = checkbox.parentElement;
    const completedList = document.getElementById('completedList');
    const taskList = document.getElementById('taskList');

    if (checkbox.checked) {
        taskItem.classList.add('completed');
        completedList.appendChild(taskItem);
    } else {
        taskItem.classList.remove('completed');
        taskList.appendChild(taskItem);
    }
}

// Function to remove an item
function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

// Event listeners
document.getElementById('addButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keydown', handleEnterKey);