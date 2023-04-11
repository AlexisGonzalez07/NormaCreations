import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ImageProps, ImageSourcePropType } from "react-native";
const StyledImage = styled.Image`
  width: 100%;
  height:100%;
  margin: 0;
  padding-right: 0;
  border-radius: 10px;
  opacity: 1;
  display: flex;
`;

const CustomImage: FunctionComponent<ImageProps & ImageSourcePropType> = (props) => {
  
  return<><StyledImage resizeMode={props?.resizeMode} style={props?.style} source={props.source}/></> 
};

export default CustomImage;
