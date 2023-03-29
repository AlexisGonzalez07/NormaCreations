import ScreenWrapper from "../../Components/ScreenWrapper"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"

const ShopScreen: React.FC<ScreenProps> = props => {
    console.log(props)
    return (
        <ScreenWrapper {...props}>
            <Text>Shop Screen</Text>
        </ScreenWrapper>
    )

}

export default ShopScreen