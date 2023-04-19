import { shoppingPage } from "../../assets/images";
import { ImageSourcePropType } from "react-native";
import { SetStateAction } from "react";

export interface HeaderProps {
  items: StoreProducts;
  setItems: React.Dispatch<SetStateAction<StoreProducts>>;
  resetItems: () => void;
}
export type FilterValue = {
  name: "All" | "Cups" | "Shirts",
  active: boolean
}
export class Filter {
  constructor(public name: "All" | "Cups" | "Shirts", public active: boolean = false){}
}

export type FilterValues = FilterValue[]


export type SortValue = {
  name: "Best Sellers" | "Price",
  active: boolean
}

export class Sorter {
  constructor(public name: "Best Sellers" | "Price", public active: boolean = false){}
}

export type SortValues = SortValue[]

export type Product = {
  readonly id: string;
  readonly title: string;
  readonly imageLink: ImageSourcePropType;
  readonly content: string;
  readonly price: number;
  readonly category: "Shirts" | "Cups",
  sales?: number
};

export type StoreProducts = Product[];


export const products: StoreProducts = [
  {
    id: "1",
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 155.99,
    category: "Cups",
    sales: 3
  },
  {
    id: "2",
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 255.99,
    category: "Cups",
    sales: 9

  },{
    id: "3",
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 355.99,
    category: "Cups",
    sales: 78

  },{
    id: "4",
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 455.99,
    category: "Cups",
    sales: 33

  },{
    id: "5",
    title: "Cup",
    imageLink: shoppingPage.cup,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 555.99,
    category: "Cups",
    sales: 36

  },
  {
    id: "6",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 110.99,
    category: "Shirts",
    sales: 38

  },
  {
    id: "7",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 120.99,
    category: "Shirts",
    sales: 34

  },{
    id: "8",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "Check out this shirt",
    price: 130.99,
    category: "Shirts",
    sales: 36

  },{
    id: "9",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 140.99,
    category: "Shirts",
    sales: 30

  },{
    id: "10",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 150.99,
    category: "Shirts",
    sales: 387

  },{
    id: "11",
    title: "shirt",
    imageLink: shoppingPage.shirt,
    content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, veniam!",
    price: 160.99,
    category: "Shirts",
    sales: 3

  },
];

export const filters: FilterValues = [
  new Filter("All",true),
  new Filter("Cups"),
  new Filter("Shirts")
]

export const sorters: SortValues = [
 new Sorter("Best Sellers"),
 new Sorter("Price")
]
