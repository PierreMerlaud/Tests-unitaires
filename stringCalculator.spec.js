const { stringCalculator } = require("./stringCalculator");   

describe("Test stringCalculator", () => {
  test('chaîne vide', () => {
    expect(stringCalculator("")).toEqual(0)
  });

  test('un seul chiffre', () => {
    expect(stringCalculator(8)).toEqual(8)
  });

  test('deux chiffres à additionner', () => {
    expect(stringCalculator(0, 3)).toEqual(3)
  });

  test('nombre de chiffres multiples', () => {
    expect(stringCalculator(0, 3, 5, 8, 10, 15)).toEqual(41)
  });

  test('new lines between numbers', () => {
    expect(stringCalculator("2\n3,4")).toEqual(0)
  });
    
});