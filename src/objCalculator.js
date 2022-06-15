const calculator = {
  add: (a, b) => a + b,
  mult: (a, b) => a * b,
  div: (a, b) => Math.floor(a / b), // Math.floor() Arredonda para baixo;
  sub: (a, b) => a - b,
};

// Refencias <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor>

module.exports = calculator;
