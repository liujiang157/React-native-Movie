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
    this.REQUEST_URL =
      "http://api.douban.com/v2/movie/search?q=" + `${this.query}`;
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      count: 20,
      start: 0,
      total: 0,
      movies: [],
      loaded: false
    };
    this.fetchdata();
  }

  static navigationOptions = ({ navigation }) => {
    return { title: navigation.getParam("title", "A Nested Details Screen") };
  };

  fetchdata() {
    var REQUEST_URL = this.Requesturl();
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responsedata => {
        var newStart = responsedata.start + responsedata.count;
        this.setState({
          movies: responsedata.subjects,
          loaded: true,
          total: responsedata.total,
          start: newStart
        });
      })
      .done();
  }

  toDetail(movie) {
    this.props.navigation.navigate("Details", {
      movie: movie
    });
  }

  onEndReached() {
    if (this.state.total > this.state.start) {
      this.loadmore();
    }
  }
  loadmore() {
    var url = this.Requesturl();
    fetch(url)
      .then(response => response.json())
      .then(responsedata => {
        this.setState({
          movies: [...this.state.movies, ...responsedata.subjects],
          start: responsedata.start + responsedata.count
        });
      })
      .done();
  }
  Requesturl(
    url = this.REQUEST_URL,
    count = this.state.count,
    start = this.state.start
  ) {
    return `${url}&count=${count}&start=${start}`;
  }

  renderFooter() {
    if (this.state.total > this.state.start)
      return (
        <View>
          <ProgressBarAndroid styleAttr="Small" color="rgba(34,26,38,0.1)" />
        </View>
      );
    else
      return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              color: "rgba(34,26,38,0.3)"
            }}
          >
            我是有底线的
          </Text>
        </View>
      );
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
        renderFooter={this.renderFooter.bind(this)}
        onEndReached={this.onEndReached.bind(this)}
        initialListSize={this.state.count}
        dataSource={this.dataSource.cloneWithRows(this.state.movies)}
        renderRow={this.renerMovieList.bind(this)}
      />
    );
  }
}

export default SearchResult;
