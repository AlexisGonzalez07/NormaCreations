import PageContainer from "../../Components/Containers/PageContainer"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"
import { NavigationProps } from "../../Navigation/types"
import LandingImage from './Components/Image'
import CustomPressable from "../../Components/Buttons/CustomPressable"
import RowContainer from "../../Components/Containers/RowContainer"
const LandingScreen: React.FC<ScreenProps & NavigationProps> = ({navigation,route}) => {
    console.log(navigation)
    console.log(route)
    const pages = ["Shop", "Balloons", "Decorations", "Contact"]
    return (
        <PageContainer style={{justifyContent: "space-around", padding: 0}}>
            {pages.map((page,index)=> {
                return(
                    <RowContainer style={{height: '20%'}} key={index}>
                    <CustomPressable style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"90%",}} onPress={()=> navigation.navigate(page)}>
                        <LandingImage/>
                    </CustomPressable>
                    </RowContainer>
                )
            })}
           
        </PageContainer>
    )

}

export default LandingScreen