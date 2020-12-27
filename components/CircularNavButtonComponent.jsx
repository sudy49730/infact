import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function CircularNavButtonComponent(props) {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={props.onClick()}
      style={CircularNavButtonStyle.button}
    >
      <Text style={CircularNavButtonStyle.buttonText}>Get Started</Text>
    </TouchableOpacity>
  );
}

const CircularNavButtonStyle = StyleSheet.create({
  button: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 0,
    width: 150,
    padding: 15,
    backgroundColor: "#FFC72C",
  },
  buttonText: {
    fontFamily: "Comfortaa",
    paddingBottom: 2.5,
    color: "white",
  },
});
