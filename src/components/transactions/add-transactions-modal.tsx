import { TextField, Typography } from "@mui/material";

function AddTransactionsModal() {
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add transaction
      </Typography>

      <TextField
        id="outlined-basic"
        label="Enter transaction title"
        variant="outlined"
      />
    </>
  );
}

export default AddTransactionsModal;
