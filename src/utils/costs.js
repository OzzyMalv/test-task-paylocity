const employee_cost_per_year = 1000;
const dependent_cost_per_year = 500;
const discount_for_name_percent = 0.1;
const paychecks_amount_per_year = 26;

export const calculateCostPerPaycheck = (employeeName, dependentNames) => {
  let totalCostPerYear = employee_cost_per_year;
  if (employeeName.startsWith("A")) {
    totalCostPerYear -= employee_cost_per_year * discount_for_name_percent;
  }
  dependentNames.forEach((dependentName) => {
    let cost = dependent_cost_per_year;
    if (dependentName.startsWith("A")) {
      cost -= dependent_cost_per_year * discount_for_name_percent;
    }
    totalCostPerYear += cost;
  });

  return (totalCostPerYear / paychecks_amount_per_year).toFixed(2);
};

// without dependents
export const calculateCostPerEmployee = (employeeName) => {
  let totalCostPerYear = employee_cost_per_year;
  if (employeeName.startsWith("A")) {
    totalCostPerYear -= employee_cost_per_year * discount_for_name_percent;
  }

  return (totalCostPerYear / paychecks_amount_per_year).toFixed(2);
};

// only dependent cost
export const calculateCostPerEmployeeDependents = (dependentName) => {
    let cost = dependent_cost_per_year;
    if (dependentName.startsWith("A")) {
      cost -= dependent_cost_per_year * discount_for_name_percent;
    }

  return (cost / paychecks_amount_per_year).toFixed(2);
};
