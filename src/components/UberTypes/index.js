import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles.js';
import UberTypesRaw from '../UberTypesRaw';

import typesData from '../../assets/data/types';

const UberTypes = (props) => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      {typesData.map((type) => (
        <UberTypesRaw type={type.type, type.price} />
      ))}

      <Pressable onPress={confirm} style={{
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;