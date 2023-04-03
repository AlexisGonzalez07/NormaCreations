import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { StyleProp, ViewStyle } from "react-native";
const StyledView = styled.View`
background-color: ${colors.green};
width: 100%;
height: .5px
margin: 5px 0px 5px 0px
`;


type SeparatorProps = {
  style?: StyleProp<ViewStyle>,
}


const SeparatorComponent: FunctionComponent<SeparatorProps> = (props) => {
  return <StyledView style={props?.style} />;
};

export default SeparatorComponent;
