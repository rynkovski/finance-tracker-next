import AddModal from "@/components/add-modal";

import AddTransactionsModal from "@/components/transactions/add-transactions-modal";

import TransactionsList from "@/components/transactions/transactions-list";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

function Transactions() {
  return (
    <Container fixed>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={4}
        flexDirection="column"
        gap={2}
        width={"100%"}
      >
        <TransactionsList />
        <AddModal children={<AddTransactionsModal />} />
      </Box>
    </Container>
  );
}

export default Transactions;
