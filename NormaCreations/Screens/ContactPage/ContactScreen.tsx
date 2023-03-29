import ScreenWrapper from "../../Components/ScreenWrapper"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"

const ContactScreen: React.FC<ScreenProps> = props => {
    console.log(props)
    return (
        <ScreenWrapper {...props}>
            <Text>Contact Screen</Text>
        </ScreenWrapper>
    )

}

export default ContactScreen