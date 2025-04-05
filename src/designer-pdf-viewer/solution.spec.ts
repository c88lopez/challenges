import { DesignerPDFViewer } from "./solution";

describe("Designer PDF Viewer", () => {
  it.each([
    {
      h: [
        1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5,
      ],
      word: "abc",
      expected: 9,
    },
    {
      h: [
        1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 7,
      ],
      word: "zaba",
      expected: 28,
    },
  ])("should return correct highlight area", ({ h, word, expected }) => {
    const result = DesignerPDFViewer(h, word);

    expect(result).toEqual(expected);
  });
});
