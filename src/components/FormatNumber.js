const numberFormater = (num) => {
  let value;
  if (Math.abs(num) > 999999999) {
    value = `${Math.sign(num) * ((Math.abs(num) / 1000000000).toFixed(2))}b`;
  } else if (Math.abs(num) > 999999) {
    value = `${Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(2))}m`;
  } else if (Math.abs(num) > 999) {
    value = `${Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2))}k`;
  } else {
    value = Math.sign(num) * Math.abs(num);
  }
  return value;
};

export default numberFormater;
