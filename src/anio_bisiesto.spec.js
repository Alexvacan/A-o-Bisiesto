import EsAnioBisiesto from "./anio_bisiesto";

describe("Bisiesto", () => {
  it("deberia verificar si el numero 2000 es bisiesto", () => {
    expect(EsAnioBisiesto(2000)).toEqual(true);
  });
});
