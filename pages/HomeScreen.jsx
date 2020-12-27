import React from "react";
import { View, Text, StyleSheet, Linking, Image } from "react-native";
import AppStyles from "../globals/index";
import config from "../configurations/config.json";
import CircularNavButtonComponent from "../components/CircularNavButtonComponent";
import { Actions } from "react-native-router-flux";

export default function HomeScreen() {
  whenClicked = () => {
    Actions.push("Explore");
  };
  return (
    <View
      style={{
        marginTop: 260,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={AppStyles.logo}>{config.appName}</Text>
      <Text style={AppStyles.tagline}>{config.appDescription}</Text>
      <CircularNavButtonComponent onClick={() => whenClicked} />

      <View style={HomeScreenStyle.recommendationContainer}>
        <Image
          source={{ uri: config.authorImage }}
          style={{ width: 50, height: 50, borderRadius: 100, marginBottom: 5 }}
        />
        <Text style={HomeScreenStyle.likeWhatYouSee}>Like what you see?</Text>
        <Text style={HomeScreenStyle.commonFont}>How about showing some</Text>
        <Text style={HomeScreenStyle.commonFont}>
          support and endorsing me on
        </Text>
        <Text
          style={{ color: "#0072b1" }}
          onPress={() => {
            Linking.canOpenURL(config.social.linkedin)
              .then(() => {
                Linking.openURL(config.social.linkedin);
              })
              .catch((err) => {
                alert("The URL cant be opened..");
              });
          }}
        >
          LinkedIn
        </Text>
      </View>
    </View>
  );
}
const HomeScreenStyle = StyleSheet.create({
  likeWhatYouSee: {
    fontWeight: "bold",
    fontFamily: "Comfortaa",
  },
  commonFont: {
    fontFamily: "Comfortaa",
  },
  recommendationContainer: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
