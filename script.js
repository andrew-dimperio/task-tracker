let tasks = [] // array that holds object of tasks

// funcs

function handleSubmit(event) {
    event.preventDefault() 
    let taskName = document.getElementById("taskName").value
    let taskDescription = document.getElementById("taskDescription").value
    let taskDeadline = document.getElementById("taskDeadline").value

    if (taskName === '' || taskDeadline === '') {
        alert("Task name and deadline are required!")
        return
    }

    console.log(taskName, taskDescription, taskDeadline)

    const task = {
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline
    }
    tasks.push(task)
    updateTable()
    event.target.reset()
}

function updateTable() {
    taskTable.innerHTML = `
        <tr>
            <th>Task</th>
            <th class="desc">Task Description</th>
            <th>Task Deadline</th>
            <th>Completed</th>
        </tr>
        `;

        tasks.forEach(task => {
            const row = document.createElement('tr');
            if (task.completed) {
                row.classList.add('completed')
            }
            row.innerHTML = `
                <td>${task.name}</td> 
                <td>${task.description}</td>
                <td>${task.deadline}</td>
                <td><input type="checkbox" ${task.completed ? 'checked' : ''}></td>
            `;
            const checkbox = row.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', () => {
                task.completed = checkbox.checked;
                if (task.completed) {
                    row.classList.add('completed')
                } else {
                    row.classList.remove('completed')
                }
            });
            taskTable.appendChild(row);
        });
}


function init() {
    taskTable.innerHTML=''
    tasks = []
    updateTable()
}




// Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

taskForm.addEventListener('submit', handleSubmit)
init()