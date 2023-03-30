import ScreenWrapper from "../ScreenWrapper"
import Text from "../../Components/Texts/Text"
import { NavigationProps } from "../../Navigation/types"
import { ScreenProps } from "../types"

const BalloonScreen: React.FC<ScreenProps & NavigationProps> = props => {
    console.log(props)
   
    return (
        <ScreenWrapper {...props}>
            <Text>Balloon Screen</Text>
        </ScreenWrapper>
    )

}

export default BalloonScreen