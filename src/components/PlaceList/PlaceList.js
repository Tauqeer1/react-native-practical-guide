import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

export default class PlaceList extends Component {
  render() {
    const placesOutput = this.props.places.map((place, i) => (
      <ListItem
        key={i}
        placeName={place}
        onItemPressed={() => this.props.onItemDeleted(i)}
      />
    ));
    return <View style={styles.listContainer}>{placesOutput}</View>;
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
