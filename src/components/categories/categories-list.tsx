import { Container } from "@mui/material";
import CategoryBox from "./category-box";

type SubCategory = {
  name: string;
  icon: JSX.Element;
};

type Props = {
  name: string;
  icon: JSX.Element;
  subCategories: SubCategory[];
};

function CategoriesList({ categories }: { categories: Props[] }) {
  return (
    <>
      <Container>
        {categories.map((category) => {
          return (
            <CategoryBox
              key={category.name}
              name={category.name}
              icon={category.icon}
              subCategories={category.subCategories}
            />
          );
        })}
      </Container>
    </>
  );
}

export default CategoriesList;
