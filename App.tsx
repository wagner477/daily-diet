import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Routes } from "@routes/index";
import { ActivityIndicator, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  // simular loading

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        hidden
        barStyle="dark-content"
        backgroundColor="transparent"
        animated
        translucent
      />
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
