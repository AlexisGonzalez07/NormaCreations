import PageContainer from "../../Components/Containers/PageContainer"
import Text from "../../Components/Texts/Text"
import { ScreenProps } from "../types"
import { NavigationProps } from "../../Navigation/types"
import LandingImage from './Components/LandingImage'
import CustomPressable from "../../Components/Buttons/CustomPressable"
import RowContainer from "../../Components/Containers/RowContainer"
import { pages } from "./data"
import { colors } from "../../Components/colors"
const LandingScreen: React.FC<ScreenProps & NavigationProps> = ({navigation,route}) => {
   return (
        <PageContainer style={{justifyContent: "space-around", padding: 0,}}>
            {pages.map((page,index)=> {
                return(
                    <RowContainer style={{height: '20%'}} key={index}>
                    <CustomPressable style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"90%", height: '100%'}} onPress={()=> navigation.navigate(page.title)}>
                        <LandingImage source={page.imageLink} content={page.content} title={page.title}/>
                    </CustomPressable>
                    </RowContainer>
                )
            })}
           
        </PageContainer>
    )

}

export default LandingScreen