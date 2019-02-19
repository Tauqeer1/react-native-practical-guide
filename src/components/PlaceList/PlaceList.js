import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";

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
    return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
