document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const deadlineInput = document.getElementById('deadlineInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        const taskPriority = prioritySelect.value;
        const taskDeadline = deadlineInput.value;

        if (taskText !== '') {
            addTask(taskText, taskPriority, taskDeadline);
            taskInput.value = '';
            prioritySelect.value = 'low';
            deadlineInput.value = '';
        }
    });

    function addTask(taskText, taskPriority, taskDeadline) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="btn btn-success btn-sm float-right mr-2">Concluir</button>
            <button class="btn btn-primary btn-sm float-right mr-2">Editar</button>
            <button class="btn btn-danger btn-sm float-right">Excluir</button>
            <span class="badge badge-info">${taskPriority}</span>
            <span class="badge badge-secondary">${taskDeadline}</span>
        `;
        taskList.appendChild(taskItem);

        const completeBtn = taskItem.querySelector('.btn-success');
        completeBtn.addEventListener('click', function() {
            taskItem.classList.add('list-group-item-success');
        });

        const editBtn = taskItem.querySelector('.btn-primary');
        editBtn.addEventListener('click', function() {
            const newText = prompt('Editar tarefa:', taskText);
            if (newText !== null) {
                taskItem.querySelector('span').textContent = newText;
            }
        });

        const deleteBtn = taskItem.querySelector('.btn-danger');
        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
        });
    }
});
