"use client";
import { Container, Stack } from "@mui/material";
import CategoryBox from "./category-box";
import { Reorder, useDragControls } from "framer-motion";
import { useState } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

type SubCategory = {
  name: string;
  icon: JSX.Element;
};

type Props = {
  name: string;
  icon: JSX.Element;
  subCategories: SubCategory[];
};

const styledList = {
  listStyleType: "none",
};

function CategoriesList({ categories }: { categories: Props[] }) {
  const [newCategories, setNewCategories] = useState(categories);
  // const controls = useDragControls();
  return (
    <>
      <Container>
        <Reorder.Group
          values={newCategories}
          onReorder={setNewCategories}
          as="ol"
          style={styledList}
        >
          {newCategories.map((category) => (
            <Reorder.Item
              value={category}
              key={category.name}
              // dragListener={false}
              // dragControls={controls}
            >
              <CategoryBox
                key={category.name}
                name={category.name}
                icon={category.icon}
                subCategories={category.subCategories}
              />
              {/* <DragIndicatorIcon
                  onPointerDown={(event) => controls.start(event)}
                /> */}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Container>
    </>
  );
}

export default CategoriesList;
