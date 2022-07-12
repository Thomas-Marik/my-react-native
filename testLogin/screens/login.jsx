import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Login = ({ loginHandler }) => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        placeholder="My Name"
        onChangeText={(value) => setName(value)}
        style={styles.input}
      />
      <TouchableOpacity onPress={loginHandler(name)}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#123456",
    color: "#fff",
  },
});
