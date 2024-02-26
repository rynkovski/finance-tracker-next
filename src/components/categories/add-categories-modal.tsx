"use client";
import { Stack, TextField, Typography } from "@mui/material";
import { SetStateAction, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import TrainIcon from "@mui/icons-material/Train";

const categoryTypes = [{ name: "Income" }, { name: "Expense" }];

function AddCategoriesModal() {
  const [value, setValue] = useState("home");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add category
      </Typography>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Select icon:
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <Stack flexWrap={"wrap"} direction={"row"}>
            <FormControlLabel
              value="home"
              control={<Radio />}
              label={<HomeIcon />}
            />
          </Stack>
        </RadioGroup>
      </FormControl>
      <TextField
        id="outlined-basic"
        label="Enter category title"
        variant="outlined"
      />
      <TextField
        select
        SelectProps={{
          native: true,
        }}
        label="Select type"
      >
        {categoryTypes.map((categoryType) => (
          <option key={categoryType.name} value={categoryType.name}>
            {categoryType.name}
          </option>
        ))}
      </TextField>
    </>
  );
}

export default AddCategoriesModal;
