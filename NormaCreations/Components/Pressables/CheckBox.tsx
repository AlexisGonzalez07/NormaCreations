import React, { FunctionComponent, useState,useEffect } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import {PressingProps} from "./types";
import SmallText from "../Texts/SmallText";

const StyledPressable = styled.Pressable`
width: 100%;
heigth: 100%;
display: flex;
padding: 2px;
border-radius: 8px;
justify-content: space-around;
align-items: center;
flex-direction: row;
cursor: pointer;
`;

const CustomCheckBox: FunctionComponent<PressingProps> = (props) => {
  return <StyledPressable style={props?.style}
  onPress={props.onPress}>
    {props.children}
  <SmallText>{props.content}</SmallText>
  </StyledPressable>;
};

export default CustomCheckBox;
