import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { TextProps } from "./types";
const StyledText = styled.Text`
  font-size: 24px;
  text-align: center;
  letter-spacing: 1.5px
`;

const LargeText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props?.style}>{props.children}</StyledText>;
};

export default LargeText;
