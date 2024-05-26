"use client";
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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SetStateAction, useState } from "react";

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

function CustomTabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      width={"100%"}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Categories() {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };
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
        <AddModal children={<AddCategoriesModal />} />
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Income" />
          <Tab label="Expense" />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <CategoriesList categories={incomes} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CategoriesList categories={expenses} />
        </CustomTabPanel>
      </Box>
    </Container>
  );
}

export default Categories;
