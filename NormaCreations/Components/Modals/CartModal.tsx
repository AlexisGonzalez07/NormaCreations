import React, { FC, useContext } from "react";
import { Modal, FlatList } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import PageContainer from "../Containers/PageContainer";
import RowContainer from "../Containers/RowContainer";
import { colors } from "../colors";
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import CustomPressable from "../Pressables/CustomPressable";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../CartContext";
import ColumnContainer from "../Containers/ColumnContainer";
import CustomImage from "../Images/CustomImage";
import ImageContainer from "../Containers/ImageContainer";
import NormalText from "../Texts/Text";
import LargeText from "../Texts/LargeText";
import SeparatorComponent from "../ListItem/Separator";
import CartItem from "./CartItemComponent/CartItem";
import TextHeader from "../Texts/TextHeader";
import { ModalProps } from "./types";

const StyledModal = styled.Modal`
  flex: 1;
  transition: 400ms all ease;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const CartModal: FC<ModalProps> = (props) => {
  const navigation = useNavigation();
  const { cartItems, updateItemQuantity, removeFromCart,getTotal } = useContext(CartContext);

  return (
    <StyledModal
      animationType="slide"
      visible={props.visible}
      onRequestClose={props.handleCloseModal}
    >
      <PageContainer style={{padding: 0}}>
        <RowContainer style={{ height: "10%", justifyContent: "space-between", paddingTop: 10, paddingHorizontal: 20 }}>
          <LargeText>Your Cart:</LargeText>
          <CustomPressable
            onPress={() => props.handleCloseModal()}
            style={{
              backgroundColor: colors.purple,
              width: "auto",
              padding: 5,
            }}
          >
            <Ionicons name={"backspace"} size={40} />
          </CustomPressable>
        </RowContainer>
        <ColumnContainer
          style={{ width: "100%"}}>
          {cartItems.length == 0
          ?<LargeText>Cart is Empty!</LargeText>
          :<FlatList 
          ItemSeparatorComponent={SeparatorComponent}
          style={{width: '100%', height: '100%'}}
          data={cartItems}
          initialNumToRender = {cartItems.length} 
          keyExtractor = {items => items.id}
          renderItem={item => <CartItem {...item} removeFromCart={removeFromCart} updateItemQuantity={updateItemQuantity}/>
          }/>}
        </ColumnContainer>
        <RowContainer style={{minHeight: '200px'}}>
        <ColumnContainer style={{ backgroundColor: colors.purple, width: "100%" }}>
          <LargeText>Order Summary</LargeText>
          {cartItems.length == 0 ?
          <LargeText>Add items to your cart to get a summary</LargeText>
          : (<><NormalText>Total items: {cartItems.length}</NormalText>
          <NormalText>Cart Total: ${getTotal()}</NormalText>
          <CustomPressable
            onPress={() => {
                props.handleCloseModal()
                navigation.navigate("Checkout")
        }}
            style={{
              backgroundColor: colors.green,
              width: "60%",
              paddingVertical: 5
            }}
          >
            <MaterialCommunityIcons name="cart-check" size={30} color="black" />          
            <NormalText style={{marginLeft: 5}}>Checkout Now!</NormalText>
            </CustomPressable>
          </>)
        }
        </ColumnContainer>
        </RowContainer>
      </PageContainer>
    </StyledModal>
  );
};

export default CartModal;
