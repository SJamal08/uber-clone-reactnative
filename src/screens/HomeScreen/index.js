import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import HomeMap from '../../components/HomeMap'
import HomeSearch from '../../components/HomeSearch'
import CovidMessage from '../../components/CovidMessage'

const HomeScreen = () => {
    return (
        <View >
            <View style={{height: Dimensions.get('window').height - 400}}>
                <HomeMap />
            </View>

        <CovidMessage />

        <HomeSearch />

        </View>

    )
}

export default HomeScreen
