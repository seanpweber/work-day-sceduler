import moment from 'moment';
import $ from 'jquery';
import { loadTasks, saveTask } from './task';

// Declare variable for the current hour as a number
let currentHour = moment().hours();
let hourBlockBodyEl = $("#hour-block");

// Function for building the time blocks
function buildTimeBlocks(hour){
    // Create and append row for time block
    let timeRowEl = $("<tr></tr>")
        .attr("data-value", hour)
        .addClass(`d-flex time-row ${hour}`);
    hourBlockBodyEl.append(timeRowEl);
    // Create and append hour column
    let hourColumnEl = $("<td></td>")
        .attr("scope", "col")
        .addClass("d-flex col-2 col-lg-1 justify-content-center align-items-center")
        .text(moment(`${hour}`, "h").format("hA"));
    timeRowEl.append(hourColumnEl);
    // Create and append task column
    let taskColumnEl = $("<td></td>")
        .attr("scope", "col")
        .addClass("col-8 col-lg-10");
    let taskText = $("<textarea></textarea>")
        .attr("type", "text")
        .attr({
            "data-toggle":"tooltip",
            "data-placement": "top",
            "title": "Enter tasks here"
        })
        .addClass("d-flex form-control col-12 task-input");
    taskColumnEl.append(taskText);
    timeRowEl.append(taskColumnEl);
    // Create and append save column
    let saveColumnEl = $("<td></td>")
        .attr("scope", "col")
        .addClass("d-flex col-2 col-lg-1 justify-content-center align-items-center");
    let saveButtonEl = $("<button></button>")
        .attr("type", "button")
        .addClass("btn far fa-save fa-lg saveBtn")
        .on("click", saveTask);
    saveColumnEl.append(saveButtonEl); 
    timeRowEl.append(saveColumnEl);
}

// Function for highlighting the colors of the row
function highlightEvents(rowNum){
    let tableTimes = $(`.${rowNum}`);
    if (currentHour === rowNum){
        tableTimes.addClass("present");
    }
    if (currentHour > rowNum){
        tableTimes.addClass("past");
    }
    if (currentHour < rowNum){
        tableTimes.addClass("future");
    }
}

// Function to build out the timeblocks, highlight them and associated event text
window.onload = function initPage(){
    // Declare a variable for which hour to start the schedule building on
    let i = 9;
    // While loop that populates the page with the hour rows
    while (i < 18){
        buildTimeBlocks(i);
        highlightEvents(i);
        i++;
    }
    loadTasks();
}