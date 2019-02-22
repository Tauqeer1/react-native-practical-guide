import React, { Component } from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";

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
    return (
      <FlatList
        data={this.props.places}
        renderItem={info => (
          <ListItem
            placeName={info.item.value}
            onItemPressed={() => this.props.onItemDeleted(info.item.key)}
          />
        )}
        style={styles.listContainer}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
