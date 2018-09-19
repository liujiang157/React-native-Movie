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

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      movies: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
    this.fetchdata();
  }
  static navigationOptions = {
    title: "Home"
  };

  fetchdata() {
    var REQUEST_URL = "http://api.douban.com/v2/movie/top250";
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

export default MovieList;
