import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: "",
    places: []
  };

  constructor(props) {
    super(props);
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() !== "") {
      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName)
        };
        /* 
        Debug to find why this is not working
        return {
          places: prevState.places.push(prevState.placeName)
        }; */
      });
    }
  };
  render() {
    const placesOutput = this.state.places.map((place, index) => (
      <Text key={index}>{place}</Text>
    ));
    return (
      // Container view / page view
      <View style={styles.container}>
        {/* nested view container for input and button */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column' (by default)
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
