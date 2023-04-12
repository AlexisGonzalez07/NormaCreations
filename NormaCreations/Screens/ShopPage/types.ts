import { shoppingPage } from "../../assets/images";
import { ImageSourcePropType } from "react-native";
export type Product = {
  readonly id?: string;
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
    sales: 378

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

export type SortValue = {
  name: "Best Sellers" | "Price",
  active: boolean
}
 
export type SortValues = SortValue[]

export const sorters: SortValues = [
  {
    name: "Best Sellers",
    active: false
  },
  {
    name: "Price",
    active: false
  },

]
