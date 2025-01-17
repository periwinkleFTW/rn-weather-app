import { View, Text, ScaledSize, useWindowDimensions, StatusBar } from "react-native";
import React from "react";

const useApplicationDimensions = (): ScaledSize => {
  const { width, height, scale, fontScale } = useWindowDimensions();
  return {
    width,
    height: height + (StatusBar.currentHeight || 0),
    scale,
    fontScale,
  };
};

export default useApplicationDimensions;
