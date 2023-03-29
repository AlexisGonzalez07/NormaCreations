import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ContainerProps } from "./types";
const StyledView = styled.View`
  flex: 1;
  height: 100%;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

const ColumnContainer: FunctionComponent<ContainerProps> = (props) => {
  return <StyledView style={props?.style}>{props.children}</StyledView>;
};

export default ColumnContainer;
