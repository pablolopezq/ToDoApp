import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tab from "./src/containers/Tab";
import { Header } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={{ text: "Reactive ToDo's", style: { color: "white" } }}
          backgroundColor="#694fad"
        />
        <Tab />
      </View>
    );
  }
}
