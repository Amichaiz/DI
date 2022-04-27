const displayTask = () => {
    let tasks = JSON.parse(localStorage.getItem('Task'));
console.log(tasks);
    let strHTML = `<table>`
    let display = document.getElementsByClassName('wraper')[0];
    for (let i = 0; i < tasks.length; i++) {
        let currObj = tasks[i]
        strHTML += `<tr class="task task-${i}"> <td onclick="deleteTask(this,${i})">X</td>`
        for (const key in currObj) {
            let element = currObj[key];
            if (element === false) {
                element = 'unCompleted'
                strHTML += `<td>${element}</td>`
            } else {
                strHTML += `<td>${element}</td>`
            }

        }
        strHTML += `</tr>`;
    }
    strHTML += `</table>`
    display.innerHTML = strHTML;
}

const deleteTask = (e, i) => {
    console.log(i);
    e.parentElement.remove();
    for (let j = 0; j < tasks.length; j++) {
        localStorage.removeItem('Task')
        if (j === i) {
            tasks.splice(j, 1)
            localData.splice(j, 1)
            localStorage.setItem('Task', tasks)
            console.log(localData);

        }

    }
}
