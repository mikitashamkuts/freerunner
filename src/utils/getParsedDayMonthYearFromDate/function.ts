import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

function getParsedDayMonthYearFromDate(date: Date): string {
  if (date instanceof Date) {
    // Get day, month, and year from the date
    let day = date.getUTCDate().toString(); // Get day as a string
    const month = date.toLocaleString('en-US', {month: 'short', timeZone: 'UTC'}); // Get short month name
    const year = date.getUTCFullYear(); // Get the year

    // Remove leading zero from day if present
    if (day.startsWith('0')) {
      day = day.slice(1);
    }

    // Return formatted string
    return `${day} ${month.toLocaleLowerCase()} ${year}`;
  } else {
    return '';
  }
}

export default getFunctionTryCatchWrapped(getParsedDayMonthYearFromDate);
