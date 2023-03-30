import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import RowContainer from "../../../Components/Containers/RowContainer";
import TextHeader from "../../../Components/Texts/Header"
import { ContainerProps } from "../../../Components/Containers/types";
import ImageContainer from "../../../Components/Containers/ImageContainer";
import LargeText from "../../../Components/Texts/LargeText";
import CustomImage from "../../../Components/Images/CustomImage";
import CustomImageBackground from "../../../Components/Images/ImageBackground";



const LandingImage: FunctionComponent<ContainerProps> = (props) => {
  return <ImageContainer style={{padding: 0, position:'relative'}}>
    <CustomImageBackground source={require("../../../assets/icon.png")}/>
    <TextHeader style={{position:'absolute', bottom: '30%', right:'10%'}}>Hello</TextHeader>
    <LargeText style={{position:'absolute', bottom: '0%', right:'10%'}}> Subtitle here!</LargeText>
    </ImageContainer>

};

export default LandingImage;
