export const wait = (ms, data) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, ms);
  });

export const mockData = [
  {
    id: "1",
    name: "Luke Skywalker",
    dependents: [{ name: "Ervin Howell" }, { name: "Clementine Bauch" }],
  },
  {
    id: "2",
    name: "Kurtis Weissnat",
    dependents: [{ name: "Nicholas Runolfsdottir" }, { name: "Glenna Reichert" }],
  },
];
