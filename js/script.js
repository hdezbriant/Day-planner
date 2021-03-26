// Get current date
//  - append to header
// 

function showActualTime() {
    $('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}

showActualTime();
setInterval(showActualTime, 1000);

// make boxes color
//  - based on current time
// past, present, future classes for colors

var currentHour = moment().format("H");

function currentTimeBox() {
    for (i = 9; i <= 17; i += 1)
        if (currentHour > i) {
            // console.log('ok');
            $("#hour-" + i).addClass("past");
        }
        else if (currentHour == i) {
            $("#hour-" + i).addClass("present");
        }
        else if (currentHour < i) {
            $("#hour-" + i).addClass("future");
        }
    return;
    };

setInterval(currentTimeBox(), 1000);



var saveButton = $(".saveBtn");

saveButton.on("click", function(event) {
    var plannerText = ($(this)).siblings(".description").val();
    var savedTextKey = ($(this)).parent("div").attr("id");
    localStorage.setItem(savedTextKey, plannerText);
});

function showSavedText() {
    for (var i = 9; i <= 17; i += 1) {
        var savedText = window.localStorage.getItem("hour-" + [i]);
        $("#hour-" + [i] + " > textarea").val(savedText);
    }
}

showSavedText();