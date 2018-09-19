"use script";
import React, { Component } from "react";
import {
  View,
  ProgressBarAndroid,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  ListView,
  Image
} from "react-native";
import { createStackNavigator } from "react-navigation";

import styles from "../Style/style";

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.query = this.props.navigation.getParam("query", " ");
    this.tit = this.props.navigation.getParam(
      "title",
      "A Nested Details Screen"
    );
    this.state = {
      movies: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      loaded: false
    };
    this.fetchdata();
  }

  static navigationOptions = ({ navigation }) => {
    return { title: navigation.getParam("title", "A Nested Details Screen") };
  };

  fetchdata() {
    REQUEST_URL = "http://api.douban.com/v2/movie/search?q=" + `${this.query}`;
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responsedata => {
        this.setState({
          movies: this.state.movies.cloneWithRows(responsedata.subjects),
          loaded: true
        });
      })
      .done();
  }

  toDetail(movie) {
    this.props.navigation.navigate("Details", {
      movie: movie
    });
  }

  renerMovieList(movie) {
    return (
      <TouchableNativeFeedback onPress={this.toDetail.bind(this, movie)}>
        <View style={styles.item}>
          <View style={styles.itemImage}>
            <Image source={{ uri: movie.images.large }} style={styles.Image} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>{movie.title}</Text>
            <Text style={styles.itemMeta}>
              {movie.original_title}({movie.year})
            </Text>
            <Text style={styles.redText}>{movie.rating.average}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
  render() {
    if (this.query.replace(/\s+/g, "") == "")
      return (
        <View style={[styles.container, { alignItems: "center" }]}>
          <Text style={[styles.redText, { fontSize: 50 }]}>请输入搜索文字</Text>
          <Image
            source={require("../images/notfound.png")}
            style={{ height: 240, width: 180 }}
          />
        </View>
      );
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <View style={styles.loaded}>
            <ProgressBarAndroid styleAttr="Horizontal" />
          </View>
        </View>
      );
    }
    return (
      <ListView
        dataSource={this.state.movies}
        renderRow={this.renerMovieList.bind(this)}
      />
    );
  }
}

export default SearchResult;
