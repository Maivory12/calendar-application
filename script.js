var timeDisplay = document.getElementById(`timeDisplay`);
var timeBlocks = document.querySelectorAll(`.time-blocks`);
var currentTime = moment().hour()

setInterval(function(){
    timeDisplay.textContent = moment().format("dddd:  h:mm:ss a");
}, 1000);



