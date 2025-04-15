export function getWeekDayNameByDate(date) {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let tempDate = new Date (date);
    return days[tempDate.getDay()];
}