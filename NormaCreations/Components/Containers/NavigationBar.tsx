import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ContainerProps } from "./types";
const StyledView = styled.View`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  height: 10%;
  width: 100%;
  max-height: 80px;
  display: flex;
  padding: 5px;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
`;

const NavigationBar: FunctionComponent<ContainerProps> = (props) => {
  return <StyledView style={props?.style}>{props.children}</StyledView>;
};

export default NavigationBar;
