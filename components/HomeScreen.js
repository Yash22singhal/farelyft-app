// import React from 'react';
// import { View, Text } from 'react-native';
// import { WebView } from 'react-native-webview'; // Import WebView to display Uber and Ola URLs
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native'; // Only use this in the App.js or main entry point

// // Coordinates for pickup and drop locations (for now)
// const pickupCoords = {
//   lat: 28.66197529999999, // Example latitude for pickup (Punjabi Bagh)
//   lng: 77.1241557, // Example longitude for pickup (Punjabi Bagh)
// };
// const dropCoords = {
//   lat: 28.6655211, // Example latitude for drop (Karam Pura)
//   lng: 77.1529569, // Example longitude for drop (Karam Pura)
// };

// // Location names for pickup and drop (these will be the names shown in the Uber URL)
// const pickupName = "Punjabi Bagh, Delhi";
// const dropName = "Karam Pura, Delhi";

// // Uber URL format with dynamic coordinates and location names
// const uberURL = `https://m.uber.com/go/product-selection?delayed=false&drop%5B0%5D=%7B%22addressLine1%22%3A%22${encodeURIComponent(dropName)}%22%2C%22latitude%22%3A${dropCoords.lat}%2C%22longitude%22%3A${dropCoords.lng}%2C%22provider%22%3A%22google_places%22%7D&pickup=%7B%22addressLine1%22%3A%22${encodeURIComponent(pickupName)}%22%2C%22latitude%22%3A${pickupCoords.lat}%2C%22longitude%22%3A${pickupCoords.lng}%2C%22provider%22%3A%22google_places%22%7D&redirect=false&uclick_id=6e8a88e0-0183-4ee9-a716-f7eddac67e8d&vehicle=20030191`;

// // Ola URL format (same as before)
// const olaURL = `https://book.olacabs.com/?serviceType=p2p&utm_source=widget_on_olacabs&drop_lat=${dropCoords.lat}&drop_lng=${dropCoords.lng}&drop_name=${encodeURIComponent(dropName)}&lat=${pickupCoords.lat}&lng=${pickupCoords.lng}&pickup_name=${encodeURIComponent(pickupName)}&pickup=`;

// // UberTab Component
// const UberTab = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Uber</Text>
//       <WebView source={{ uri: uberURL }} style={{ flex: 1 }} />
//     </View>
//   );
// };

// // OlaTab Component
// const OlaTab = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Ola</Text>
//       <WebView source={{ uri: olaURL }} style={{ flex: 1 }} />
//     </View>
//   );
// };

// // Bottom Tab Navigator Setup
// const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   return (
//     <Tab.Navigator initialRouteName="Uber">
//       <Tab.Screen name="Uber" component={UberTab} />
//       <Tab.Screen name="Ola" component={OlaTab} />
//     </Tab.Navigator>
//   );
// };

// export default HomeScreen;








// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';

// const HomeScreen = ({ setCoordinates }) => {
//   const [pickupLat, setPickupLat] = useState('');
//   const [pickupLng, setPickupLng] = useState('');
//   const [dropLat, setDropLat] = useState('');
//   const [dropLng, setDropLng] = useState('');

//   // Function to handle coordinate changes
//   const handleCoordinateChange = () => {
//       setCoordinates({
//         pickupLat: parseFloat(pickupLat),
//         pickupLng: parseFloat(pickupLng),
//         dropLat: parseFloat(dropLat),
//         dropLng: parseFloat(dropLng),
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Enter Coordinates</Text>

//       <Text style={styles.label}>Pickup Latitude:</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         value={pickupLat}
//         onChangeText={setPickupLat}
//         onBlur={handleCoordinateChange} // Update on blur (when focus leaves input)
//       />

//       <Text style={styles.label}>Pickup Longitude:</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         value={pickupLng}
//         onChangeText={setPickupLng}
//         onBlur={handleCoordinateChange}
//       />

//       <Text style={styles.label}>Drop Latitude:</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         value={dropLat}
//         onChangeText={setDropLat}
//         onBlur={handleCoordinateChange}
//       />

//       <Text style={styles.label}>Drop Longitude:</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         value={dropLng}
//         onChangeText={setDropLng}
//         onBlur={handleCoordinateChange}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginTop: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginTop: 5,
//     marginBottom: 15,
//     paddingLeft: 10,
//     fontSize: 16,
//   },
// });

// export default HomeScreen;













import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for the "X" icon and pin icon

const MAPBOX_API_KEY = 'pk.eyJ1IjoidWdhbmRhYnVzaW5lc3NwYWdlcyIsImEiOiJjbTM3a2s4d20wZ2xuMmpzZXJqa25ibmMyIn0.TPTYsqPdLW_nloMWgx_C4w';

