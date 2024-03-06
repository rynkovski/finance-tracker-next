"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import EditCategoryModal from "./edit-category-modal";
import DeleteCategoryModal from "./delete-category-modal";

export default function CategoryMoreMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        sx={{ align: "right" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <EditCategoryModal />
        <DeleteCategoryModal />
      </Menu>
    </div>
  );
}
