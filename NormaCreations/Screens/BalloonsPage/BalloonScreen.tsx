import ScreenWrapper from "../../Components/ScreenWrapper"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"

const BalloonScreen: React.FC<ScreenProps> = props => {
    console.log(props)
    return (
        <ScreenWrapper {...props}>
            <Text>Balloon Screen</Text>
        </ScreenWrapper>
    )

}

export default BalloonScreen