const HomeScreen = ({ setCoordinates }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [pickupSearchQuery, setPickupSearchQuery] = useState('');
  const [dropoffSearchQuery, setDropoffSearchQuery] = useState('');
  const [isPickupFocused, setIsPickupFocused] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const mapRef = useRef(null);

  // Request user location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  // Fetch autocomplete results for pickup and dropoff
  const handleSearchChange = async (text, isPickup) => {
    setIsPickupFocused(isPickup);
    if (isPickup) setPickupSearchQuery(text);
    else setDropoffSearchQuery(text);

    if (text.length > 2) {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json`,
          {
            params: {
              access_token: MAPBOX_API_KEY,
              autocomplete: true,
              limit: 5,
            },
          }
        );
        const results = response.data.features.map((feature) => ({
          id: feature.id,
          address: feature.place_name,
          latitude: feature.center[1],
          longitude: feature.center[0],
        }));
        setAutocompleteResults([
          { id: 'current-location', address: 'Current Location', latitude: currentLocation.latitude, longitude: currentLocation.longitude, icon: 'location' },
          { id: 'choose-on-map', address: 'Choose on Map', latitude: null, longitude: null, icon: 'map' },
          ...results,
        ]);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch autocomplete results');
      }
    } else {
      setAutocompleteResults([]);
    }
  };

  // Handle selecting pickup or dropoff location
  const handleSelectLocation = (location, isPickup) => {
    if (location.id === 'choose-on-map') return; // Skip if "Choose on Map" is selected

    if (isPickup) {
      setPickup([location.latitude, location.longitude]);
      setPickupSearchQuery(location.address);
    } else {
      setDropoff([location.latitude, location.longitude]);
      setDropoffSearchQuery(location.address);
    }
    setAutocompleteResults([]);
    handleCoordinateChange();
  };

  // Handle selecting location on map
  const handleMapPress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    if (isPickupFocused) {
      setPickup([latitude, longitude]);
      setPickupSearchQuery('Selected on map');
    } else {
      setDropoff([latitude, longitude]);
      setDropoffSearchQuery('Selected on map');
    }
    setAutocompleteResults([]);
    handleCoordinateChange();
  };

  // Fetch route between pickup and dropoff locations
  const fetchRoute = async () => {
    if (pickup && dropoff) {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${pickup[1]},${pickup[0]};${dropoff[1]},${dropoff[0]}`,
          {
            params: {
              access_token: MAPBOX_API_KEY,
              geometries: 'geojson',
            },
          }
        );
        const route = response.data.routes[0].geometry.coordinates.map((coord) => ({
          latitude: coord[1],
          longitude: coord[0],
        }));
        setRouteCoordinates(route);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch route directions');
      }
    }
  };

  // Update coordinates and route whenever pickup or dropoff changes
  const handleCoordinateChange = () => {
    setCoordinates({
      pickupLat: pickup ? pickup[0] : null,
      pickupLng: pickup ? pickup[1] : null,
      dropLat: dropoff ? dropoff[0] : null,
      dropLng: dropoff ? dropoff[1] : null,
    });
    fetchRoute(); // Fetch route on coordinate change

    if (pickup && dropoff) {
      mapRef.current.fitToCoordinates(
        [
          { latitude: pickup[0], longitude: pickup[1] },
          { latitude: dropoff[0], longitude: dropoff[1] },
        ],
        {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        }
      );
    }
  };

  // Function to clear pickup or dropoff
  const clearLocation = (isPickup) => {
    if (isPickup) {
      setPickup(null);
      setPickupSearchQuery('');
    } else {
      setDropoff(null);
      setDropoffSearchQuery('');
    }
    handleCoordinateChange();
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        {/* Pickup Input Field */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Pickup Location"
            value={pickupSearchQuery}
            onChangeText={(text) => handleSearchChange(text, true)}
            onBlur={handleCoordinateChange} // Trigger coordinate change on blur
          />
          {pickup && (
            <TouchableOpacity onPress={() => clearLocation(true)} style={styles.clearButton}>
              <Ionicons name="close-circle" size={24} color="gray" />
            </TouchableOpacity>
          )}
        </View>

        {isPickupFocused && autocompleteResults.length > 0 && pickupSearchQuery && (
          <FlatList
            data={autocompleteResults}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.suggestionItem}>
                <View style={styles.suggestionRow}>
                  {item.icon && <Ionicons name={item.icon} size={20} color="gray" />}
                  <Text onPress={() => handleSelectLocation(item, true)}>{item.address}</Text>
                </View>
              </View>
            )}
            style={styles.suggestionsList}
          />
        )}

        {/* Dropoff Input Field */}
        <View style={[styles.inputContainer, {top: 75}]}>
          <TextInput
            style={styles.input}
            placeholder="Enter Dropoff Location"
            value={dropoffSearchQuery}
            onChangeText={(text) => handleSearchChange(text, false)}
            onBlur={handleCoordinateChange} // Trigger coordinate change on blur
          />
          {dropoff && (
            <TouchableOpacity onPress={() => clearLocation(false)} style={styles.clearButton}>
              <Ionicons name="close-circle" size={24} color="gray" />
            </TouchableOpacity>
          )}
        </View>

        {!isPickupFocused && autocompleteResults.length > 0 && dropoffSearchQuery && (
          <FlatList
            data={autocompleteResults}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.suggestionItem}>
                <View style={styles.suggestionRow}>
                  {item.icon && <Ionicons name={item.icon} size={20} color="gray" />}
                  <Text onPress={() => handleSelectLocation(item, false)}>{item.address}</Text>
                </View>
              </View>
            )}
            style={styles.suggestionsList}
          />
        )}

        {/* Map View */}
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={handleMapPress}
        >
          {pickup && <Marker coordinate={{ latitude: pickup[0], longitude: pickup[1] }} title="Pickup" />}
          {dropoff && <Marker coordinate={{ latitude: dropoff[0], longitude: dropoff[1] }} title="Dropoff" />}
          {routeCoordinates.length > 0 && <Polyline coordinates={routeCoordinates} strokeWidth={3} strokeColor="blue" />}
        </MapView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  inputContainer: {
    position: 'absolute',
    top: 10,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    zIndex: 2, // Ensures input fields are on top of the map
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  suggestionsList: {
    position: 'absolute',
    top: 70, // Adjust this to avoid overlapping with the input field
    left: 20,
    right: 20,
    maxHeight: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    zIndex: 3, // Keeps suggestions above the map and input field
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  suggestionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
