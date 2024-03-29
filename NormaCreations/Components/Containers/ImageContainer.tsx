import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ContainerProps } from "./types";
const StyledView = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 4/3;
  background-color: ${colors.pinkSecondary}
  `;

const ImageContainer: FunctionComponent<ContainerProps> = (props) => {
  return <StyledView style={props?.style}>{props.children}</StyledView>;
};

export default ImageContainer;
