import ScreenWrapper from "../../Components/ScreenWrapper"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"

const DecorationsScreen: React.FC<ScreenProps> = props => {
    console.log(props)
    return (
        <ScreenWrapper {...props}>
            <Text>Decorations Screen</Text>
        </ScreenWrapper>
    )

}

export default DecorationsScreen