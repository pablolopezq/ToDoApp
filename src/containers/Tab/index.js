import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import All from "../All";
import Active from "../Active";
import Checked from "../Checked";

export default (Tab = createMaterialBottomTabNavigator(
  {
    All: { screen: All },
    Active: { screen: Active },
    Checked: { screen: Checked }
  },
  {
    initialRouteName: "All",
    activeTintColor: "#f0edf6",
    inactiveTintColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" },
    labeled: false
  }
));
