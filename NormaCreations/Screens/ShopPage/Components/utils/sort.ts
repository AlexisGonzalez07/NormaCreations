import { Product, SortValues, StoreProducts } from "../../types";
export const quickSortByKey = (arr: StoreProducts, key: string): StoreProducts => {
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
    return [...quickSortByKey(left, key), ...equal, ...quickSortByKey(right, key)];
  };

export const performSort = (items: StoreProducts, sorters: SortValues) => {
  var sortedArr = items
  sorters.forEach((value) => {
    if (value.active) {
      if (value.name == "Best Sellers") {
        sortedArr = quickSortByKey(items, "sales").reverse();
      }
      if (value.name == "Price") {
        sortedArr = quickSortByKey(items, "price");
      }
    }
  });
  return sortedArr
}

