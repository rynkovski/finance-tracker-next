"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  Box,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { MoreVert, Settings } from "@mui/icons-material";
import { Reorder } from "framer-motion";

const payers = ["krzysiem", "andrzej", "konrad", "maciej"];

const styledList = {
  listStyleType: "none",
  padding: 0,
};

const boxStyle = {
  my: 1,
  mx: "auto",
  p: 2,
  minW: "100%",
};
export default function PayersList() {
  const [newPayers, setNewPayers] = React.useState(payers);

  if (!payers) {
    return (
      <>
        <Typography>No payers. Add one!</Typography>
      </>
    );
  }

  return (
    <Container sx={{ padding: 0 }}>
      <Reorder.Group
        values={newPayers}
        onReorder={setNewPayers}
        as="ol"
        style={styledList}
      >
        {newPayers.map((payer) => (
          <Reorder.Item value={payer} key={payer}>
            <Box sx={boxStyle} component={Paper}>
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Typography>{payer}</Typography>
                <MoreVert />
              </Stack>
            </Box>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </Container>
  );
}
