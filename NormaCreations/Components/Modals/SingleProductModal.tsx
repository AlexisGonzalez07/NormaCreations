import React, { FC } from "react";
import { Modal} from "react-native";
import styled from "styled-components/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Product } from "../../Screens/ShopPage/types";
import { ProductModalProps } from "./types";
import PageContainer from "../Containers/PageContainer";
import RowContainer from "../Containers/RowContainer";
import LargeText from "../Texts/LargeText";
import CustomPressable from "../Pressables/CustomPressable";
import { colors } from "../colors";
import ColumnContainer from "../Containers/ColumnContainer";
import TextHeader from "../Texts/TextHeader";
import SmallText from "../Texts/SmallText";
import NormalText from "../Texts/Text";
import MyCarousel from "../Images/ImageCarousel";

const StyledModal = styled.Modal`
  flex: 1;
  transition: 400ms all ease;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const ProductModal: FC<ProductModalProps> = (props) => {
  console.log(props)
  const {item} = props
  return (
    <StyledModal
      animationType="fade"
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <PageContainer style={{ padding: 0 }}>
        <RowContainer
          style={{
            justifyContent: "flex-end",
            marginTop: 2
          }}
        >
          <CustomPressable
            onPress={() => props.handleCloseModal()}
            style={{
              backgroundColor: colors.purple,
              width: "auto",
              padding: 3,
              marginRight: 15,
            }}
          >
            <Ionicons name={"backspace"} size={40} />
          </CustomPressable>
        </RowContainer>
        <RowContainer style={{ padding:0}}>
          <TextHeader>{item.title}</TextHeader> 
          </RowContainer>
          <MyCarousel images={item.imageLink}/>
          <ColumnContainer style={{backgroundColor: 'purple', flex: .5}}>
          <SmallText>{item.content}</SmallText>
          </ColumnContainer>
        <RowContainer style={{ backgroundColor: colors.blue, padding: 1 }}>
          <ColumnContainer style={{ width: "95%" }}>
            <NormalText>Like this item?</NormalText>
            <CustomPressable
              onPress={() => {
                props.addToCart(item);
                props.handleCloseModal();
              }}
              style={{
                backgroundColor: colors.green,
                width: "60%",
                paddingVertical: 5,
                marginVertical: 10,
              }}
            >
              <Ionicons name={"cart"} size={24} />
              <NormalText style={{ marginLeft: 5 }}>Add To Cart!</NormalText>
            </CustomPressable>
          </ColumnContainer>
        </RowContainer>
      </PageContainer>
    </StyledModal>
  );
};

export default ProductModal;
