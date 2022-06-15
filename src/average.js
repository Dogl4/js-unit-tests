const average = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== "number") {
      return undefined;
    }
    sum += arr[i];
  }
  return Math.round(sum / arr.length);
};

module.exports = average;
