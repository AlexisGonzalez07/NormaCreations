import React, { FunctionComponent, useRef, useState } from "react";
import { SetStateAction } from "react";
import { GestureResponderEvent } from "react-native";
import { colors } from "../../../Components/colors";
import ColumnContainer from "../../../Components/Containers/ColumnContainer";
import RowContainer from "../../../Components/Containers/RowContainer";
import LargeText from "../../../Components/Texts/LargeText";
import SmallText from "../../../Components/Texts/SmallText";
import { Ionicons } from "@expo/vector-icons";
import { FilterValues, StoreProducts, filters, FilterValue } from "../types";
import CustomCheckBox from "../../../Components/Pressables/CheckBox";
import { isElementAccessExpression } from "typescript";
interface HeaderProps {
  items: StoreProducts;
  setItems: React.Dispatch<SetStateAction<StoreProducts>>;
  resetItems: () => void;
}

const ListHeader: FunctionComponent<HeaderProps> = (props) => {
  const [activeFilter, setActiveFilter] = useState<FilterValues>(filters);

  const originalItems = useRef<HeaderProps["items"]>(props.items);

  console.log(activeFilter);

  const updateFilters = (filter: FilterValue) => {
    console.log(filter);
    const targetFilters = filters.map((element) => {console.log("visiting this element");
      console.log(element);
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
    console.log(targetFilters)
    setActiveFilter(targetFilters)
  };

  const handleFilter = (filter: FilterValue) => {
    console.log("pressed");
    props.resetItems();
    updateFilters(filter);
    if (filter.name === "All") return;
    props.setItems([
      ...originalItems.current.filter((item) => item.category === filter.name),
    ]);
  };
  return (
    <RowContainer style={{ backgroundColor: colors.pinkSecondary }}>
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
            {filters.map((filter) => {
              return (
                <ColumnContainer key={filter.name}>
                  <CustomCheckBox
                    onPress={() => handleFilter(filter)}
                    content={filter.name}
                    active={filter.active}
                  />
                </ColumnContainer>
              );
            })}
          </RowContainer>
        </ColumnContainer>
        <ColumnContainer style={{ width: "50%" }}>
          <RowContainer>
            <SmallText>Sort Items By</SmallText>
          </RowContainer>
          {/* <RowContainer>
            <ColumnContainer>Best Sellers</ColumnContainer>
            <ColumnContainer>Price</ColumnContainer>
          </RowContainer> */}
        </ColumnContainer>
      </RowContainer>
    </RowContainer>
  );
};

export default ListHeader;
