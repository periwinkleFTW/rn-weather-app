import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Canvas, Line, LinearGradient, RoundedRect, vec } from "@shopify/react-native-skia";
import { BlurView } from "expo-blur";

interface ForecastSheetBackgroundProps {
  width: number;
  height: number;
  cornerRadius: number;
}

const ForecastSheetBackground = ({ width, height, cornerRadius }: ForecastSheetBackgroundProps) => {
  return (
    <BlurView
      style={{ ...StyleSheet.absoluteFillObject, borderRadius: cornerRadius, overflow: "hidden" }}
      intensity={50}
      tint="dark"
    >
      <Canvas style={{ flex: 1 }}>
        <RoundedRect x={0} y={0} width={width} height={height} r={cornerRadius}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={["rgba(46,51,90,0.26)", "rgba(28,57,51,0.26)"]}
            positions={[-0.04, 0.95]}
          />
        </RoundedRect>
      </Canvas>
    </BlurView>
  );
};

export default ForecastSheetBackground;

const styles = StyleSheet.create({});
