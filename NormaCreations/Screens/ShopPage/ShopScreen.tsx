import ScreenWrapper from "../ScreenWrapper";
import Text from "../../Components/Texts/Text";
import { ScreenProps } from "../types";
import { NavigationProps } from "../../Navigation/types";
import RowContainer from "../../Components/Containers/RowContainer";
import ColumnContainer from "../../Components/Containers/ColumnContainer";
import TextHeader from "../../Components/Texts/TextHeader";
import { products, StoreProducts } from "./data";
import { colors } from "../../Components/colors";
import { FlatList } from "react-native";
import Card from "./Components/Card";
import SeparatorComponent from "../../Components/ListItem/Separator";
import ListHeader from "./Components/Header";
import { useState } from "react";
const ShopScreen: React.FC<ScreenProps & NavigationProps> = (props) => {
  const [items, setItems] = useState<StoreProducts>(products)

  const resetItems = () => setItems(products)

  return (
    <ScreenWrapper {...props}>
      <FlatList 
      ItemSeparatorComponent={SeparatorComponent}
      ListHeaderComponent = {<ListHeader items={items} setItems={setItems} resetItems={resetItems}/>}
      style={{width: '100%', height: '100%'}}
      data={products}
      initialNumToRender = {5} 
      keyExtractor = {items => items.price}
      renderItem={items => <Card {...items}/>}
      />
    </ScreenWrapper>
  );
};

export default ShopScreen;