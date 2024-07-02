export const saveToLocalStorage = (employee) => {
  const storedRecent = localStorage.getItem("recent");

  const listOfEmployees = JSON.parse(storedRecent) || [];

  listOfEmployees.push(employee);

  localStorage.setItem("recent", JSON.stringify(listOfEmployees));
};

export const getRecentFromLocalStorage = () => {
  const storedRecent = localStorage.getItem("recent");

  return JSON.parse(storedRecent) || [];
};
