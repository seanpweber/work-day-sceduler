import moment from 'moment';
import $ from 'jquery';

var today = moment().format("MMM Do, YYYY");

document.getElementById("currentDay").innerText = today;

var currentTime;
var time;

var update = function () {
    time = moment(new Date())
    currentTime.html(time.format('h:mm:ss a'));
};

$(document).ready(function(){
    currentTime = $('#currentTime')
    update();
    setInterval(update, 1000);
});