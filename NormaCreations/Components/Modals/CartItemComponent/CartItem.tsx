import { Item } from "../../../CartContext";
import React, { FunctionComponent } from "react";
import RowContainer from "../../Containers/RowContainer";
import ColumnContainer from "../../Containers/ColumnContainer";
import ImageContainer from "../../Containers/ImageContainer";
import CustomImage from "../../Images/CustomImage";
import LargeText from "../../Texts/LargeText";
import NormalText from "../../Texts/Text";
import SmallText from "../../Texts/SmallText";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import CustomPressable from "../../Pressables/CustomPressable";
import { colors } from "../../colors";
interface ItemProps {
  index: number;
  item: Item;
  removeFromCart: (item: Item) => void;
  updateItemQuantity: (item: Item, quantity: number) => void;
}

const CartItem: FunctionComponent<ItemProps> = (props) => {
  const { item } = props;
  return (
    <RowContainer style={{ minHeight: 100 }}>
      <ColumnContainer style={{ maxWidth: 150 }}>
        <ImageContainer style={{backgroundColor: colors.purple}}>
          <CustomImage
            source={item.imageLink}
            resizeMode="stretch"
          />
        </ImageContainer>
      </ColumnContainer>
      <ColumnContainer>
        <NormalText style={{textAlign: 'left'}}>{item.title}</NormalText>
        <SmallText style={{textAlign: 'left'}}>
          Product Description: 
          {item.description.length <= 20
            ? item.description
            : item.description.substring(0, 20) + "..."}
        </SmallText>
        <RowContainer>
            <CustomPressable
            onPress={()=> props.updateItemQuantity(item,-1)}
            style={{backgroundColor: colors.purple, width: 'auto'}}>
            <Ionicons name="remove" size={26} color="black" />
            </CustomPressable>
        <SmallText>Quantity: {item.quantity}</SmallText>
        <CustomPressable
            onPress={()=> props.updateItemQuantity(item,1)}
            style={{backgroundColor: colors.purple, width: 'auto'}}>
            <Ionicons name="add" size={26} color="black" />
            </CustomPressable>
        </RowContainer>
        <SmallText>Price: ${item.price} ea.</SmallText>
        <CustomPressable
          onPress={() => props.removeFromCart(item)}
          style={{
            backgroundColor: colors.purple,
            width: "auto",
            padding: 3,
          }}
        >
          <MaterialCommunityIcons name={"cart-remove"} size={24} />
          <SmallText>Remove from Cart</SmallText>
        </CustomPressable>
      </ColumnContainer>
    </RowContainer>
  );
};

export default CartItem;
