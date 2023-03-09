const { leapYears } = require("./leapYears"); 

describe("Test leapYears", () => {
    test("divisible par 400", () => {
        //given
        const essai = 400;
        //when
        const when = leapYears(essai)
        //then
        expect(when).toEqual(true)
  });

  test("divisible par 100 mais pas par 400", () => {
    //given
    const essai = 1700;
    //when
    const when = leapYears(essai)
    //then
    expect(when).toEqual(false)
});

test("divisible par 4 mais pas par 100", () => {
    //given
    const essai = 2800;
    //when
    const when = leapYears(essai)
    //then
    expect(when).toEqual(true)
});

test("non divisible par 4 ", () => {
    //given
    const essai = 2019;
    //when
    const when = leapYears(essai)
    //then
    expect(when).toEqual(false)
});
    })
