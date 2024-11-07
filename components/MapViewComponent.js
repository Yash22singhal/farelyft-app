// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, TextInput, Text, Alert } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';

// const MapViewComponent = () => {
//   const [pickup, setPickup] = useState('');
//   const [destination, setDestination] = useState('');
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState('');

//   useEffect(() => {
//     (async () => {
//       // Request permission to access location
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       // Get current location
//       let location = await Location.getCurrentPositionAsync({});
//       setCurrentLocation({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });
//     })();
//   }, []);

//   // Check if currentLocation is set
//   if (!currentLocation) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Pickup Location"
//         value={pickup}
//         onChangeText={setPickup}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Destination"
//         value={destination}
//         onChangeText={setDestination}
//       />
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: currentLocation.latitude,
//           longitude: currentLocation.longitude,
//           latitudeDelta: 0.005,
//           longitudeDelta: 0.005,
//         }}
//         showsUserLocation={true} // Show user's current location on the map
//       >
//         <Marker
//           coordinate={currentLocation}
//           title="Your Location"
//           description="This is your current location"
//         />
//         {/* Optional: Add additional markers for pickup and destination */}
//         {pickup && (
//           <Marker
//             coordinate={{ latitude: currentLocation.latitude + 0.01, longitude: currentLocation.longitude }}
//             title="Pickup"
//             description={pickup}
//           />
//         )}
//         {destination && (
//           <Marker
//             coordinate={{ latitude: currentLocation.latitude + 0.02, longitude: currentLocation.longitude }}
//             title="Destination"
//             description={destination}
//           />
//         )}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   input: {
//     height: 40,
//     borderColor: '#cccccc',
//     borderWidth: 1,
//     margin: 10,
//     padding: 10,
//     borderRadius: 5,
//   },
//   map: {
//     flex: 1,
//     marginTop: 10,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default MapViewComponent;









// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Alert } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';

// const MapViewComponent = ({ setPickup, setDropoff, pickup, dropoff }) => {
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState('');

//   useEffect(() => {
//     (async () => {
//       // Request permission to access location
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       // Get current location
//       let location = await Location.getCurrentPositionAsync({});
//       setCurrentLocation({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });
//     })();
//   }, []);

//   // Check if currentLocation is set
//   if (!currentLocation) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: currentLocation.latitude,
//           longitude: currentLocation.longitude,
//           latitudeDelta: 0.005,
//           longitudeDelta: 0.005,
//         }}
//         showsUserLocation={true} // Show user's current location on the map
//       >
//         <Marker
//           coordinate={currentLocation}
//           title="Your Location"
//           description="This is your current location"
//         />
//         {/* Optional: Add additional markers for pickup and destination */}
//         {pickup && (
//           <Marker
//             coordinate={{ latitude: pickup[0], longitude: pickup[1] }}
//             title="Pickup"
//             description="Pickup Location"
//           />
//         )}
//         {dropoff && (
//           <Marker
//             coordinate={{ latitude: dropoff[0], longitude: dropoff[1] }}
//             title="Dropoff"
//             description="Dropoff Location"
//           />
//         )}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//     marginTop: 10,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default MapViewComponent;











import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';

const MAPBOX_API_KEY = 'pk.eyJ1IjoidWdhbmRhYnVzaW5lc3NwYWdlcyIsImEiOiJjbTM3a2s4d20wZ2xuMmpzZXJqa25ibmMyIn0.TPTYsqPdLW_nloMWgx_C4w';  // Replace with your actual Mapbox API key

const MapViewComponent = ({ setPickup, setDropoff, pickup, dropoff }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [pickupSearchQuery, setPickupSearchQuery] = useState('');
  const [dropoffSearchQuery, setDropoffSearchQuery] = useState('');

  useEffect(() => {
    (async () => {
      // Request permission to access location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // Get current location
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  // Handle search input change for pickup and fetch autocomplete results
  const handlePickupSearchChange = async (text) => {
    setPickupSearchQuery(text);
    
    if (text.length > 2) {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json`,
          {
            params: {
              access_token: MAPBOX_API_KEY,
              autocomplete: true,
              limit: 5,  // Limit the number of results
            },
          }
        );

        const results = response.data.features.map((feature) => ({
          id: feature.id,
          address: feature.place_name,
          latitude: feature.center[1],
          longitude: feature.center[0],
        }));

        setAutocompleteResults(results);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch autocomplete results');
      }
    } else {
      setAutocompleteResults([]);
    }
  };

  // Handle search input change for dropoff and fetch autocomplete results
  const handleDropoffSearchChange = async (text) => {
    setDropoffSearchQuery(text);
    
    if (text.length > 2) {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json`,
          {
            params: {
              access_token: MAPBOX_API_KEY,
              autocomplete: true,
              limit: 5,  // Limit the number of results
            },
          }
        );

        const results = response.data.features.map((feature) => ({
          id: feature.id,
          address: feature.place_name,
          latitude: feature.center[1],
          longitude: feature.center[0],
        }));

        setAutocompleteResults(results);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch autocomplete results');
      }
    } else {
      setAutocompleteResults([]);
    }
  };

  // Handle selecting a pickup location
  const handleSelectPickupLocation = (location) => {
    setPickup([location.latitude, location.longitude]);
    setPickupSearchQuery('');
    setAutocompleteResults([]);
  };

  // Handle selecting a dropoff location
  const handleSelectDropoffLocation = (location) => {
    setDropoff([location.latitude, location.longitude]);
    setDropoffSearchQuery('');
    setAutocompleteResults([]);
  };

  // Check if currentLocation is set
  if (!currentLocation) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Pickup Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter Pickup Location"
        value={pickupSearchQuery}
        onChangeText={handlePickupSearchChange}
      />

      {autocompleteResults.length > 0 && pickupSearchQuery && (
        <FlatList
          data={autocompleteResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.suggestionItem}>
              <Text onPress={() => handleSelectPickupLocation(item)}>{item.address}</Text>
            </View>
          )}
        />
      )}

      {/* Dropoff Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter Dropoff Location"
        value={dropoffSearchQuery}
        onChangeText={handleDropoffSearchChange}
      />

      {autocompleteResults.length > 0 && dropoffSearchQuery && (
        <FlatList
          data={autocompleteResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.suggestionItem}>
              <Text onPress={() => handleSelectDropoffLocation(item)}>{item.address}</Text>
            </View>
          )}
        />
      )}

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true} // Show user's current location on the map
      >
        <Marker coordinate={currentLocation} title="Your Location" description="This is your current location" />
        
        {/* Pickup and Dropoff Markers */}
        {pickup && (
          <Marker
            coordinate={{ latitude: pickup[0], longitude: pickup[1] }}
            title="Pickup"
            description="Pickup Location"
          />
        )}
        {dropoff && (
          <Marker
            coordinate={{ latitude: dropoff[0], longitude: dropoff[1] }}
            title="Dropoff"
            description="Dropoff Location"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  map: {
    flex: 1,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default MapViewComponent;
