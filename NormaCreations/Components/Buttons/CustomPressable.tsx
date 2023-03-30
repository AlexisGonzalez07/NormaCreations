import React, { FunctionComponent, useState } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import {PressingProps} from "./types";
const StyledPressable = styled.Pressable`
width: 100%;
heigth: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
cursor: pointer;
opacity: ${props => props.active ? .5 : 1};
background-color: ${props => props.active ? "red": "blue"}
`;

const CustomPressable: FunctionComponent<PressingProps> = (props) => {
  console.log(props)
  const [active,setActive] = useState<boolean>(false)
  return <StyledPressable style={props?.style} active={active}
  onPress={props.onPress} onPressIn={()=> setActive(!active)} onPressOut={()=> setActive(!active)}>{props.children}</StyledPressable>;
};

export default CustomPressable;
