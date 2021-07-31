import moment from 'moment';
import $ from 'jquery';

var timeArray = [$('#time0').text(), $('#time1').text(), $('#time2').text(), $('#time3').text(), $('#time4').text(), $('#time5').text(), $('#time6').text(), $('#time7').text(), $('#time8').text()];
var now = moment().hour();

// Declare task field related variables
let taskFieldsEl;
let taskFieldsArray;

export function loadTasks() {
    taskFieldsEl = document.querySelectorAll(".task-input");
    // Failsafe for if the taskArray is undefined in localStorage
    if (localStorage.taskArray === undefined){
        taskFieldsArray = [];
    } else {
        taskFieldsArray = JSON.parse(localStorage.getItem("taskArray"));
        for (let i = 0; i < taskFieldsEl.length; i++){
            taskFieldsEl[i].value = taskFieldsArray[i]; 
        }
    }
};

export function saveTask (elem) {
    taskFieldsArray = [];
    taskFieldsEl = document.querySelectorAll(".task-input");
    for (let i = 0; i < taskFieldsEl.length; i++){
        taskFieldsArray.push(taskFieldsEl[i].value);
    }
    localStorage.setItem("taskArray", JSON.stringify(taskFieldsArray));
};

// Function to remove all task from the page
function clearAllTasks(){
    taskFieldsEl = document.querySelectorAll(".task-input");
    let deleteChoice = confirm("This will clear and delete ALL tasks saved currently! Proceed?");
    if (deleteChoice === false){
        return;
    } else {
        // Failsafe for if the taskArray is undefined in localStorage
        if (localStorage.taskArray === undefined){
            taskFieldsArray = [];    
        } else {
            taskFieldsArray = JSON.parse(localStorage.getItem("taskArray"));
            for (let i = 0; i < taskFieldsEl.length; i++){
                taskFieldsEl[i].value = "";
            }
        }
        saveTask();
        localStorage.clear();
    }
}

$(".clear-tasks").on("click", clearAllTasks);

