import AddModal from "@/components/add-modal";
import AddCategoriesModal from "@/components/categories/add-categories-modal";
import CategoriesList from "@/components/categories/categories-list";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import TrainIcon from "@mui/icons-material/Train";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import WorkIcon from "@mui/icons-material/Work";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";

const incomes = [
  {
    name: "Work",
    icon: <WorkIcon />,
    subCategories: [],
  },
  {
    name: "Other",
    icon: <ScatterPlotIcon />,
    subCategories: [],
  },
];
const expenses = [
  {
    name: "Transport",
    icon: <DirectionsBusIcon />,
    subCategories: [
      { icon: <TrainIcon />, name: "skm" },
      { icon: <LocalGasStationIcon />, name: "paliwo" },
    ],
  },
  {
    name: "House",
    icon: <HomeIcon />,
    subCategories: [
      { icon: <BatteryChargingFullIcon />, name: "prad" },
      { icon: <WaterDropIcon />, name: "woda" },
    ],
  },
  {
    name: "Food",
    icon: <RestaurantIcon />,
    subCategories: [
      { icon: <LocalGroceryStoreIcon />, name: "biedra" },
      { icon: <LocalGroceryStoreIcon />, name: "zabka" },
    ],
  },
];

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
        <Typography variant="h4" color="green">
          Incomes
        </Typography>
        <CategoriesList categories={incomes} />
        <Typography variant="h4" color="red">
          Expenses
        </Typography>
        <CategoriesList categories={expenses} />
      </Box>
    </Container>
  );
}

export default Categories;
