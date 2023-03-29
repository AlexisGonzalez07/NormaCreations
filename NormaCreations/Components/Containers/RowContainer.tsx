import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ContainerProps } from "./types";
const StyledView = styled.View`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;

const RowContainer: FunctionComponent<ContainerProps> = (props) => {
  return <StyledView style={props?.style}>{props.children}</StyledView>;
};

export default RowContainer;
