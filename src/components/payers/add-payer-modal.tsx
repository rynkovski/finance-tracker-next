import { TextField, Typography } from "@mui/material";

function AddPayerModal() {
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add payer
      </Typography>
      <TextField
        id="outlined-basic"
        label="Enter payer's name"
        variant="outlined"
      />
    </>
  );
}

export default AddPayerModal;
