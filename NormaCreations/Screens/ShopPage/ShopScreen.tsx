import ScreenWrapper from "../ScreenWrapper";
import Text from "../../Components/Texts/Text";
import { ScreenProps } from "../types";
import { NavigationProps } from "../../Navigation/types";
import RowContainer from "../../Components/Containers/RowContainer";
import ColumnContainer from "../../Components/Containers/ColumnContainer";
import TextHeader from "../../Components/Texts/Header";
import { products } from "./data";
import { colors } from "../../Components/colors";
import { FlatList } from "react-native";
import Card from "./Components/Card";
import SeparatorComponent from "../../Components/ListItem/Separator";
const ShopScreen: React.FC<ScreenProps & NavigationProps> = (props) => {
  return (
    <ScreenWrapper {...props}>
      <FlatList 
      ItemSeparatorComponent={SeparatorComponent}
      style={{width: '100%', height: '100%'}}
      data={products} 
      keyExtractor = {product => product.price}
      // renderItem={({item,index,separators})=> (
      //   //content here
      // )}

      renderItem={product => <Card {...product}/>}
      />
    

    </ScreenWrapper>
  );
};

export default ShopScreen;