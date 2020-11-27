const { pokDeng } = require("./pok-deng");

describe("Pok Deng Test", () => {
  it("should win", () => {
    expect(pokDeng(10, 0)).toEqual("Win");
    expect(pokDeng(7, 6)).toEqual("Win");
  });

  it("should tie", () => {
    expect(pokDeng(5, 5)).toEqual("Tie");
    expect(pokDeng(0, 0)).toEqual("Tie");
  });

  it("should lose", () => {
    expect(pokDeng(5, 7)).toEqual("Lose");
    expect(pokDeng(2, 9)).toEqual("Lose");
  });
});
