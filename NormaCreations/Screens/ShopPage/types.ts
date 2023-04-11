import { shoppingPage } from "../../assets/images";
import { ImageSourcePropType } from "react-native";
export type Product = {
  readonly id?: string;
  readonly title: string;
  readonly imageLink: ImageSourcePropType;
  readonly content: string;
  readonly price: number;
  readonly category: "Shirts" | "Cups"
};
export type StoreProducts = Product[];
export const products: StoreProducts = [
  {
    id: "1",
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 155.99,
    category: "Cups"

  },
  {
    id: "2",
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 255.99,
    category: "Cups"

  },{
    id: "3",
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 355.99,
    category: "Cups"

  },{
    id: "4",
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 455.99,
    category: "Cups"

  },{
    id: "5",
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 555.99,
    category: "Cups"

  },
  {
    id: "6",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 110.99,
    category: "Shirts"

  },
  {
    id: "7",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 120.99,
    category: "Shirts"

  },{
    id: "8",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 130.99,
    category: "Shirts"

  },{
    id: "9",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 140.99,
    category: "Shirts"

  },{
    id: "10",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 150.99,
    category: "Shirts"

  },{
    id: "11",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 160.99,
    category: "Shirts"

  },
];

export type FilterValue = {
  name: "All" | "Cups" | "Shirts",
  active: boolean
}

export type FilterValues = FilterValue[]

export const filters: FilterValues = [{
  name: "All",
  active: true
},
{
  name: "Cups",
  active: false
},
{
  name: "Shirts",
  active: false
}
]
