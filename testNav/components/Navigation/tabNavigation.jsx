import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/homeScreen";
import About from "../../screens/about";
import ItemStack from "./itemStack";
const Tab = createBottomTabNavigator();

const TabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="Item" component={ItemStack} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
