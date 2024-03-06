"use client";
import SubCategoryBox, { SubCategory } from "./subcategory-box";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Collapse,
  Icon,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CategoryMoreMenu from "./category-more-menu";

type Props = {
  name: string;
  icon: JSX.Element;
  subCategories: SubCategory[];
};

const categoryStyle = {
  my: 1,
  mx: "auto",
  p: 2,
  minW: "100%",
};

function CategoryBox({ name, icon, subCategories }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={categoryStyle} component={Paper}>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            {subCategories.length !== 0 ? (
              <>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </>
            ) : (
              <>
                <Box></Box>
              </>
            )}

            <Icon>{icon}</Icon>
            <Typography>{name}</Typography>
          </Stack>

          <CategoryMoreMenu />
        </Stack>
      </Box>
      {subCategories.length !== 0 ? (
        <>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {subCategories.map((subCategory) => {
              return (
                <SubCategoryBox
                  key={subCategory.name}
                  name={subCategory.name}
                  icon={subCategory.icon}
                />
              );
            })}
          </Collapse>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default CategoryBox;
