import React, { Component } from "react";
import { Platform, StyleSheet, TextInput, View, Button } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./src/assets/beautiful-place.jpg";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {
    places: []
  };

  constructor(props) {
    super(props);
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: placeImage
        })
      };
    });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.key !== key)
      };
    });
  };

  render() {
    return (
      // Container view / page view
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column' (by default)
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
