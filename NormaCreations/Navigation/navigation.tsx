import ColumnContainer from "../Components/Containers/ColumnContainer";
import NavigationContainer from "../Components/Containers/NavigationContainer";
import RowContainer from "../Components/Containers/RowContainer";
import Text from "../Components/Texts/Text";

export default function Navigation (){
    return (
        <NavigationContainer><RowContainer style={{height:"100%"}}><ColumnContainer>Balloons</ColumnContainer><ColumnContainer>Decorations</ColumnContainer><ColumnContainer>Shop</ColumnContainer><ColumnContainer>Contact</ColumnContainer></RowContainer></NavigationContainer>
    )
}