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

var currentHour = moment("13", "H").format("H");

function currentTimeBox() {
    for (i = 9; i <= 17; i++)
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

// Make buttons work
//  -write input to localstorage



// Figure out local storage pairs
//  -