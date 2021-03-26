// Get current date
//  - append to header
// 

function showActualTime() {
    $('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}

setInterval(showActualTime, 1000);

// make boxes color
//  - based on current time
//
function currentTimeBox() {
    if (moment().format("HH") > 0) {
    console.log('ok');
    
    return;
}};

setInterval(currentTimeBox(), 1000);
// Make buttons work
//  -write input to localstorage

// Figure out local storage pairs
//  -