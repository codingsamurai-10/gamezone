import React from "react";
import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_700Bold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Home />;
  }
}
