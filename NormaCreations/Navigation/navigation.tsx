import ColumnContainer from "../Components/Containers/ColumnContainer";
import NavigationBar from "../Components/Containers/NavigationBar";
import RowContainer from "../Components/Containers/RowContainer";
import Text from "../Components/Texts/Text";
import { TouchableHighlight } from "react-native";
import { NavigationProps } from "./types";
import NavLink from "./Link";
import BalloonScreen from "../Screens/BalloonsPage/BalloonScreen";

const Navigation: React.FC<NavigationProps> = ({ navigation, route }) => {
 const pages =["Shop", "Balloons", "Decorations", "Contact"]
  console.log(navigation);
  console.log(route);
  return (
    <NavigationBar>
      <RowContainer style={{ height: "100%" }}>
        {pages.map(page => <ColumnContainer style={{width: '25%'}} key={page}>
            <TouchableHighlight onPress={()=> {
            console.log("pressed")
            navigation.navigate(page)}}>
            <NavLink  content={page}/>

            </TouchableHighlight>


        </ColumnContainer>)}
      </RowContainer>
    </NavigationBar>
  );
};

export default Navigation;
