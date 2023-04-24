import React, { FunctionComponent, useContext } from "react";
import RowContainer from "../../../Components/Containers/RowContainer";
import ImageContainer from "../../../Components/Containers/ImageContainer";
import LargeText from "../../../Components/Texts/LargeText";
import CustomImage from "../../../Components/Images/CustomImage";
import NormalText from "../../../Components/Texts/Text";
import { colors } from "../../../Components/colors";
import ColumnContainer from "../../../Components/Containers/ColumnContainer";
import SmallText from "../../../Components/Texts/SmallText";
import { Product } from "../types";
import CustomPressable from "../../../Components/Pressables/CustomPressable";
import { CartContext } from "../../../CartContext";
import { Ionicons } from "@expo/vector-icons";
import InvisiblePressable from "../../../Components/Pressables/InvisiblePressable";

interface CardProps {
  index: number;
  item: Product
}

const Card: FunctionComponent<CardProps> = (props) => {
  const {addToCart} = useContext(CartContext)
  const { item } = props;

  return (
    <RowContainer
      style={{
        width: "100%",
        minHeight: 150,
        maxHeight: 250,
        marginBottom: 10,
        justifyContent: "space-between",
      }}
    >
      <ColumnContainer style={{ width: "50%" }}>
          <InvisiblePressable onPress={()=> console.log("open modal")}>
        <ImageContainer style={{ padding: 2 }}>
    
          <CustomImage
            style={{ borderRadius: 10}}
            source={item.imageLink[0]}
            resizeMode="center"
            />
        </ImageContainer>
          </InvisiblePressable>
      </ColumnContainer>
      <ColumnContainer style={{ width: "45%", justifyContent: 'space-around' }}>
        <LargeText>{item.title}</LargeText>
        <NormalText >{item.content.length <= 60? item.content : item.content.substring(0,60) + "..."}</NormalText>
        <CustomPressable onPress={() => addToCart(item)} style={{backgroundColor: colors.green, width: 'auto', padding: 3, marginVertical: 3}}>
        <Ionicons name={'cart'} size={24} />
        <SmallText>$ {item.price}</SmallText>
        </CustomPressable>
        <SmallText>Items sold: {item.sales}</SmallText>
      </ColumnContainer>
    </RowContainer>
  );
};

export default Card;
