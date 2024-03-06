import { Box, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";
import LetterAvatar from "./letter-avatar";
import { Logout, Settings } from "@mui/icons-material";

function UserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton color="inherit" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <LetterAvatar />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default UserMenu;
