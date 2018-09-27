"use strict";
import React, { Component } from "react";
import {
  TouchableNativeFeedback,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableHighlight,
  ListView,
  AsyncStorage
} from "react-native";
import styles from "../Style/style";
import { createStackNavigator } from "react-navigation";

class Search extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      query: "",
      SearchHistory: []
    };
  }

  static navigationOptions = {
    title: "搜索"
  };

  toSearch() {
    var newSearchHistory = [
      ...new Set([this.state.query, ...this.state.SearchHistory])
    ];
    this.setState({
      SearchHistory: newSearchHistory
    });

    AsyncStorage.setItem("searchHistory", JSON.stringify(newSearchHistory));

    this.props.navigation.navigate("SearchResult", {
      query: this.state.query,
      title: "搜索结果"
    });
  }

  async HistorytoSearch(item) {
    await this.setState({
      query: item
    });
    this.toSearch();
  }

  deleteSearchHistory(item) {
    var newSearchHistory = new Set(this.state.SearchHistory);
    newSearchHistory.delete(item);
    this.setState({
      SearchHistory: [...newSearchHistory]
    });
  }

  renderSearchHistoryList(item) {
    return (
      <TouchableNativeFeedback onPress={this.HistorytoSearch.bind(this, item)}>
        <View style={styles.item}>
          <TouchableHighlight
            underlayColor="rgba(34,26,38,0.1)"
            onPress={this.deleteSearchHistory.bind(this, item)}
            style={{ height: 25, width: 25 }}
          >
            <Image
              source={require("../images/delete.png")}
              style={{ height: 24, width: 24, marginBottom: 0, opacity: 0.5 }}
            />
          </TouchableHighlight>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>{item}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            marginTop: 7,
            marginLeft: 7,
            marginRight: 7,
            borderColor: "rgba(100,53,201,0.1)",
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderBottomWidth: 1
          }}
        >
          <TextInput
            onChangeText={query =>
              this.setState({
                query
              })
            }
            onSubmitEditing={this.toSearch.bind(this)}
            value={this.state.query}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.SearchHeader}>搜索历史：</Text>
          <ListView
            dataSource={this.dataSource.cloneWithRows(this.state.SearchHistory)}
            renderRow={this.renderSearchHistoryList.bind(this)}
            enableEmptySections={true}
          />
        </View>
      </View>
    );
  }
}

export default Search;
