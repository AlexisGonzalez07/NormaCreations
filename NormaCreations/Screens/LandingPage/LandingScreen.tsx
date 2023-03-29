import { TouchableHighlight } from "react-native"
import PageContainer from "../../Components/Containers/PageContainer"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"

const LandingScreen: React.FC<ScreenProps> = ({navigation,route}) => {
    console.log(navigation)
    console.log(route)
    return (
        <PageContainer>
            <TouchableHighlight style={{marginBottom: '50px'}} onPress={()=> navigation.navigate("Shop")}>
                <Text>Go to SHop</Text>
            </TouchableHighlight>
            <Text>Landing Screen</Text>
        </PageContainer>
    )

}

export default LandingScreen