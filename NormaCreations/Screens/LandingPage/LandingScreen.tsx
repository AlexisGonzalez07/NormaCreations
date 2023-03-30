import PageContainer from "../../Components/Containers/PageContainer"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"
import { NavigationProps } from "../../Navigation/types"
import LandingImage from './Components/Image'
import CustomPressable from "../../Components/Buttons/CustomPressable"
const LandingScreen: React.FC<ScreenProps & NavigationProps> = ({navigation,route}) => {
    console.log(navigation)
    console.log(route)
    const pages = ["Shop", "Balloons", "Decorations", "Contact"]
    return (
        <PageContainer style={{justifyContent: "space-around", backgroundColor: "red"}}>
            {pages.map((page,index)=> {
                return(
                    <CustomPressable style={{backgroundColor:'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={index} onPress={()=> navigation.navigate(page)}>
                        <LandingImage/>
                    </CustomPressable>
                )
            })}
           
        </PageContainer>
    )

}

export default LandingScreen