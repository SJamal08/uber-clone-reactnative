/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/HomeScreen';



const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/*<HomeScreen/>*/}
      <DestinationSearch />

      </>
  );
};



export default App;
