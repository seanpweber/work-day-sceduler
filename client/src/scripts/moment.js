import moment from 'moment';

var today = moment().format("MMM Do, YYYY");

document.getElementById("currentDay").innerHTML = today;