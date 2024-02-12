"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const payers = ["krzysiem", "andrzej", "konrad", "maciej"];

export default function PayersList() {
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {payers.map((payer) => {
        return (
          <ListItem key={payer}>
            <ListItemButton>
              <ListItemText primary={`${payer}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
