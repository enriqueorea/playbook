const Spiderman = require("./../app/spiderman");

describe("Unit test for spiderman class", () => {
  test("1.- Create an instance of spiderman object", () => {
    const andrewGarfield = new Spiderman(
      "Spiderman Sony",
      31,
      "Andrew Garfield",
      2,
      "Sony"
    );
    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(2);
    expect(andrewGarfield.studio).toBe("Sony");
  });

  test("2.- Getting info through getInfo function", () => {
    const tomHolland = new Spiderman(
      "Spiderman Disney",
      25,
      "Tom Holland",
      5,
      "Marvel"
    );
    expect(tomHolland.getInfo()).toBe(
      "Hey, I'm Tom Holland from Marvel studios"
    );
  });
});
