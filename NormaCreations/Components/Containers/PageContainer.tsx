import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ContainerProps } from "./types";
const StyledView = styled.View`
  flex: 1;
  padding: 10px 0px;
  background-color: ${colors.lightBackground};
  justify-content: center;
  align-items: center;
`;

const MainContainer: FunctionComponent<ContainerProps> = (props) => {
  return <StyledView style={props?.style}>{props.children}</StyledView>;
};

export default MainContainer;
