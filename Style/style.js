import React, { Component } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tab: {
    height: 50,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  tabText: {
    marginTop: 1,
    color: "#333333",
    fontSize: 13
  },
  selectedTabText: {
    marginTop: 1,
    color: "#1296DB",
    fontSize: 13
  },
  icon: {
    width: 30,
    height: 31,
    resizeMode: "stretch",
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  loaded: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  Image: {
    width: 60,
    height: 80
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.6)",
    paddingBottom: 6,
    paddingTop: 6,
    flex: 1
  },
  itemContent: {
    flex: 1,
    marginLeft: 6,
    marginTop: 6
  },
  itemHeader: {
    fontSize: 15,
    fontFamily: "Times New Roman",
    fontWeight: "300",
    color: "#6435c9",
    marginBottom: 6
  },
  itemMeta: {
    fontSize: 12,
    color: "rgba(0,0,0,0.6)",
    marginBottom: 6
  },
  redText: {
    fontSize: 12,
    color: "#db2828"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default styles;
