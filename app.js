//DAY/TIME
//Hours
function showTime() {
    var ampm;
    if (hours >= 12) {
        ampm = 'Pm';
    } else {
        ampm = 'Am';
    }
    if (hours > 12) {
        hours = hours - 12;
    } else if (hours === 0) {
        hours = 12;
    }
    var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var now = new Date();
    var day = now.getDay();
    var hours = now.getHours();
    //Minutes
    var minutes = now.getMinutes();
    //seconds
    var seconds = now.getSeconds()
    document.write(`<h1 class="time">Today is ${dayName[day]}` + '<br>' + '<br>');
    document.write(`Current Time is ${hours + ":" + minutes + ":" + seconds + " " + ampm}`)
}
showTime();
