// import React from 'react';
// import { View, Text } from 'react-native';
// import { WebView } from 'react-native-webview';

// const OlaTab = ({ coordinates }) => {
//   const { pickupLat, pickupLng, dropLat, dropLng } = coordinates;

//   const pickupName = "User Pickup Location";
//   const dropName = "User Drop Location";

//   // Validate coordinates: Check if all necessary coordinates are available and are valid numbers
//   const isCoordinatesValid = 
//     !isNaN(pickupLat) && !isNaN(pickupLng) && 
//     !isNaN(dropLat) && !isNaN(dropLng) && 
//     pickupLat !== '' && pickupLng !== '' && 
//     dropLat !== '' && dropLng !== '';

//   // If coordinates are valid, construct the Ola URL, otherwise, open the default Ola URL
//   const olaURL = isCoordinatesValid
//     ? `https://book.olacabs.com/?serviceType=p2p&utm_source=widget_on_olacabs&drop_lat=${dropLat}&drop_lng=${dropLng}&drop_name=${encodeURIComponent(dropName)}&lat=${pickupLat}&lng=${pickupLng}&pickup_name=${encodeURIComponent(pickupName)}&pickup=`
//     : 'https://book.olacabs.com'; // Default URL if coordinates are invalid or not entered

//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Ola</Text>
//       <WebView source={{ uri: olaURL }} style={{ flex: 1 }} />
//     </View>
//   );
// };

// export default OlaTab;






import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const OlaTab = ({ coordinates, setOlaFareDetails }) => {
  const { pickupLat, pickupLng, dropLat, dropLng } = coordinates;

  const pickupName = "User Pickup Location";
  const dropName = "User Drop Location";

  const isCoordinatesValid = 
    !isNaN(pickupLat) && !isNaN(pickupLng) && 
    !isNaN(dropLat) && !isNaN(dropLng) && 
    pickupLat !== '' && pickupLng !== '' && 
    dropLat !== '' && dropLng !== '';

  const olaURL = isCoordinatesValid
    ? `https://book.olacabs.com/?serviceType=p2p&utm_source=widget_on_olacabs&drop_lat=${dropLat}&drop_lng=${dropLng}&drop_name=${encodeURIComponent(dropName)}&lat=${pickupLat}&lng=${pickupLng}&pickup_name=${encodeURIComponent(pickupName)}&pickup=`
    : 'https://www.olacabs.com'; // Default URL if coordinates are invalid

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
        source={{ uri: olaURL }} 
        style={{ flex: 1 }} 
        javaScriptEnabled={true}
        onMessage={(event) => {
          const fareDetails = event.nativeEvent.data;
          setOlaFareDetails(fareDetails); // Update state with fare details
        }}
        injectedJavaScript={injectJS}
      />
    </View>
  );
};

export default OlaTab;
