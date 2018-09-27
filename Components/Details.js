import React, { Component } from "react";
import { View, Text, Image, Button, ProgressBarAndroid } from "react-native";
import MovieList from "./MovieList";

import { createStackNavigator } from "react-navigation";
import styles from "../Style/style";
var REQUEST_URL = "http://api.douban.com/v2/movie/subject/";
class Details extends Component {
  constructor(props) {
    super(props);
    this.movies = this.props.navigation.state.params.movie;
    this.state = {
      Details: " ",
      loaded: false
    };
    this.fetchdata();
  }
  static navigationOptions = {
    title: "Home"
  };
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.movie.title}`
  });

  fetchdata() {
    REQUEST_URL =
      "http://api.douban.com/v2/movie/subject/" + `${this.movies.id}`;
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responsedata =>
        this.setState({ Details: responsedata, loaded: true })
      )
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <View style={styles.loaded}>
            <ProgressBarAndroid />
          </View>
        </View>
      );
    }
    return (
      <View style={{ flex: 0, justifyContent: "center" }}>
        <Image
          source={{ uri: this.state.Details.images.large }}
          style={[styles.Image, { margin: 15, marginBottom: 0 }]}
        />
        <Text style={{ lineHeight: 25, padding: 15 }}>
          {this.state.Details.summary}
        </Text>
      </View>
    );
  }
}

export default Details;
