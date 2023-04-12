import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { SetStateAction } from "react";
import { GestureResponderEvent } from "react-native";
import { colors } from "../../../Components/colors";
import ColumnContainer from "../../../Components/Containers/ColumnContainer";
import RowContainer from "../../../Components/Containers/RowContainer";
import LargeText from "../../../Components/Texts/LargeText";
import SmallText from "../../../Components/Texts/SmallText";
import { Ionicons } from "@expo/vector-icons";
import {
  FilterValues,
  StoreProducts,
  filters,
  FilterValue,
  SortValue,
  SortValues,
  sorters,
} from "../types";
import CustomCheckBox from "../../../Components/Pressables/CheckBox";
import { isElementAccessExpression } from "typescript";
interface HeaderProps {
  items: StoreProducts;
  setItems: React.Dispatch<SetStateAction<StoreProducts>>;
  resetItems: () => void;
}

const ListHeader: FunctionComponent<HeaderProps> = (props) => {
  const [activeFilter, setActiveFilter] = useState<FilterValues>(filters);

  const [activeSort, setActiveSort] = useState<SortValues>(sorters);

  const originalItems = useRef<HeaderProps["items"]>(props.items);

  useEffect(() => {
    performSort();
  }, [activeSort]);

  const updateFilters = (filter: FilterValue) => {
    const targetFilters = filters.map((element) => {
      if (element.name !== filter.name) {
        return {
          name: element.name,
          active: false,
        };
      }
      return {
        name: element.name,
        active: true,
      };
    });
    setActiveFilter(targetFilters);
  };

  const handleFilter = (filter: FilterValue) => {
    updateFilters(filter);
    if (filter.name === "All") {
      props.resetItems();
      return;
    }
    props.setItems([
      ...originalItems.current.filter((item) => item.category === filter.name),
    ]);
  };

  const updateSorters = (sorter: SortValue) => {
    const targetSorters = sorters.map((element) => {
      if (element.name !== sorter.name) {
        return {
          name: element.name,
          active: false,
        };
      }
      return {
        name: sorter.name,
        active: !sorter.active,
      };
    });
    setActiveSort(targetSorters);
  };

  const quicksort = (arr, key) => {
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

    return [...quicksort(left, key), ...equal, ...quicksort(right, key)];
  };

  const handleSort = (sorter: SortValue) => {
    updateSorters(sorter);
  };

  const performSort = () => {
    activeSort.forEach((value) => {
      if (value.active) {
        if (value.name == "Best Sellers") {
          // var newItems = quicksort(props.items,"sales").reverse()
          // console.log(newItems)
          props.setItems(quicksort(props.items, "sales").reverse());
          return;
        }
        if (value.name == "Price") {
          props.setItems(quicksort(props.items, "price"));
          return;
        }
      }
    });
  };

  return (
    <RowContainer
      style={{ backgroundColor: colors.pinkSecondary, borderRadius: 3 }}
    >
      <RowContainer>
        <LargeText style={{ color: colors.green }}>Check out some of</LargeText>
      </RowContainer>
      <RowContainer>
        <LargeText style={{ color: colors.green }}>Norma's Creations</LargeText>
      </RowContainer>
      <RowContainer>
        <ColumnContainer style={{ width: "50%" }}>
          <RowContainer>
            <SmallText>Filter Items By...</SmallText>
          </RowContainer>
          <RowContainer>
            {activeFilter.map((val) => {
              return (
                <ColumnContainer key={val.name}>
                  <CustomCheckBox
                    onPress={() => handleFilter(val)}
                    content={val.name}
                    active={val.active}
                  >
                    <Ionicons
                      name={val.active ? "checkbox-outline" : "square-outline"}
                      size={24}
                    />
                  </CustomCheckBox>
                </ColumnContainer>
              );
            })}
          </RowContainer>
        </ColumnContainer>
        <ColumnContainer style={{ width: "50%" }}>
          <RowContainer>
            <SmallText>Sort Items By</SmallText>
          </RowContainer>
          <RowContainer style={{ flexWrap: "wrap" }}>
            {activeSort.map((val) => {
              return (
                <ColumnContainer key={val.name}>
                  <CustomCheckBox
                    onPress={() => handleSort(val)}
                    content={val.name}
                    active={val.active}
                  >
                    <Ionicons
                      name={val.active ? "checkbox-outline" : "square-outline"}
                      size={24}
                    />
                  </CustomCheckBox>
                </ColumnContainer>
              );
            })}
          </RowContainer>
        </ColumnContainer>
      </RowContainer>
    </RowContainer>
  );
};

export default ListHeader;
