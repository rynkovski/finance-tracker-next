import { TextField, Typography } from "@mui/material";

function AddGoalsModal() {
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add goal
      </Typography>

      <TextField
        id="outlined-basic"
        label="Enter goal name"
        variant="outlined"
      />
    </>
  );
}

export default AddGoalsModal;
