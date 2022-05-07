const User = require("../../app/model/user.model");

describe("Unit test for User Model", () => {
  const enriqueUser = new User(1, "enriqueOrea", "Enrique", "Bio");
  test("should create an instance of User", () => {
    expect(enriqueUser.id).toBe(1);
    expect(enriqueUser.name).toBe("Enrique");
    expect(enriqueUser.userName).toBe("enriqueOrea");
  });

  test("should dates not be undefined", () => {
    expect(enriqueUser.dateCreated).not.toBeUndefined();
    expect(enriqueUser.lasUpdated).not.toBeUndefined();
  });

  test("should use getter properly", () => {
    expect(enriqueUser.getUsername()).toBe("enriqueOrea");
    expect(enriqueUser.getBio()).toBe("Bio");
    expect(enriqueUser.getDateCreated()).not.toBeUndefined();
    expect(enriqueUser.getLastUpdated()).not.toBeUndefined();
  });

  test("should use setters properly", () => {
    const newUser = new User(2, "luisOrea", "Luis", "Bio 2");

    newUser.setNewUserName("galleta");
    expect(newUser.userName).toBe("galleta");

    newUser.setNewBio("New Bio");
    expect(newUser.bio).toBe("New Bio");
  });
});
