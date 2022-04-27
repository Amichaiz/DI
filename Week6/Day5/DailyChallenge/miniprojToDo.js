


// Part I - The List:
// In the HTML file, create a form to add a new task. The form should contain a few inputs:

// Name
// Description
// Start date and time - check the documentation
// End date and time - check the documentation
// A submit button


// Example

//     Name : "Buy food for my party"

//     Description : "All my friends are invited, 
//                    everything needs to be perfect"

//     Start date and time : "03/08/2021 14:00:00"

//     End date and time : "05/08/2021 21:00:00"

//     Done : False
const form = document.forms[0];
const tasks = JSON.parse(localStorage.getItem('Task')) || [];
const addTask = (e) => {
    e.preventDefault();

    let name = form[0].value;
    let description = form[1].value;
    let startTime = form[2].value;
    let endTime = form[3].value;
    let objForm = {
        name: name,
        description: description,
        startTime: startTime,
        endTime: endTime,
        isComplete: false
    };
    tasks.push(objForm);
    localStorage.setItem('Task', JSON.stringify(tasks));
    console.log(tasks);
    // displayTask(tasks);
}
form.addEventListener('submit', addTask)

// const displayTask = (array) => {

//     let strHTML = `<table>`
//     let display = document.getElementsByClassName('display')[0];
//     let p = document.createElement('p')
//     let str = ''
//     for (let i = 0; i < array.length; i++) {
//         let currObj = array[i]
//         strHTML += `<tr class="task task-${i}"> <td onclick="deleteTask(this,${i})">X</td>`
//         for (const key in currObj) {
//             let element = currObj[key];
//             if (element === false) {
//                 element = 'unCompleted'
//                 str += element;
//                 strHTML += `<td>${element}</td>`
//             } else {
//                 str += element;
//                 strHTML += `<td>${element}</td>`
//             }

//             p.textContent = str;
//             display.appendChild(p);
//         }
//         // display.removeChild(p);
//         // p.parentElement.remove();
//         // str += element;
//         strHTML += `</tr>`;
//     }
//     strHTML += `</table>`
//     display.innerHTML = strHTML;
// }
// let body = document.body
// console.log(body)

// const deleteTask = (e, i) => {
//     // let taskToDelete = document.
//     console.log(i);
//     // let localData = JSON.parse(localStorage.getItem('Task'));
//     // console.log(localData);
//     e.parentElement.remove();
//     for (let j = 0; j < tasks.length; j++) {
//         localStorage.removeItem('Task')
//         if (j === i) {
//             tasks.splice(j, 1)
//             localData.splice(j, 1)
//             localStorage.setItem('Task', tasks)
//             console.log(localData);

//         }

//     }
// }

// As soon as the user submits the form, the task should be saved.
// By default, the status of the task is “uncompleted” (ie. isCompleted: false)
// IMPORTANT : The todo list items should be stored in your localStorage - You should use an array of objects - each object contains a task


// As soon as the user submits the form, the new task will be displayed in another HTML page. Every task should be displayed in the following way:

// Name
// Starting date
// How many days left to complete the task.
// Note:
// Example: if a task was set yesterday and the end date is in 5 days, then there are 4 days remaining to complete the task.
// Example: if a task was set to start tommorow and the end date is in 5 days then there are 6 days remaining to complete the task.

// Part II - Improve The Tasks Displayed :
// Make each task clickable. When clicking on a task you should display the description: you could use some kind of drop down, for example.

// Add a checkbox next to each task. You can check the checkbox to update the status of the task (ie. from uncompleted to completed).

// Requirements:
// The list of tasks should be added to the page in ascending order, according to their start date.
// Display the completed tasks in a different color. For example : red for uncompleted, green for completed.
// If the task end date has passed, without the task being completed, display the task in a different color.


// Part III - More Functionalities :
// Add an “X” button next to each task. The user will be able to delete the task. Make sure to show a confirmation popup/modal to the user, to avoid deleting a task by mistake.

// Add an “Edit” button next to each task. The user can edit a task and save the changes. Another possibility is to double click on the task to edit the details.


// BONUS : Part IV - The Weekly Graph
// In the same page, or in another one, show a graph of the current week’s tasks.

// to do list

