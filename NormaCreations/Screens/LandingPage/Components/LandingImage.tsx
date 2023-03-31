import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import RowContainer from "../../../Components/Containers/RowContainer";
import TextHeader from "../../../Components/Texts/Header"
import { ContainerProps } from "../../../Components/Containers/types";
import ImageContainer from "../../../Components/Containers/ImageContainer";
import LargeText from "../../../Components/Texts/LargeText";
import CustomImage from "../../../Components/Images/CustomImage";
import CustomImageBackground from "../../../Components/Images/ImageBackground";
import { ImageProps, ImageSourcePropType } from "react-native";
import NormalText from "../../../Components/Texts/Text";

interface LandingImageProps {
  title: string;
  content: string;
}

const LandingImage: FunctionComponent<ImageProps & LandingImageProps> = (props) => {
  console.log(props)
  const {source,style, title, content} = props
  console.log(source)
  return <ImageContainer>
    <CustomImageBackground source={source} />
    <TextHeader style={{position:'absolute', top: '10%', left:'10%', color: 'black'}}>{title}</TextHeader>
    <NormalText style={{position:'absolute', bottom: '10%', right:'10%', color: 'black'}}>{content}</NormalText>
    </ImageContainer>

};

export default LandingImage;
