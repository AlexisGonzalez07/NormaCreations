import ScreenWrapper from "../ScreenWrapper"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"
import { NavigationProps } from "../../Navigation/types"
const DecorationsScreen: React.FC<ScreenProps & NavigationProps> = props => {
    console.log(props)
    return (
        <ScreenWrapper {...props}>
            <Text>Decorations Screen</Text>
        </ScreenWrapper>
    )

}

export default DecorationsScreen