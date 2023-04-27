import React, { FC } from "react";
import { ImageSourcePropType, useWindowDimensions } from "react-native";
import ImageContainer from "../Containers/ImageContainer";
import CustomImage from "./CustomImage";


interface Prop {
    item: ImageSourcePropType
}


const CarouselImage: FC<Prop> = (props) => {
    // console.log(props)
    const{item} = props
    const {width} = useWindowDimensions()
    return (
      <ImageContainer style={{width: width, padding: 1}}>
        <CustomImage
          source={item.item}
          style={{borderRadius: 20}}
          resizeMode="center"
        />
      </ImageContainer>
    );
  };

  export default CarouselImage