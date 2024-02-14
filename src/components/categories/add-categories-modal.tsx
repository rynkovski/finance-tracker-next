import { TextField, Typography } from "@mui/material";

const categoryTypes = [{ name: "Income" }, { name: "Expense" }];

function AddCategoriesModal() {
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add category
      </Typography>
      <TextField
        id="outlined-basic"
        label="Enter category title"
        variant="outlined"
      />
      <TextField
        select
        SelectProps={{
          native: true,
        }}
        label="Select type"
      >
        {categoryTypes.map((categoryType) => (
          <option key={categoryType.name} value={categoryType.name}>
            {categoryType.name}
          </option>
        ))}
      </TextField>
    </>
  );
}

export default AddCategoriesModal;
