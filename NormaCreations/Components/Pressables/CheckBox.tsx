import React, { FunctionComponent, useState } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import {PressingProps} from "./types";
import SmallText from "../Texts/SmallText";
import { Ionicons } from '@expo/vector-icons';

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
// background-color: ${props => props.active ? "green": "blue"}

const CustomCheckBox: FunctionComponent<PressingProps> = (props) => {
  console.log(props)
  return <StyledPressable style={props?.style}
  onPress={props.onPress}>
<Ionicons name={props.active ? 'checkbox-outline' : "square-outline"} size={24}/>
  <SmallText>{props.content}</SmallText>
  </StyledPressable>;
};

export default CustomCheckBox;