
import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const QuickRide = ({ coordinates, setQuickRideFareDetails }) => {
  const { pickupLat, pickupLng, dropLat, dropLng } = coordinates;

  const pickupName = "User Pickup Location";
  const dropName = "User Drop Location";

  const isCoordinatesValid = 
    !isNaN(pickupLat) && !isNaN(pickupLng) && 
    !isNaN(dropLat) && !isNaN(dropLng) && 
    pickupLat !== '' && pickupLng !== '' && 
    dropLat !== '' && dropLng !== '';

  const quickRideURL = isCoordinatesValid
    ? `https://pwa.getquickride.com/#/taxi-booking?pickup=%7B%22latitude%22:${pickupLat},%22longitude%22:${pickupLng},%22address%22:%22${pickupName}%22%7D&drop=%7B%22latitude%22:${dropLat},%22longitude%22:${dropLng},%22address%22:%22${dropName}%22%7D`
    : 'https://quickride.in/'; // Default URL if coordinates are invalid

  const injectJS = `
    (function() {
      const fare = document.querySelector('.price'); // Update selector to match the fare element
      if (fare) {
        return fare.innerText;
      }
      return 'Fare not available';
    })();
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView 
        source={{ uri: quickRideURL }} 
        style={{ flex: 1 }} 
        javaScriptEnabled={true}
        onMessage={(event) => {
          const fareDetails = event.nativeEvent.data;
          setQuickRideFareDetails(fareDetails); // Update state with fare details
        }}
        injectedJavaScript={injectJS}
      />
    </View>
  );
};

export default QuickRide;
