const today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate() - 1;
export const year = today.getFullYear();
if (month.toString().length < 2) {
  month = `0${month}`;
}
if (day.toString().length < 2) {
  day = `0${day}`;
}

export const date = `${year}-${month}-${day}`;
