const { fizzBuzz } = require("./fizzBuzz");   

describe("Test FizzBuzz", () => {
  test("divisible par 3", () => {
    //given
    const essai = 9;
    //when
    const when = fizzBuzz(essai)
    //then
    expect(when).toEqual("Fizz")
  });

  test("divisible par 5", () => {
    //given
    const essai = 10;
    //when
    const when = fizzBuzz(essai)
    //then
    expect(when).toEqual("Buzz")
  })

  test("divisible par 3 et par 5", () => {
    //given
    const essai = 3000;
    //when
    const when = fizzBuzz(essai)
    //then
    expect(when).toEqual("FizzBuzz")
  })
});