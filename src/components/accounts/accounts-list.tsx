import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createRow(
  type: string,
  name: string,
  payer: string,
  amount: number,
  currency: string
) {
  return { type, name, payer, amount, currency };
}

const rows = [
  createRow("Bank account", "Krzysiem's ROR", "krzysiem", 10000, "eur"),
  createRow("Cash", "", "krzysiem", 350, "pln"),
  createRow("Savings", "oszczednosciowe", "krzysiem", 35000, "pln"),
];

export default function AccountsList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Payer Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.payer}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
