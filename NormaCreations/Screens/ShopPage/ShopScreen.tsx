import ScreenWrapper from "../ScreenWrapper"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"
import { NavigationProps } from "../../Navigation/types"
const ShopScreen: React.FC<ScreenProps & NavigationProps> = props => {
    console.log(props)
    return (
        <ScreenWrapper {...props}>
            <Text>Shop Screen</Text>
        </ScreenWrapper>
    )

}

export default ShopScreen