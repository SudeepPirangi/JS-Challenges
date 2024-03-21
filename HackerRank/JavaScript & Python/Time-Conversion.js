/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

Return '12:01:00'.

Return '00:01:00'.
 */

function timeConversion(s) {
  // Write your code here
  const duration = s.substring(8);
  const time = s.substring(0, s.length - 2);

  const [hour, minute, second] = time.split(":");

  let timeString = "";
  if (duration === "PM" && hour !== "12") {
    timeString = `${+hour + 12}:${minute}:${second}`;
  } else if (duration === "AM" && hour === "12") {
    timeString = `00:${minute}:${second}`;
  } else {
    timeString = `${hour}:${minute}:${second}`;
  }
  return timeString;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:40:22AM"));
console.log(timeConversion("12:45:54PM"));
