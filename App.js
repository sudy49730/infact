import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { Router, Stack, Scene } from "react-native-router-flux";

import HomeScreen from './pages/HomeScreen';
import ExploreScreen from './pages/ExploreScreen';

import AppStyle from './globals';
import * as Fonts from 'expo-font';
import * as config from './configurations/config.json';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  async function loadFonts() {
    await Fonts.loadAsync({
      'DancingScript': require('./fonts/DancingScript.ttf'),
      'Comfortaa': require('./fonts/Comfortaa.ttf')
    });
  }
  useEffect(() => {
    loadFonts().then(() => {
      setFontsLoaded(true);
    });
  }, []);
  if (!fontsLoaded) {
    return (
      <View style={AppStyle.centralizedContainer}>
        <Text>Loading your experience...</Text>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    );
  }
  else
    return (
      <Router>
        <Stack>
          <Scene key="Home" component={HomeScreen} hideNavBar={true} />
          <Scene key="Explore" component={ExploreScreen} hideNavBar={false} title={config.factsScreenTitle} />
        </Stack>
      </Router>
    );
}