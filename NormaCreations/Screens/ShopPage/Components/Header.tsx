import React, { FunctionComponent } from "react";
import { SetStateAction } from "react";
import { colors } from "../../../Components/colors";
import ColumnContainer from "../../../Components/Containers/ColumnContainer";
import RowContainer from "../../../Components/Containers/RowContainer";
import LargeText from "../../../Components/Texts/LargeText";
import SmallText from "../../../Components/Texts/SmallText";
import NormalText from "../../../Components/Texts/Text";
import { StoreProducts } from "../data";
interface HeaderProps {
  items: StoreProducts;
  setItems: React.Dispatch<SetStateAction<StoreProducts>>;
  resetItems: () => void;
}

const ListHeader: FunctionComponent<HeaderProps> = (props) => {
  console.log(props);
  return (
    <RowContainer
      style={{backgroundColor: colors.pinkSecondary }}
    >
      <RowContainer>
        <LargeText style={{ color: colors.green }}>Check out some of</LargeText>
      </RowContainer>
      <RowContainer>
        <LargeText style={{ color: colors.green }}>Norma's Creations</LargeText>
      </RowContainer>
      <RowContainer>
        <ColumnContainer style={{ width: "50%" }}>
        <RowContainer>Filter Items By:</RowContainer>
          <RowContainer>
            <ColumnContainer>All</ColumnContainer>
            <ColumnContainer>Cups</ColumnContainer>
            <ColumnContainer>Shirts</ColumnContainer>
          </RowContainer>
        </ColumnContainer>
        <ColumnContainer style={{ width: "50%" }}>
          <RowContainer>Sort Options:</RowContainer>
          <RowContainer>
            <ColumnContainer>Best Sellers</ColumnContainer>
            <ColumnContainer>Price</ColumnContainer>
          </RowContainer>
        </ColumnContainer>
      </RowContainer>
    </RowContainer>
  );
};

export default ListHeader;
