import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ContainerProps } from "./types";
const StyledView = styled.View`
  display: flex;
  width: 90%;
  padding: 5px;
  background-color: ${colors.pinkSecondary};
  border-radius: 8px;
  height: 100%;
  min-height: 150px;
  justify-content: center;
  align-items: center;
`;

const ImageContainer: FunctionComponent<ContainerProps> = (props) => {
  return <StyledView style={props?.style}>{props.children}</StyledView>;
};

export default ImageContainer;
