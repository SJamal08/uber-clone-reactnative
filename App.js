/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  PermissionsAndroid,
  StatusBar,
} from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';
import Geolocation from '@react-native-community/geolocation';
import Router from './src/navigation/Root';


const App: () => React$Node = () => {

  navigator.geolocation = require('@react-native-community/geolocation');

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App location Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
     // Geolocation.requestAuthorization();
    }
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/*<HomeScreen/>*/}
      {/*<DestinationSearch />*/}
      {/*<SearchResults />*/}

      <Router/>

      </>
  );
};



export default App;
