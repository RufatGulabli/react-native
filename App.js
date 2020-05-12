import React, { useState } from "react";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Home from "./screens/home";
import Navigator from './routes/drawer';

// function to import fonts
const getFonts = () => Font.loadAsync({
  'nunito-regular': require("./assets/fonts/Nunito-Regular.ttf"),
  'nunito-bold': require("./assets/fonts/Nunito-Bold.ttf")
});

export default function App() {

  const [isFontLoaded, setFontLoaded] = useState(false);

  // When App starts, firstly downloads the fonts, then loads <Navigator /> component
  // which contains routing for the whole application.
  return isFontLoaded
    ? <Navigator />
    : <AppLoading onFinish={() => setFontLoaded(true)} startAsync={getFonts} />;
}
