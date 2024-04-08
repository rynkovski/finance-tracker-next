import AddModal from "@/components/add-modal";
import AddPayerModal from "@/components/payers/add-payer-modal";
import PayersList from "@/components/payers/payers-list";
import { Box, Typography } from "@mui/material";
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
        <Typography variant="h4" fontWeight={700} letterSpacing={3}>
          Payers
        </Typography>
        <PayersList />
      </Box>
    </Container>
  );
}

export default Payers;
