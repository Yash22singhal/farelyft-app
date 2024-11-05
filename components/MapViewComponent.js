import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapViewComponent = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

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
      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        value={pickup}
        onChangeText={setPickup}
      />
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
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
        <Marker
          coordinate={currentLocation}
          title="Your Location"
          description="This is your current location"
        />
        {/* Optional: Add additional markers for pickup and destination */}
        {pickup && (
          <Marker
            coordinate={{ latitude: currentLocation.latitude + 0.01, longitude: currentLocation.longitude }}
            title="Pickup"
            description={pickup}
          />
        )}
        {destination && (
          <Marker
            coordinate={{ latitude: currentLocation.latitude + 0.02, longitude: currentLocation.longitude }}
            title="Destination"
            description={destination}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  map: {
    flex: 1,
    marginTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapViewComponent;
