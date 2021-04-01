import React from 'react'
import { View, Text } from 'react-native'
import CovidMessage from '../CovidMessage'
import HomeSearch from '../HomeSearch'

const HomeMap = () => {
    return (
        <View>

            <View
             style={{
                height: 300,
                backgroundColor: '#a0abff',
                justifyContent: 'center',
                alignItems: 'center',
            }} >

                <Text>I'm a map</Text>
                
            </View>
            {/*Covid message <CovidMessage />*/}
            

            {/*Bottom Component <HomeSearch/> */}
            
        </View>
    )
}

export default HomeMap
