import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ImageProps, ImageSourcePropType } from "react-native";
const StyledImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  margin: 0;
  padding-right: 0;
  border-radius: 10px;
  opacity: 100%;
  display: flex;
`;

const CustomImageBackground: FunctionComponent<ImageProps & ImageSourcePropType> = (props) => {
    console.log(props)
  return<><StyledImage style={props?.style} source={props.source}/></> 
};

export default CustomImageBackground;
