import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { colors } from "../../../Components/colors";
import ColumnContainer from "../../../Components/Containers/ColumnContainer";
import RowContainer from "../../../Components/Containers/RowContainer";
import LargeText from "../../../Components/Texts/LargeText";
import SmallText from "../../../Components/Texts/SmallText";
import CustomCheckBox from "../../../Components/Pressables/CheckBox";
import { Ionicons } from "@expo/vector-icons";
import {
  FilterValues,
  filters,
  FilterValue,
  SortValues,
  sorters,
  HeaderProps
} from "../types";
import {performSort, getNewFilters, getNewSorters } from "./utils/sort";

const ListHeader: FunctionComponent<HeaderProps> = (props) => {
  const [activeFilter, setActiveFilter] = useState<FilterValues>(filters);

  const [activeSort, setActiveSort] = useState<SortValues>(sorters);

  useEffect(() => {
    activeSort.forEach(value =>{
      if (value.active){
        props.setItems(performSort(props.items, value))
        return
      }
    })
  }, [activeSort,activeFilter]);

  const originalItems = useRef<HeaderProps["items"]>(props.items);

  const handleFilter = (filter: FilterValue) => {
    setActiveFilter(getNewFilters(filters,filter))
    if (filter.name === "All") {
      props.resetItems();
      return;
    }
    props.setItems(originalItems.current.filter((item) => item.category === filter.name));
  };

  return (
    <RowContainer
      style={{ backgroundColor: colors.pinkSecondary, borderRadius: 3, maxHeight: 150 }}
    >
      <RowContainer>
        <LargeText>Check out some of</LargeText>
      </RowContainer>
      <RowContainer>
        <LargeText>Norma's Creations</LargeText>
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
                    onPress={() => setActiveSort(getNewSorters(sorters,val))}
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
