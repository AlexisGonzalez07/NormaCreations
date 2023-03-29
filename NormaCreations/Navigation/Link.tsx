import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ContainerProps } from "../Components/Containers/types";
import { colors } from "../Components/colors";
import SmallText from "../Components/Texts/SmallText";
import { TouchableHighlight } from "react-native";
const StyledView = styled.View`
  flex: 1;
  height: 100%;
  width: 80%;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

interface NavLinkProps {
    content: string,
    onPress?: () => void
}


const NavLink: FunctionComponent<NavLinkProps> = ({content}) => {
    console.log(content)
  return <StyledView><SmallText style={{fontSize: "13px"}}>{content}</SmallText></StyledView>;
};

export default NavLink;
