import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import FactComponent from "../components/FactComponent";
import AppStyle from "../globals";
import * as config from '../configurations/config.json';

export default function ExploreScreen() {
  const [factsLoaded, setFactsLoaded] = useState(false);
  const [factsArray, setFactsArray] = useState([]);

  async function fetchData() {
    await fetch(config.baseURL+"/facts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFactsArray(data);
        setFactsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={AppStyle.centralizedContainer}>
      {factsLoaded ? (
        <FactComponent facts={factsArray} />
      ) : (
        <View>
          <Text>Loading facts...</Text>
          <ActivityIndicator size={"large"} color={"red"} />
        </View>
      )}
    </View>
  );
}
