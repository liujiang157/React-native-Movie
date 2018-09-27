import React, { Component } from "react";
import { View, Text, WebView, Button, AsyncStorage } from "react-native";
import Login from "./Login";
import styles from "../Style/style";

class Mine extends Component {
  constructor(props) {
    super(props);
  }

  _signOutAsync = async () => {
    await AsyncStorage.removeItem("userToken");
    this.props.navigation.navigate("AuthLoading");
  };
  render() {
    return (
      <View style={[styles.container, styles.loaded]}>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }
}

export default Mine;
