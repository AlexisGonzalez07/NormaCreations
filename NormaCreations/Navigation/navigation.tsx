import ColumnContainer from "../Components/Containers/ColumnContainer";
import NavigationBar from "../Components/Containers/NavigationBar";
import RowContainer from "../Components/Containers/RowContainer";
import Text from "../Components/Texts/Text";
import { NavigationProps } from "./types";
import NavLink from "./Link";
import CustomPressable from "../Components/Buttons/CustomPressable";
import { colors } from "../Components/colors";
const Navigation: React.FC<NavigationProps> = ({ navigation, route }) => {
    const pages = ["Shop", "Balloons", "Decorations", "Contact"]
  return (
    <NavigationBar>
      <RowContainer style={{ height: "100%", backgroundColor: colors.green }}>
        {pages.map(page => <ColumnContainer style={{width: '25%'}} key={page}>
            <CustomPressable onPress={()=> {
            navigation.navigate(page)}}>
            <NavLink  content={page}/>

            </CustomPressable>


        </ColumnContainer>)}
      </RowContainer>
    </NavigationBar>
  );
};

export default Navigation;
