import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainNavigation from "./components/Navigation/mainNavigation";

const Drawer = createDrawerNavigator();

export default function App() {
  return <MainNavigation />;
}
