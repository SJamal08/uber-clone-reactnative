import React, { useEffect, useState } from 'react'
import { View, TextInput, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import styles from './styles'

const DestinationSearch = () => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const homePlace = {
        description: 'Home',
        geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
      };
      const workPlace = {
        description: 'Work',
        geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
      };

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
                currentLocation={true}
                currentLocationLabel='Current location'
                suppressDefaultStyles
                styles={{
                    textInput: styles.textInput,
                    container: styles.autocompleteContainer,
                    listView: styles.listView,
                    separator: styles.separator,
                  }}
                fetchDetails
                query={{
                    key: 'AIzaSyDCJ8Aid-IvV49nPEiAVNdH5Z1SNHdK74Q',
                    language: 'en',
                }}
                renderRow={(data) => <PlaceRow data={data} />}
                renderDescription={(data) => data.description || data.vicinity}
                predefinedPlaces={[homePlace, workPlace]}
            />

            <GooglePlacesAutocomplete
                placeholder='Where to'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setDestinationPlace({data, details});
                }}
                suppressDefaultStyles
                styles={{
                    textInput: styles.textInput,
                    container: {
                        ...styles.autocompleteContainer,
                        top: 55,
                    },
                    separator: styles.separator,
                  }}
                fetchDetails
                query={{
                    key: 'AIzaSyDCJ8Aid-IvV49nPEiAVNdH5Z1SNHdK74Q',
                    language: 'en',
                }}
                renderRow={(data) => <PlaceRow data={data} />}
            />
        </View>
        </SafeAreaView>
    )
}

export default DestinationSearch
