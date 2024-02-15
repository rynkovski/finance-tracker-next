"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Typography } from "@mui/material";
import { Settings } from "@mui/icons-material";

const payers = ["krzysiem", "andrzej", "konrad", "maciej"];
// const payers = [""];

export default function PayersList() {
  if (!payers) {
    return (
      <>
        <Typography>No payers. Add one!</Typography>
      </>
    );
  }

  return (
    <List dense sx={{ minWidth: "300px", bgcolor: "background.paper" }}>
      {payers.map((payer) => {
        return (
          <ListItem
            key={payer}
            secondaryAction={
              <IconButton edge="end">
                <Settings />
              </IconButton>
            }
          >
            <ListItemButton>
              <ListItemText primary={`${payer}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
