import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import {
  calculateCostPerEmployee,
  calculateCostPerEmployeeDependents,
  calculateCostPerPaycheck,
} from "@/utils/costs";

export default function EmployeeTable({ data, isLoading }) {
  const rows = (data || []).map((employee) => {
    const costEmployeeOnly = calculateCostPerEmployee(employee.name);
    const employeeDependentsWithCost = employee.dependents.map(({ name }) => ({
      name,
      cost: calculateCostPerEmployeeDependents(name),
    }));

    const allDependentsNames = employee.dependents.map(({ name }) => name);
    const fullCostPerEmployee = calculateCostPerPaycheck(
      employee.name,
      allDependentsNames,
    );

    return {
      name: employee.name,
      cost: costEmployeeOnly,
      subtotal: fullCostPerEmployee,
      dependents: employeeDependentsWithCost,
    };
  });

  const totalForAllEmployees = rows
    .reduce((total, row) => {
      total = total + parseFloat(row.subtotal);
      return total;
    }, 0)
    .toFixed(2);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 700 }}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              People
            </TableCell>
            <TableCell align="right">Cost per paycheck</TableCell>
          </TableRow>
          {isLoading && (
            <TableRow>
              <TableCell colSpan={4} padding="none">
                <LinearProgress />
              </TableCell>
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <React.Fragment key={`${row.name}${index}`}>
              <TableRow>
                <TableCell>{row.name}</TableCell>
                <TableCell colSpan={2} />
                <TableCell align="right">{row.cost}</TableCell>
              </TableRow>
              {row.dependents.map((dependant) => (
                <TableRow key={dependant.name}>
                  <TableCell align="right">{dependant.name}</TableCell>
                  <TableCell colSpan={2} />
                  <TableCell align="right">{dependant.cost}</TableCell>
                </TableRow>
              ))}
              <TableRow key={row.name}>
                <TableCell colSpan={2} />
                <TableCell align="right">Subtotal:</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  {row.subtotal}
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
          <TableRow sx={{ backgroundColor: "#2e8b6045" }}>
            <TableCell colSpan={2} />
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Total:
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              {totalForAllEmployees}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
