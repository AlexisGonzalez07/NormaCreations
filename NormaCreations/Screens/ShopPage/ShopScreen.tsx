import ScreenWrapper from "../ScreenWrapper"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"
import { NavigationProps } from "../../Navigation/types"
import RowContainer from "../../Components/Containers/RowContainer"
import ColumnContainer from "../../Components/Containers/ColumnContainer"
import TextHeader from "../../Components/Texts/Header"
const ShopScreen: React.FC<ScreenProps & NavigationProps> = props => {
    console.log(props)
    const products = ["1", "2", "3", "4"]
    return (
        <ScreenWrapper {...props}>
           <RowContainer style={{flexWrap: 'wrap'}}>
{products.map(product => {
    return (
        <ColumnContainer key={product} style={{minWidth:"50%"}}>
        <TextHeader style={{color: "red"}}>{product}</TextHeader></ColumnContainer>
    )
})}
           </RowContainer>
        </ScreenWrapper>
    )

}

export default ShopScreen