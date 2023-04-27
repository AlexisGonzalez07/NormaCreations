import React, { FunctionComponent, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FlatList, ImageSourcePropType, Platform } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Animated,
} from "react-native";

import ColumnContainer from "../Containers/ColumnContainer";
import CarouselImage from "./ImageCarouselItem";
import CarouselPaginator from "./CarouselPaginator";

interface Props {
  images: ImageSourcePropType[];
}

const MyCarousel: React.FunctionComponent<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
setCurrentIndex(viewableItems[0].index)
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const getItemLayout = (data,index) => {
    return {length: width, offset: width*index, index}
  }

  return (
    <ColumnContainer style={{ width: "100%" }}>
      <FlatList
        data={images}
        renderItem={(item) => <CarouselImage item={item} />}
        getItemLayout={getItemLayout}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ width: width}}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <CarouselPaginator data={images} scrollX={scrollX} />
    </ColumnContainer>
  );
};

export default MyCarousel;
