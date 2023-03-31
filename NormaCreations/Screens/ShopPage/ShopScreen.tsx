import ScreenWrapper from "../ScreenWrapper";
import Text from "../../Components/Texts/Text";
import { ScreenProps } from "../types";
import { NavigationProps } from "../../Navigation/types";
import RowContainer from "../../Components/Containers/RowContainer";
import ColumnContainer from "../../Components/Containers/ColumnContainer";
import TextHeader from "../../Components/Texts/Header";
import { products } from "./data";
import { colors } from "../../Components/colors";
const ShopScreen: React.FC<ScreenProps & NavigationProps> = (props) => {
  console.log(props);
  return (
    <ScreenWrapper {...props}>
      {products.map((product, index) => {
        return (
          <RowContainer key={index} style={{ backgroundColor: colors.green, width: '95%', borderRadius:'8px' }}>
            <TextHeader>{product.title}</TextHeader>
          </RowContainer>
        );
      })}
    </ScreenWrapper>
  );
};

export default ShopScreen;
