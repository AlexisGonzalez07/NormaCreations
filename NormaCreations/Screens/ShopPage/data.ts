import { shoppingPage } from "../../assets/images";
import { Image } from "react-native";
type product = {
  title: string;
  imageLink: Image;
  content: string;
  price: number;
};

type products = product[];

export const products = [
  {
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 155.99,
  },
  {
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 255.99,
  },{
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 355.99,
  },{
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 455.99,
  },{
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 555.99,
  },
  {
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 110.99,
  },
  {
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 120.99,
  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 130.99,
  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 140.99,
  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 150.99,
  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 160.99,
  },
];
