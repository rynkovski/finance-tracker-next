import AddModal from "@/components/add-modal";
import AddPayerModal from "@/components/payers/add-payer-modal";
import PayersList from "@/components/payers/payers-list";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

function Payers() {
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
        <AddModal children={<AddPayerModal />} />

        <PayersList />
      </Box>
    </Container>
  );
}

export default Payers;
