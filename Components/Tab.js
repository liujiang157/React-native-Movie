import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { TabNavigator } from "react-navigation";
import MovieList from "./MovieList";
import Details from "./Details";
import Search from "./Search";
import SearchResult from "./SearchResult";
import { createStackNavigator } from "react-navigation";

const RootStack = createBottomTabNavigator({
  MovieList: {
    screen: MovieList,
    navigationOptions: {
      tabBarLabel: "列表",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../images/Other-grey.png")}
          style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
        />
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: "搜索",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../images/search-grey.png")}
          style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
        />
      )
    }
  }
});

export default RootStack;
