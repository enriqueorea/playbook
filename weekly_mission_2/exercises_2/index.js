const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

//*Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
const exploresNames = explorers.forEach((explorer) =>
  console.log(explorer.name)
);

//*Imprime el stack de cada explorer, usa FOR EACH
const stackExplores = explorers.forEach((explorer) => {
  console.log(`El stack de ${explorer.name} es: ${explorer.stack}`);
});

//*Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const stackList = explorers.map((explorer) => {
  const list = {};
  list[explorer.name] = explorer.stack;
  return list;
});
console.log(stackList);

//*Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const isJs = explorers.filter((explorer) => explorer.stack.includes("js"));

console.log(isJs);

//*Busca el primer explorer que sea de la CDMX, usa FIND
const isCdMx = explorers.find((explorer) => explorer.city === "CDMX");
console.log(isCdMx);

//*Obtén la suma de todos los exercises_completed, usa REDUCE
const exercises_completed = explorers.reduce(
  (prev, current) => prev + current.exercises_completed,
  0
);

console.log(exercises_completed);

//*Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const isValid = explorers.some(
  (explorers) => explorers.missions.frontend.exercisesFinished === true
);

console.log(isValid);

//*Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const allvalid = explorers.every(
  (explorers) => explorers.missions.onboarding === true
);
console.log(allvalid);



const arr = [1,2,3,4,5,6,7,8,89,9,0,12,3,123,23,4345,6346,664,564]

console.log(arr.slice(0,10))