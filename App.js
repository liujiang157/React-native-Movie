import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ToolbarAndroid,
  ListView,
  StatusBar
} from "react-native";
import Try from "./Components/Try";
import Tab from "./Components/Tab";
import { createStackNavigator } from "react-navigation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Try />
        <StatusBar hidden={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  }
});
