import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.listItem}>
        <Text>{this.props.placeName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee"
  }
});
