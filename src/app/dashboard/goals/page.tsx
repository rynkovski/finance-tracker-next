import AddModal from "@/components/add-modal";
import AddGoalsModal from "@/components/goals/add-goals-modal";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

function Goals() {
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
        <AddModal children={<AddGoalsModal />} />
      </Box>
    </Container>
  );
}

export default Goals;
