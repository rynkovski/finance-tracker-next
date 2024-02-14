import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "PLN",
    label: "zł",
  },
];

const accounts = [
  {
    name: "krzysiem",
  },
  {
    name: "maciej",
  },
  {
    name: "andrzej",
  },
];

const accountsType = [
  {
    name: "Bank account",
  },
  {
    name: "Cash",
  },
  {
    name: "Savings",
  },
];

function AddAccountsModal() {
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add new account
      </Typography>
      <TextField
        id="outlined-basic"
        label="Enter account name"
        variant="outlined"
      />
      <Box>
        <FormControl sx={{ width: "75%" }}>
          <InputLabel htmlFor="outlined-amount">Amount</InputLabel>
          <OutlinedInput id="outlined-amount" type="number" label="Amount" />
        </FormControl>
        <TextField
          sx={{ width: "20%", ml: 2 }}
          id="outlined-select-currency-native"
          select
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Box>
      <TextField
        select
        SelectProps={{
          native: true,
        }}
        helperText="Please select type"
        label="Account type"
      >
        {accountsType.map((accountType) => (
          <option key={accountType.name} value={accountType.name}>
            {accountType.name}
          </option>
        ))}
      </TextField>
      <TextField
        select
        SelectProps={{
          native: true,
        }}
        helperText="Please select payer"
        label="Payer name"
      >
        {accounts.map((account) => (
          <option key={account.name} value={account.name}>
            {account.name}
          </option>
        ))}
      </TextField>
    </>
  );
}

export default AddAccountsModal;
