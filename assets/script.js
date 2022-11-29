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

//Click event to save text from individual time block to local storage
$(".saveBtn").each(function (i, btn) {
    $(btn).on("click",function (){

        var task = $(this).siblings(".description").val();
        var key = $(this).parent().children(".description").attr("id");
        localStorage.setItem(key,task)

    })
    
});

//The values in local storage from each indivudual time block displayed
$(".saveBtn").each(function (i, btn) {
    var key = $(btn).parent().children(".description").attr("id");
    var value = localStorage.getItem(key);
    var textArea = $(this).siblings(".description");
    textArea.val(value);
});




