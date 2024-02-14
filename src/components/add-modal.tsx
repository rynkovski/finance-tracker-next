"use client";
import { Close } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Fab, IconButton, Modal } from "@mui/material";
import { ReactNode, useState } from "react";

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
  borderRadius: "10px",
};

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const closeButtonStyle = {
  position: "absolute",
  top: 24,
  right: 24,
};

function AddModal({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Fab
        sx={fabStyle}
        size="medium"
        color="primary"
        aria-label="add"
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton onClick={handleClose} sx={closeButtonStyle}>
            <Close />
          </IconButton>
          {children}
          <Button variant="contained">Add</Button>
        </Box>
      </Modal>
    </>
  );
}

export default AddModal;
