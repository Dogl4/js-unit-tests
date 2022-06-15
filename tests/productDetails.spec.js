const assert = require("assert");
const productDetails = require("../src/productDetails");

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    const retorno = productDetails("Água", "Limão");
    assert.deepStrictEqual(Array.isArray(retorno), true);
    // Referencia <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray>
    assert.deepStrictEqual(retorno.length, 2);
    assert.deepStrictEqual(typeof retorno[0], "object");
    assert.deepStrictEqual(typeof retorno[1], "object");
    assert.ok(retorno[0] !== retorno[1], false);
    assert.ok(
      retorno[0].details.productId.slice(
        retorno[0].details.productId.length - 3
      ) === "123",
      true
    );
    assert.ok(
      retorno[1].details.productId.slice(
        retorno[1].details.productId.length - 3
      ) === "123",
      true
    );
  });
});
