import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import AddItemScreen from "../../screens/Item/addItemScreen";
import EditDeleteItemScreen from "../../screens/Item/editDeleteItemScreen";
import MainItemScreen from "../../screens/Item/mainItemScreen";
import ViewItemSceen from "../../screens/Item/viewItemSceen";

const Stack = createStackNavigator();

const ItemStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainItem" component={MainItemScreen} />
      <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
      <Stack.Screen
        name="EditDeleteItemScreen"
        component={EditDeleteItemScreen}
      />
      <Stack.Screen name="ViewItemScreen" component={ViewItemSceen} />
    </Stack.Navigator>
  );
};
export default ItemStack;
