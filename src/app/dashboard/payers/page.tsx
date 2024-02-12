import AddPayerModal from "@/components/payers/add-payer-modal";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

function Payers() {
  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <AddPayerModal />
      </Box>
    </Container>
  );
}

export default Payers;
