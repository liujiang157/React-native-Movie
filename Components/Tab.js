"use strict";
import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { TabNavigator } from "react-navigation";
import MovieList from "./MovieList";
import Details from "./Details";
import Search from "./Search";
import Mine from "./Mine";
import Login from "./Login";
import SearchResult from "./SearchResult";
import { createStackNavigator } from "react-navigation";

const HomeStack = createStackNavigator(
  {
    MovieList: MovieList,
    Details: Details
  },
  {
    initialRouteName: "MovieList",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#6435c9"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: "bold"
      }
    }
  }
);
const SearchStack = createStackNavigator(
  {
    Search: Search,
    SearchResult: SearchResult
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#6435c9"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: "bold"
      }
    }
  }
);

const MineStack = createStackNavigator(
  {
    Mine: Mine
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#6435c9"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: "bold"
      }
    }
  }
);

export default createBottomTabNavigator({
  MovieList: {
    screen: HomeStack,
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
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: "搜索",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../images/search-grey.png")}
          style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
        />
      )
    }
  },
  Mine: {
    screen: MineStack,
    navigationOptions: {
      tabBarLabel: "我的",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../images/Mine.png")}
          style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
        />
      )
    }
  }
});
