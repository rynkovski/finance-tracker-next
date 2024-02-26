import { Box, Icon, IconButton, Paper, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export type SubCategory = {
  name: string;
  icon: JSX.Element;
};

const subCategoryStyle = {
  my: 1,
  ml: 6,
  mr: "auto",
  p: 2,
};

function SubCategoryBox({ name, icon }: SubCategory) {
  return (
    <>
      <Box sx={subCategoryStyle} component={Paper}>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Icon>{icon}</Icon>
            <Typography>{name}</Typography>
          </Stack>

          <IconButton sx={{ color: "#dd4d51" }}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
}

export default SubCategoryBox;
