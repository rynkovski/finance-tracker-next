import AccountsList from "@/components/accounts/accounts-list";
import AddAccountsModal from "@/components/accounts/add-accounts-modal";
import AddModal from "@/components/add-modal";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

function Accounts() {
  return (
    <Container fixed>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={2}
        flexDirection="column"
        gap={2}
        width={"100%"}
      >
        <AddModal children={<AddAccountsModal />} />
        <AccountsList />
      </Box>
    </Container>
  );
}

export default Accounts;
