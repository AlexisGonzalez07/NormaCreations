import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import RowContainer from "../../../Components/Containers/RowContainer";
import TextHeader from "../../../Components/Texts/Header"
import { ContainerProps } from "../../../Components/Containers/types";
import ImageContainer from "../../../Components/Containers/ImageContainer";


const LandingImage: FunctionComponent<ContainerProps> = (props) => {
  return <RowContainer style={{height: '20%', position: 'relative', backgroundColor: 'blue'}}>
    <ImageContainer>
    <TextHeader>Hello</TextHeader>
    </ImageContainer>
    </RowContainer>;
};

export default LandingImage;
