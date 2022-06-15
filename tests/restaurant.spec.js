const assert = require("assert");
const createMenu = require("../src/restaurant");

describe("10 - Implemente os casos de teste e a função `createMenu`", () => {
  it("Verifica se a função `createMenu` tem o comportamento esperado", () => {
    assert.strictEqual(typeof createMenu({}), "object");
    assert.strictEqual(typeof createMenu({}).fetchMenu, "function");

    assert.ok(createMenu({}).length !== 0 && createMenu({}).length !== 1);

    menu = { food: {}, drink: {} };
    const objetoRetornado = createMenu(menu);
    assert.deepStrictEqual(
      Object.keys(objetoRetornado.fetchMenu()).includes("food"),
      true
    );
    assert.deepStrictEqual(
      Object.keys(objetoRetornado.fetchMenu()).includes("drink"),
      true
    );

    assert.deepStrictEqual(objetoRetornado.fetchMenu(), {
      food: {},
      drink: {},
    });

    const objetoQualquer = {
      Comida: "Lasanha",
      Bebida: "Suco de limão",
    };
    assert.deepStrictEqual(
      createMenu(objetoQualquer).fetchMenu(),
      objetoQualquer
    );

    assert.deepStrictEqual(objetoRetornado.consumption, []);

    objetoRetornado.order("coxinha");
    assert.deepStrictEqual(objetoRetornado.consumption, ["coxinha"]);

    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");
    assert.deepStrictEqual(objetoRetornado.consumption, [
      "coxinha",
      "agua",
      "sopa",
      "sashimi",
    ]);

    objetoRetornado.consumption = [];
    objetoRetornado.order("coxinha");
    objetoRetornado.order("agua");
    objetoRetornado.order("coxinha");
    assert.deepStrictEqual(objetoRetornado.consumption, [
      "coxinha",
      "agua",
      "coxinha",
    ]);

    const novoMenu = {
      food: { coxinha: 3.9, sopa: 9.9, Lasanha: 20 },
      drink: { agua: 3.9, cerveja: 6.9 },
    };
    const objetoNovo = createMenu(novoMenu);
    objetoNovo.order("coxinha");
    objetoNovo.order("agua");
    objetoNovo.order("coxinha");
    assert.ok(objetoNovo.pay() == 12.87);
  });
});
