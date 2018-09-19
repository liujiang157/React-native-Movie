import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../Style/style";
import { createStackNavigator } from "react-navigation";

var REQUEST_URL = "http://api.douban.com/v2/movie/search?q=";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: " ", movies: [2, 2] };
  }

  static navigationOptions = {
    title: "搜索"
  };

  onChange(data) {
    this.setState({
      query: data
    });
  }

  toSearch() {
    this.props.navigation.navigate("SearchResult", {
      query: this.state.query,
      title: "搜索结果"
    });
  }

  render() {
    return (
      <View style={[styles.container, { flex: 0 }]}>
        <View
          style={{
            paddingTop: 7,
            paddingLeft: 7,
            paddingRight: 7,
            borderColor: "rgba(100,53,201,0.7)",
            borderBottomWidth: 1
          }}
        >
          <TextInput
            autoFocus
            onChangeText={query =>
              this.setState({
                query
              })
            }
            onSubmitEditing={this.toSearch.bind(this)}
            value={this.state.query}
          />
        </View>
      </View>
    );
  }
}

export default Search;
