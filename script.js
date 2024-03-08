let tasks = [] // array that holds object of tasks

// funcs

function handleSubmit(event) {
    event.preventDefault() 
    let taskName = document.getElementById("taskName").value
    let taskDescription = document.getElementById("taskDescription").value
    let taskDeadline = document.getElementById("taskDeadline").value

    if (taskName === '' || taskDescription === '' || taskDeadline === '') {
        alert("PLEASE FILL IN ALL FIELDS!")
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
        </tr>
        `;

        tasks.forEach(task => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task.name}</td> 
                <td>${task.description}</td>
                <td>${task.deadline}</td>
            `;
            taskTable.appendChild(row);
        });
}





// Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

taskForm.addEventListener('submit', handleSubmit)