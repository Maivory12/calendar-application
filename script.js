var timeDisplay = document.getElementById(`timeDisplay`)



setInterval(function(){
    timeDisplay.textContent = moment().format("dddd:   h:mm:ss a");
}, 1000)


