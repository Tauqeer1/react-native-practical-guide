import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // Touchable is used for making item clickable(touchable)
      <TouchableWithoutFeedback onPress={this.props.onItemPressed}>
        <View style={styles.listItem}>
          <Text>{this.props.placeName}</Text>
        </View>
      </TouchableWithoutFeedback>
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
