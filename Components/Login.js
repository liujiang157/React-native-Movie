import React, { Component } from "react";
import { View, Text, WebView, AsyncStorage, StatusBar } from "react-native";
import MovieList from "./MovieList";
import styles from "../Style/style";
class Login extends Component {
  constructor(props) {
    super(props);
    var api = {
      key: "en8EHepQMjj0wkdBVIltoW7d",
      secret: "6R9qAGir4GeZeINrMbxTdeGiw7aTHVda"
    };

    var oAuth = {
      authBaseUrl: "http://openapi.baidu.com/oauth/2.0/authorize",
      redirectUri: "oob",
      responseType: "token",
      display: "mobile"
    };

    this.state = { token: "" };
    this.authUrl = `${oAuth.authBaseUrl}?client_id=${api.key}&redirect_uri=${
      oAuth.redirectUri
    }&response_type=${oAuth.responseType}&display=${
      oAuth.display
    }&force_login=1`;
  }

  async onNavigationStateChange(state) {
    if (state.title.includes("access_token=")) {
      var str = state.title.substring(
        state.title.indexOf("access_token=") + 13,
        state.title.indexOf("&session_secret=")
      );
      await AsyncStorage.setItem("userToken", str);
      this.props.navigation.navigate("Tab");
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: this.authUrl }}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          domStorageEnabled={false}
          thirdPartyCookiesEnabled={false}
        />
        <StatusBar hidden={false} />
      </View>
    );
  }
}

export default Login;
