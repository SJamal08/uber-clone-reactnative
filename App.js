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
import SearchResults from './src/screens/SearchResults';



const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/*<HomeScreen/>*/}
      {/*<DestinationSearch />*/}
      <SearchResults />

      </>
  );
};



export default App;
