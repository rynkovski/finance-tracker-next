import AddModal from "@/components/add-modal";
import AddCategoriesModal from "@/components/categories/add-categories-modal";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

function Categories() {
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
        <AddModal children={<AddCategoriesModal />} />
      </Box>
    </Container>
  );
}

export default Categories;
