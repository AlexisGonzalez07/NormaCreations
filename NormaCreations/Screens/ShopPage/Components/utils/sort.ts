import { Product, SortValue, FilterValue, FilterValues, SortValues, StoreProducts, Filter, Sorter } from "../../types";
export const quickSortByKey = (
  arr: StoreProducts,
  key: string
): StoreProducts => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex][key];
  const left = [];
  const right = [];
  const equal = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] < pivot) {
      left.push(arr[i]);
    } else if (arr[i][key] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }
  return [
    ...quickSortByKey(left, key),
    ...equal,
    ...quickSortByKey(right, key),
  ];
};

export const performSort = (items: StoreProducts, sorter: SortValue) => 
  sorter.name == "Best Sellers"
    ? quickSortByKey(items, "sales").reverse()
    : quickSortByKey(items, "price");
  


export const getNewFilters = (arr: FilterValues, option: FilterValue) : FilterValues => 
  arr.map(element => 
    element.name == option.name 
    ? new Filter(element.name, true)
    : new Filter(element.name)
  )


export const getNewSorters = (arr: SortValues, option: SortValue) : SortValues => 
  arr.map(element => 
    element.name == option.name 
    ? new Sorter(element.name, !option.active)
    : new Sorter(element.name)
  )
