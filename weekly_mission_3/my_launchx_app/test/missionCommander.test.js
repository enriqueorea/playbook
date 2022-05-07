const MissionCommander = require("../app/missionCommander");

describe("Prueba para la clase MissionCommander", () => {
  test("Caso de prueba 1: crear una instancia de misssionCommander", () => {
    const newMissionCommander = new MissionCommander("enrique");
    expect(newMissionCommander.name).toBe("enrique");
  });
});
