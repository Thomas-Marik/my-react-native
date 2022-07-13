import React from "react";
import { View, Text, Stylesheet, Button } from "react-native";

const MainItemScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Main Item</Text>

      <Button
        title="Add Item"
        onPress={() => navigation.navigate("AddItemScreen")}
      />
      <Button
        title="Edit / Delete Item"
        onPress={() => navigation.navigate("EditDeleteItemScreen")}
      />
      <Button
        title="View Item"
        onPress={() => navigation.navigate("ViewItemScreen")}
      />
    </View>
  );
};

export default MainItemScreen;
