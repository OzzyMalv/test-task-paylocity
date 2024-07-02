import { Box, Button, TextField, Typography } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import { wait } from "@/utils/employees";
import { useState } from "react";
import { calculateCostPerPaycheck } from "@/utils/costs";
import { saveToLocalStorage } from "@/utils/storage";

const initialValues = {
  name: "",
};

export default function EmployeeForm({ savedData, setData }) {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isValid },
  } = useForm({ values: initialValues });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "dependents",
  });

  const [totalCostPerPaycheck, setTotalCost] = useState(0.0);

  const onCalculate = async () => {
    const values = getValues();
    const { name, dependents } = values;
    const allDependentsNames = dependents.map(({ name }) => name);
    const result = calculateCostPerPaycheck(name, allDependentsNames);

    setTotalCost(result);
  };

  const onSubmit = async (formData) => {
    saveToLocalStorage(formData);
    setData([ ...savedData, formData ]);
    await wait(1000);
  };

  return (
    <form id="employee-form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Employee Name"
        size="small"
        fullWidth
        inputProps={{
          ...register("name", { required: true }),
        }}
      />
      <Typography variant="subtitle1" paddingY={1.5}>
        Dependents:
      </Typography>
      {fields.map((field, index) => (
        <Box key={field.id}>
          <TextField
            label="Dependent Name"
            size="small"
            fullWidth
            inputProps={{
              ...register(`dependents.${index}.name`, {
                required: true,
              }),
            }}
            sx={{ marginY: 1 }}
          />
          <Box display="flex" justifyContent="flex-end">
            <Button
              type="button"
              variant="outlined"
              color="error"
              onClick={() => remove(index)}
            >
              Remove
            </Button>
          </Box>
        </Box>
      ))}
      <Box paddingY={1.5}>
        <Button
          type="button"
          variant="outlined"
          onClick={() => append({ name: "" })}
        >
          Add Dependent
        </Button>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap={2}
        padding={2}
      >
        <Button
          type="button"
          variant="contained"
          disabled={!isValid}
          onClick={onCalculate}
        >
          Calculate
        </Button>
        <Box>
          <Typography variant="h5" component="h2" padding={1}>
            Total Cost Per Paycheck: ${totalCostPerPaycheck || 0.0}
          </Typography>
        </Box>
        {!!totalCostPerPaycheck && (
          <Button
            type="submit"
            variant="contained"
            color="success"
            disabled={isSubmitting}
            sx={{ alignSelf: "flex-end" }}
          >
            Save
          </Button>
        )}
      </Box>
    </form>
  );
}
