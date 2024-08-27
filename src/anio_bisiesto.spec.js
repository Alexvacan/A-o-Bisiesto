import EsAnioBisiesto from "./anio_bisiesto";

describe("Bisiesto", () => {
  it("deberia verificar si el numero 2000 es bisiesto", () => {
    expect(EsAnioBisiesto(2000)).toEqual(true);
  });
  it("deberia verificar si el numero 1700 es bisiesto", () => {
    expect(EsAnioBisiesto(1700)).toEqual(false);
  });
  it("deberia verificar si el numero 1800 es bisiesto", () => {
    expect(EsAnioBisiesto(1800)).toEqual(false);
  });
  it("deberia verificar si el numero 1900 es bisiesto", () => {
    expect(EsAnioBisiesto(1900)).toEqual(false);
  });
  it("deberia verificar si el numero 2100 es bisiesto", () => {
    expect(EsAnioBisiesto(2100)).toEqual(false);
  });
});
