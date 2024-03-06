"use client";
import { Container } from "@mui/material";
import CategoryBox from "./category-box";
import { Reorder } from "framer-motion";
import { useState } from "react";

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
  padding: 0,
};

function CategoriesList({ categories }: { categories: Props[] }) {
  const [newCategories, setNewCategories] = useState(categories);
  // const controls = useDragControls();
  return (
    <>
      <Container sx={{ padding: 0 }}>
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
