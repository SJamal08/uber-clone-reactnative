import React, { useEffect, useState } from 'react'
import { View, TextInput, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles'

const DestinationSearch = () => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    {/*useEffect(() => {
        console.warn('useEffect is called');
        if (originPlace && destinationPlace) {
            console.warn('Redirect to results');
        }
    }, [originPlace, destinationPlace]);*/}

    return (
        <SafeAreaView>
        <View style={styles.container}>
        <GooglePlacesAutocomplete
                placeholder='Where from'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setOriginPlace({data, details})
                }}
                styles={{
                    textInput: styles.textInput,
                  }}
                fetchDetails
                query={{
                    key: 'AIzaSyDCJ8Aid-IvV49nPEiAVNdH5Z1SNHdK74Q',
                    language: 'en',
                }}
            />

            <GooglePlacesAutocomplete
                placeholder='From to'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setDestinationPlace({data, details});
                }}
                styles={{
                    textInput: styles.textInput,
                  }}
                fetchDetails
                query={{
                    key: 'YOUR_SECRET_KEY',
                    language: 'en',
                }}
            />
        </View>
        </SafeAreaView>
    )
}

export default DestinationSearch
