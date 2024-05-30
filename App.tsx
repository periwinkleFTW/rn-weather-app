import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import HomeBackground from "./components/HomeBackground";

export default function App() {
  return (
    <>
      <HomeBackground />
      <StatusBar style="light" />
    </>
  );
}
