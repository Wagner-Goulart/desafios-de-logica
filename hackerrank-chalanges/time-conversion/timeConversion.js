const date = "00:00:03AM";

function timeConversion(string) {
  let hour = "";
  const modifier = string.substring(8, 10).toUpperCase();

  if (modifier === "AM") {
    if (string.substring(0, 2) === "12") {
      hour = "00";

      return hour + string.substring(2, 8);
    } else {
      return string.substring(0, 8);
    }
  }

  if (modifier === "PM") {
    if (string.substring(0, 2) === "12") {
      hour = "12";

      return hour + string.substring(2, 8);
    }

    hour = parseInt(string.substring(0, 2)) + 12;

    return hour + string.substring(2, 8);
  }
}

module.exports = timeConversion 
