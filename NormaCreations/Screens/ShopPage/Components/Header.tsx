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
  Filter,
  Sorter,
} from "../types";
import { quickSortByKey, performSort } from "./utils/sort";
import CustomCheckBox from "../../../Components/Pressables/CheckBox";

interface HeaderProps {
  items: StoreProducts;
  setItems: React.Dispatch<SetStateAction<StoreProducts>>;
  resetItems: () => void;
}

const ListHeader: FunctionComponent<HeaderProps> = (props) => {
  const [activeFilter, setActiveFilter] = useState<FilterValues>(filters);

  const [activeSort, setActiveSort] = useState<SortValues>(sorters);

  useEffect(() => {
    props.setItems(performSort(props.items,activeSort))
  }, [activeSort,activeFilter]);

  const originalItems = useRef<HeaderProps["items"]>(props.items);


  const updateFilterOrSorter = (option: FilterValue | SortValue) => {
    var arr;
    if (option instanceof Filter) {
      arr = filters;
    } else {
      arr = sorters;
    }
    var updatedArr = arr.map((element) => {
      if (element.name !== option.name) {
        if(element instanceof Filter){
          return new Filter(element.name)
        }
        return new Sorter(element.name)
      }
      if (element instanceof Filter) {
        return new Filter(element.name, true)
      } 
      return new Sorter(element.name, !option.active)
    });
    if(option instanceof Filter){
      setActiveFilter(updatedArr);
    } else{
      setActiveSort(updatedArr)
    }
  };

  const handleFilter = (filter: FilterValue) => {
    updateFilterOrSorter(filter);
    if (filter.name === "All") {
      props.resetItems();
      return;
    }
    props.setItems(originalItems.current.filter((item) => item.category === filter.name));
  };

  const handleSort = (sorter: SortValue) => updateFilterOrSorter(sorter);

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
