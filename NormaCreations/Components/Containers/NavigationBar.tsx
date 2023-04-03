import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ContainerProps } from "./types";
const StyledView = styled.View`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  height: 8%;
  width: 100%;
  display: flex;
  padding: 2px;
  border-radius: 2px;
  background-color: ${colors.pinkSecondary};
  justify-content: center;
  align-items: center;
`;

const NavigationBar: FunctionComponent<ContainerProps> = (props) => {
  return <StyledView style={props?.style}>{props.children}</StyledView>;
};

export default NavigationBar;
