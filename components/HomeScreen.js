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








import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const HomeScreen = ({ setCoordinates }) => {
  const [pickupLat, setPickupLat] = useState('');
  const [pickupLng, setPickupLng] = useState('');
  const [dropLat, setDropLat] = useState('');
  const [dropLng, setDropLng] = useState('');

  // Function to handle coordinate changes
  const handleCoordinateChange = () => {
      setCoordinates({
        pickupLat: parseFloat(pickupLat),
        pickupLng: parseFloat(pickupLng),
        dropLat: parseFloat(dropLat),
        dropLng: parseFloat(dropLng),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Coordinates</Text>

      <Text style={styles.label}>Pickup Latitude:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pickupLat}
        onChangeText={setPickupLat}
        onBlur={handleCoordinateChange} // Update on blur (when focus leaves input)
      />

      <Text style={styles.label}>Pickup Longitude:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pickupLng}
        onChangeText={setPickupLng}
        onBlur={handleCoordinateChange}
      />

      <Text style={styles.label}>Drop Latitude:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={dropLat}
        onChangeText={setDropLat}
        onBlur={handleCoordinateChange}
      />

      <Text style={styles.label}>Drop Longitude:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={dropLng}
        onChangeText={setDropLng}
        onBlur={handleCoordinateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
});

export default HomeScreen;
