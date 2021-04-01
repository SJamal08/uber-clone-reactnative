import React from 'react'
import { View, Text, Pressable } from 'react-native'
import UberTypesRaw from '../UberTypesRaw/index.js'
import styles from './styles'
import '../../assets/data/types'
import types from '../../assets/data/types'

const UberTypes = () => {
    return (
        <View>

            {types.map(type => <UberTypesRaw type={type.type} price={type.price}/>)}


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
    )
}

export default UberTypes
