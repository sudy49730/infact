import React from "react";
import {
  Text,
  Image,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import AppStyle from "../globals";

export default function FactComponent(props) {
  const window = Dimensions.get("window");
  let index = 0;
  return (
    <FlatList
      data={props.facts}
      renderItem={({ item }) => (
        <View style={FactComponentStyle.postContainer}>
          <View style={FactComponentStyle.postImage}>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={{
                flex: 1,
                width: window.width,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={FactComponentStyle.postInfo}>
            <Text style={AppStyle.description}>{item.fact}</Text>
          </View>
        </View>
      )}
    />
  );
}
const FactComponentStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  postContainer: {
    width: Dimensions.get("window").width,
    marginBottom: 4,
  },
  postImage: {
    width: Dimensions.get("window").width,
    height: 250,
  },
  postInfo: {
    width: Dimensions.get("window").width,
    height: 150,
    padding: 3.5,
  },
});
