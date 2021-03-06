    
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
const getDayName = (dateString)=> {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
     const dayName = dayNames[new Date(dateString).getDay()];
     return dayName;
 }


//hackerrank version
function getDayName(dateString) {
    // Pass the date String to the Date object constructor
    let date = new Date(dateString);
    
    // Get the day index for the date corresponding to 
    let index = date.getDay();
    
    // Create a variable to store the day name
    let dayName;
    
    switch (index) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
    }
    
    return dayName;
}

//hackerrank version
function getDayName(dateString) {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = new Date(dateString).getDay();
    
    return weekDays[day];
}