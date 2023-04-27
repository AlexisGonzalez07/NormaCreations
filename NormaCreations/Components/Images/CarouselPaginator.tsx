import React, { FC } from "react";
import RowContainer from "../Containers/RowContainer";
import {
  Animated,
  ImageSourcePropType,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { colors } from "../colors";
interface Prop {
  data: ImageSourcePropType[];
  scrollX: Animated.Value;
}

const CarouselPaginator: FC<Prop> = (props) => {
  console.log("Carousel paginator");
  console.log(props);
  const { width } = useWindowDimensions();
  const { data, scrollX } = props;
  return (
    <RowContainer style={{marginVertical: 5 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={{
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              width: dotWidth,
              backgroundColor: colors.pinkSecondary,
              opacity,
            }}
            key={i}
          ></Animated.View>
        );
      })}
    </RowContainer>
  );
};

export default CarouselPaginator;
