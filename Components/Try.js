import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import MovieList from "./MovieList";
import React, { Component } from "react";
import {
  View,
  ProgressBarAndroid,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ListView,
  Image,
  Button,
  AsyncStorage
} from "react-native";
import styles from "../Style/style";
import Login from "./Login";
import Tab from "./Tab";
import AuthLoadingScreen from "./AuthLoading";
export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Tab: Tab,
    Login: Login
  },
  {
    initialRouteName: "AuthLoading"
  }
);
