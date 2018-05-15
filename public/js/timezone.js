// start hour in teacher user's time zone (i.e 0,1,2...,22,23 )
startHour1 = 17;

// day of week in teacher user's time zone (i.e 0,1,2,...6 )
// 0 represents Sunday, 1 represents Monday and 6 represents Saturday
dayOfWeek1 = 1;

// teacher's GMT offset (i.e. -12,-11,....,11,12)
offset1 = 1;

// school's GMT offset (i.e. -12,-11,....,11,12)
offset2 = 10;

// following function takes start hour and day of week in teacher user's time zone
// as long as teacher's GMT offset and school's GMT offset as arguments
// and convert teacher's start hour and day of week into start hour and day of week
// in school user's time zone through the difference in the GMT offset
function convertTime (startHour1, dayOfWeek1, offset1, offset2) {
    // calculate start hour and day of week using the difference of two GMT offsets
    startHour2 = startHour1 + (offset2 - offset1);
    dayOfWeek2 = dayOfWeek1;

    // convert to next Day
    if (startHour2 > 24) {
        dayOfWeek2 = (dayOfWeek1 + 1) % 7;
        startHour2 = startHour2 % 24;
    }

    // convert to previous day
    else if (startHour2 < 0) {
        dayOfWeek2 = (dayOfWeek1 - 1) + 7 % 7;
        startHour2 = startHour2 + 24;
    }

    // return teacher's start hour and day of week for the school user's timezone
    return [startHour2, dayOfWeek2];

}

console.log(convertTime(13,6,-10,10));

//function calcTime(country, offset) {

    // create Date object for current location
   // d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    //utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city using supplied offset
    //nd = new Date(utc + (3600000*offset));

    // return time as a string
    //return "The local time in " + country + " is " + nd.toLocaleString();







// create Date object for current location
//d = new Date();

// convert to msec since Jan 1 1970
//localTime = d.getTime();

// obtain local UTC offset and convert to msec
//localOffset = d.getTimezoneOffset() * 60000;


// obtain UTC time in msec
//utc = localTime + localOffset;


// obtain and add destinations UTC time offset
// for example, Bombay
// which is UTC + 5.5 hours
//offset = 5.5;

//bombay = utc + (3600000*offset);

// convert msec value to date string
//nd = new Date(bombay);

//document.writeln("Bombay time is " + nd.toLocaleString() + "<br>");
