import { shoppingPage } from "../../assets/images";
import { ImageSourcePropType } from "react-native";
export type product = {
  id?: string;
  title: string;
  imageLink: ImageSourcePropType;
  content: string;
  price: number;
  category: "Shirts" | "Cups"
};

export type StoreProducts = product[];

export const products: StoreProducts = [
  {
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 155.99,
    category: "Cups"

  },
  {
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 255.99,
    category: "Cups"

  },{
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 355.99,
    category: "Cups"

  },{
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 455.99,
    category: "Cups"

  },{
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 555.99,
    category: "Cups"

  },
  {
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 110.99,
    category: "Shirts"

  },
  {
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 120.99,
    category: "Shirts"

  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 130.99,
    category: "Shirts"

  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 140.99,
    category: "Shirts"

  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 150.99,
    category: "Shirts"

  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 160.99,
    category: "Shirts"

  },
];
