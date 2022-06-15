function verifica(e) {
  let sum = 0;
  for (let iten of e.consumption) {
    if (Object.keys(e.fetchMenu().food).includes(`${iten}`)) {
      sum += e.fetchMenu().food[`${iten}`];
    }
    if (Object.keys(e.fetchMenu().drink).includes(`${iten}`)) {
      sum += e.fetchMenu().drink[`${iten}`];
    }
  }
  return sum;
}

const createMenu = (objetoMenu) => {
  const objeto = {
    fetchMenu: () => objetoMenu,
    consumption: [],
    order: (pedido) => objeto.consumption.push(pedido),
    pay: () => {
      const valor = verifica(objeto);
      if (valor !== 0) {
        return (valor * 1.1).toFixed(2);
        // Referencias <https://stackoverflow.com/questions/15762768/javascript-math-round-to-two-decimal-places> Arredonda 2 números p/ casa decimal.
      }
      return undefined;
    },
  };
  return objeto;
};

module.exports = createMenu;
