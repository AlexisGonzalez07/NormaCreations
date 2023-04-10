import React, { FunctionComponent } from "react";
import { ImageProps } from "react-native";
import TextHeader from "../../../Components/Texts/TextHeader"
import ImageContainer from "../../../Components/Containers/ImageContainer";
import CustomImageBackground from "../../../Components/Images/ImageBackground";
import NormalText from "../../../Components/Texts/Text";

interface LandingImageProps {
  title: string;
  content: string;
}

const LandingImage: FunctionComponent<ImageProps & LandingImageProps> = (props) => {
  const {source,style, title, content} = props
  return <ImageContainer>
    <CustomImageBackground source={source} />
    <TextHeader style={{position:'absolute', top: '10%', left:'10%', color: 'black'}}>{title}</TextHeader>
    <NormalText style={{position:'absolute', bottom: '10%', right:'10%', color: 'black'}}>{content}</NormalText>
    </ImageContainer>

};

export default LandingImage;
