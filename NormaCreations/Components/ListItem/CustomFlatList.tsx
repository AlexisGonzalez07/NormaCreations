import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { FlatListProps } from "react-native";
const StyledList = styled.FlatList`
  flex: 1;
  height: 100%;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

const CustomFlatList: FunctionComponent<FlatListProps> = (props) => {
  return <StyledList style={props?.style}/>;
};

export default CustomFlatList;
