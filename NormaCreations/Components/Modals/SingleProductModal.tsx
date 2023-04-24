import React, { FC, useContext } from "react";
import { Modal, FlatList } from "react-native";
import styled from "styled-components/native";
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import { Product } from "../../Screens/ShopPage/types";
import { ProductModalProps } from "./types";
import PageContainer from "../Containers/PageContainer";
import RowContainer from "../Containers/RowContainer";
import LargeText from "../Texts/LargeText";
import CustomPressable from "../Pressables/CustomPressable";
import { colors } from "../colors";
const StyledModal = styled.Modal`
  flex: 1;
  transition: 400ms all ease;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;   

const ProductModal: FC<ProductModalProps> = (props) => {
    console.log(props)
    return (
        <StyledModal
        animationType="slide"
        visible={props.visible}
        onRequestClose={props.onClose}
      >
         <PageContainer style={{padding: 0}}>
        <RowContainer style={{ height: "10%", justifyContent: "flex-end", paddingTop: 10, paddingHorizontal: 20 }}>

          <CustomPressable
            onPress={() => props.handleCloseModal()}
            style={{
              backgroundColor: colors.purple,
              width: "auto",
              padding: 5,
              marginRight: 20,
            }}
          >
            <Ionicons name={"backspace"} size={40} />
          </CustomPressable>
        </RowContainer>
        </PageContainer>
      </StyledModal>
    )
}