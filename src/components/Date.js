const today = new Date();
let month = today.getMonth();
let day = today.getDate();
if (month.toString().length < 2) {
  month = `0${month}`;
}
if (day.toString().length < 2) {
  day = `0${day}`;
}

const date = `${today.getFullYear()}-${month}-${day}`;

export default date;
