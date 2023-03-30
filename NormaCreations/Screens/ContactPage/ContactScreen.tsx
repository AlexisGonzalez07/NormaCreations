import ScreenWrapper from "../ScreenWrapper"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"
import { NavigationProps } from "../../Navigation/types"
const ContactScreen: React.FC<ScreenProps & NavigationProps> = props => {
    console.log(props)
    return (
        <ScreenWrapper {...props}>
            <Text>Contact Screen</Text>
        </ScreenWrapper>
    )

}

export default ContactScreen