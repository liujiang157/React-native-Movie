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

import MovieList from "./Components/MovieList";
import Details from "./Components/Details";
import Search from "./Components/Search";
import SearchResult from "./Components/SearchResult";
import Tab from "./Components/Tab";

import { createStackNavigator } from "react-navigation";

const HomeStack = createStackNavigator(
  {
    Tab: Tab,
    Search: Search,
    SearchResult: SearchResult,
    MovieList: MovieList,
    Details: Details
  },
  {
    initialRouteName: "Tab",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#6435c9"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeStack />
        <StatusBar backgroundColor={"#6435c9"} hidden={true} />
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
