import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import RowContainer from "../../../Components/Containers/RowContainer";
import TextHeader from "../../../Components/Texts/TextHeader";
import { ContainerProps } from "../../../Components/Containers/types";
import ImageContainer from "../../../Components/Containers/ImageContainer";
import LargeText from "../../../Components/Texts/LargeText";
import CustomImage from "../../../Components/Images/CustomImage";
import CustomImageBackground from "../../../Components/Images/ImageBackground";
import { ImageSourcePropType } from "react-native";
import NormalText from "../../../Components/Texts/Text";
import { colors } from "../../../Components/colors";
import ColumnContainer from "../../../Components/Containers/ColumnContainer";
import SeparatorComponent from "../../../Components/ListItem/Separator";
import SmallText from "../../../Components/Texts/SmallText";
import { Product } from "../types";

interface CardProps {
  index: number;
  item: Product
}

const Card: FunctionComponent<CardProps> = (props) => {
  // console.log(props);
  const { item } = props;
  return (
    <RowContainer
      style={{
        width: "100%",
        minHeight: "150px",
        marginBottom: 10,
        justifyContent: "space-between",
      }}
    >
      <ColumnContainer style={{ width: "50%" }}>
        <ImageContainer style={{ padding: 2 }}>
          <CustomImage
            style={{ borderRadius: 6 }}
            source={item.imageLink}
            resizeMode="center"
          />
        </ImageContainer>
      </ColumnContainer>
      {/* <SeparatorComponent style={{height: "95%", width: 1}}/> */}
      <ColumnContainer style={{ width: "45%", justifyContent: 'space-around' }}>
        <LargeText style={{minHeight: '25%'}}>{item.title}</LargeText>
      
        <NormalText style={{minHeight: '40%'}}>{item.content.length <= 60? item.content : item.content.substring(0,60) + "..."}</NormalText>
        <SmallText>$ {item.price}</SmallText>
        <SmallText>Items sold: {item.sales }</SmallText>
      </ColumnContainer>
    </RowContainer>
  );
};

export default Card;
