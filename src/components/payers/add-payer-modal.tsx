"use client";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Fab, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

function AddPayerModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Fab size="medium" color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add payer
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter payer's name"
            variant="outlined"
          />
          <Button variant="outlined">Add</Button>
        </Box>
      </Modal>
    </>
  );
}

export default AddPayerModal;
