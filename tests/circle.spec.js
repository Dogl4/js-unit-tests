const assert = require("assert");
const circle = require("../src/circle");

describe("4 - Implemente os casos de teste para a função `circle`", () => {
  it("Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados", () => {
    assert.deepStrictEqual(typeof circle(180), "object");
    assert.deepStrictEqual(Object.keys(circle(180)).length, 3);
    assert.strictEqual(circle(), undefined);
    assert.deepStrictEqual(Object.values(circle(2))[0], 2); // usei o console do navegador para achar o resultado esperado.
    assert.deepStrictEqual(Math.round(Object.values(circle(3))[1]), 28); // usei o console do navegador para achar o resultado esperado.
    const arredondaArry = (arr) => {
      let arr2 = [];
      for (let i of arr) {
        arr2.push(Math.round(i));
      }
      return arr2;
    };
    assert.deepStrictEqual(
      arredondaArry(Object.values(circle(3))),
      [3, 28, 19]
    );
  });
});
