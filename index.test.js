const { pokDeng } = require("./index.js");

describe("Pok Deng Test", () => {
  test("should win", () => {
    expect(
      pokDeng(
        [
          { Suit: "hearts", Value: "8" },
          { Suit: "hearts", Value: "3" },
        ],
        [
          { Suit: "hearts", Value: "K" },
          { Suit: "clubs", Value: "7" },
        ]
      )
    ).toEqual("Win");
    expect(
      pokDeng(
        [
          { Suit: "spades", Value: "9" },
          { Suit: "diamonds", Value: "10" },
        ],
        [
          { Suit: "clubs", Value: "3" },
          { Suit: "spades", Value: "Q" },
        ]
      )
    ).toEqual("Win");
  });

  test("should tie", () => {
    expect(
      pokDeng(
        [
          { Suit: "spades", Value: "8" },
          { Suit: "diamonds", Value: "A" },
        ],
        [
          { Suit: "hearts", Value: "K" },
          { Suit: "spades", Value: "9" },
        ]
      )
    ).toEqual("Tie");
    expect(
      pokDeng(
        [
          { Suit: "diamonds", Value: "J" },
          { Suit: "spades", Value: "A" },
        ],
        [
          { Suit: "hearts", Value: "A" },
          { Suit: "diamonds", Value: "10" },
        ]
      )
    ).toEqual("Tie");
  });

  test("should lose", () => {
    expect(
      pokDeng(
        [
          { Suit: "clubs", Value: "J" },
          { Suit: "clubs", Value: "7" },
        ],
        [
          { Suit: "spades", Value: "7" },
          { Suit: "diamonds", Value: "9" },
        ]
      )
    ).toEqual("Lose");
    expect(
      pokDeng(
        [
          { Suit: "clubs", Value: "Q" },
          { Suit: "spades", Value: "10" },
        ],
        [
          { Suit: "diamonds", Value: "A" },
          { Suit: "hearts", Value: "10" },
        ]
      )
    ).toEqual("Lose");
  });
});
