// import React from 'react';
// import { View, Text } from 'react-native';
// import { WebView } from 'react-native-webview';

// const UberTab = ({ coordinates }) => {
//   const { pickupLat, pickupLng, dropLat, dropLng } = coordinates;

//   const pickupName = "User Pickup Location";
//   const dropName = "User Drop Location";

//   // Validate coordinates: Check if all necessary coordinates are available and are valid numbers
//   const isCoordinatesValid = 
//     !isNaN(pickupLat) && !isNaN(pickupLng) && 
//     !isNaN(dropLat) && !isNaN(dropLng) && 
//     pickupLat !== '' && pickupLng !== '' && 
//     dropLat !== '' && dropLng !== '';

//   // If coordinates are valid, construct the Uber URL, otherwise, open the default Uber URL
//   const uberURL = isCoordinatesValid
//     ? `https://m.uber.com/go/product-selection?delayed=false&drop%5B0%5D=%7B%22addressLine1%22%3A%22${encodeURIComponent(dropName)}%22%2C%22latitude%22%3A${dropLat}%2C%22longitude%22%3A${dropLng}%2C%22provider%22%3A%22google_places%22%7D&pickup=%7B%22addressLine1%22%3A%22${encodeURIComponent(pickupName)}%22%2C%22latitude%22%3A${pickupLat}%2C%22longitude%22%3A${pickupLng}%2C%22provider%22%3A%22google_places%22%7D&redirect=false&uclick_id=6e8a88e0-0183-4ee9-a716-f7eddac67e8d&vehicle=20030191`
//     : 'https://m.uber.com'; // Default URL if coordinates are invalid or not entered

//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Uber</Text>
//       <WebView source={{ uri: uberURL }} style={{ flex: 1 }} />
//     </View>
//   );
// };

// export default UberTab;








import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const UberTab = ({ coordinates, setUberFareDetails }) => {
  const { pickupLat, pickupLng, dropLat, dropLng } = coordinates;

  const pickupName = "User Pickup Location";
  const dropName = "User Drop Location";

  const isCoordinatesValid = 
    !isNaN(pickupLat) && !isNaN(pickupLng) && 
    !isNaN(dropLat) && !isNaN(dropLng) && 
    pickupLat !== '' && pickupLng !== '' && 
    dropLat !== '' && dropLng !== '';

  const uberURL = isCoordinatesValid
    ? `https://m.uber.com/go/product-selection?delayed=false&drop%5B0%5D=%7B%22addressLine1%22%3A%22${encodeURIComponent(dropName)}%22%2C%22latitude%22%3A${dropLat}%2C%22longitude%22%3A${dropLng}%2C%22provider%22%3A%22google_places%22%7D&pickup=%7B%22addressLine1%22%3A%22${encodeURIComponent(pickupName)}%22%2C%22latitude%22%3A${pickupLat}%2C%22longitude%22%3A${pickupLng}%2C%22provider%22%3A%22google_places%22%7D&redirect=false&uclick_id=6e8a88e0-0183-4ee9-a716-f7eddac67e8d&vehicle=20030191`
    : 'https://m.uber.com'; // Default URL if coordinates are invalid

  const injectJS = `
    (function() {
      const fare = document.querySelector('.fare-amount'); // Update selector to match the fare element
      if (fare) {
        return fare.innerText;
      }
      return 'Fare not available';
    })();
  `;

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Uber</Text>
      <WebView 
        source={{ uri: uberURL }} 
        style={{ flex: 1 }} 
        javaScriptEnabled={true}
        onMessage={(event) => {
          const fareDetails = event.nativeEvent.data;
          setUberFareDetails(fareDetails); // Update state with fare details
        }}
        injectedJavaScript={injectJS}
      />
    </View>
  );
};

export default UberTab;
