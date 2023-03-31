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
    content: "Check out this cup",
    price: 55.99,
  },
  {
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "Check out this cup",
    price: 55.99,
  },{
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "Check out this cup",
    price: 55.99,
  },{
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "Check out this cup",
    price: 55.99,
  },{
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "Check out this cup",
    price: 55.99,
  },
  {
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 10.99,
  },
  {
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 10.99,
  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 10.99,
  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 10.99,
  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 10.99,
  },{
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 10.99,
  },
];
