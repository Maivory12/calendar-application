var timeDisplay = document.getElementById(`timeDisplay`);
var timeBlocks = document.querySelectorAll(`.time-blocks`);
var currentTime = moment().hour()

setInterval(function(){
    timeDisplay.textContent = moment().format("dddd:  h:mm:ss a");

//Change color display of row based on time of day
$(timeBlocks).each(function(i, timeBlock) {
    var hour = $(timeBlock).children(".description").attr("id")
    console.log(hour)
    console.log(currentTime)
if (currentTime > hour){
    $(this).children(".description").addClass("past");

} else if (currentTime == hour) {

    $(this).children(".description").removeClass("past");
    $(this).children(".description").addClass("present");

} else {

    $(this).children(".description").removeClass("past");
    $(this).children(".description").removeClass("present");
    $(this).children(".description").addClass("future");
    
}

});


}, 1000);


