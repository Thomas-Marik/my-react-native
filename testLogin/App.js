import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/login";

export default function App() {
  const [logged, setLogged] = useState();
  const [user, setUser] = useState("");
  const loginHandler = (name) => {
    setUser(name);
    setLogged(true);
    useEffect(() => {}, [logged]);
  };
  if (logged) {
    return (
      <View style={styles.container}>
        <Text>{user} Start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return <Login loginHandler={loginHandler} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
