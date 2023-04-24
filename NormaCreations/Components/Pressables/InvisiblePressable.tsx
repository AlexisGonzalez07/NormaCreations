import React, { FunctionComponent, useState } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import {PressingProps} from "./types";
const StyledPressable = styled.Pressable`
width: 100%;
heigth: 100%;
display: flex;
border-radius: 8px;
justify-content: center;
align-items: center;
flex-direction: row;
cursor: pointer;
opacity: 1;
`;
// background-color: ${props => props.active ? "green": "blue"}

const InvisiblePressable: FunctionComponent<PressingProps> = (props) => {
  const [active,setActive] = useState<boolean>(false)
  return <StyledPressable style={props?.style} active={active}
  onPress={props.onPress} onPressIn={()=> setActive(!active)} onPressOut={()=> setActive(!active)}>{props.children}</StyledPressable>;
};

export default InvisiblePressable;