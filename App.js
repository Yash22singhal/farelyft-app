// // import React, { useState } from 'react';
// // import { StyleSheet, View, Button, Alert } from 'react-native';
// // import Header from './components/Header';
// // import RideList from './components/RideList';
// // import Footer from './components/Footer';
// // import MapViewComponent from './components/MapViewComponent';
// // import UberLogin from './components/UberLogin';

// // export default function App() {
// //   const [isLoginModalVisible, setLoginModalVisible] = useState(false);

// //   const handleLoginSuccess = (authCode) => {
// //     // You can now exchange this authorization code for an access token
// //     Alert.alert('Login Successful', `Authorization code: ${authCode}`);
// //     console.log('Received auth code:', authCode);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Header />
// //       <MapViewComponent />
// //       <RideList />
// //       <Button
// //         title="Login with Uber"
// //         onPress={() => setLoginModalVisible(true)}
// //       />
// //       <Footer />

// //       {/* Uber Login Modal */}
// //       <UberLogin
// //         isVisible={isLoginModalVisible}
// //         onClose={() => setLoginModalVisible(false)}
// //         onLoginSuccess={handleLoginSuccess}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //   },
// // });




// // import React from 'react';
// // import { Button, StyleSheet, View } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import WebViewScreen from './components/WebViewScreen'; // Import the WebView screen

// // const Stack = createStackNavigator();

// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="Home">
// //         <Stack.Screen name="Home" component={HomeScreen} />
// //         <Stack.Screen name="WebView" component={WebViewScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // const HomeScreen = ({ navigation }) => {
// //   const openUberEstimatePage = () => {
// //     //const url = 'https://www.uber.com/global/en/price-estimate/'; // Uber Price Estimate URL
// //     const url = 'https://www.uber.com/global/en/sign-in/'; // Uber Sign In URL
// //     navigation.navigate('WebView', { url });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Button title="Get Uber Price Estimate" onPress={openUberEstimatePage} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });

// // export default App;





// // import React from 'react';
// // import { StyleSheet, View, Button } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import WebView from 'react-native-webview';

// // const Stack = createStackNavigator();

// // // Function to generate Uber fare estimate URL
// // const generateUberEstimateUrl = (pickup, dropoff) => {
// //   return `https://m.uber.com/go/product-selection?pickup=%7B%22latitude%22%3A${pickup.latitude}%2C%22longitude%22%3A${pickup.longitude}%7D&drop%5B0%5D=%7B%22latitude%22%3A${dropoff.latitude}%2C%22longitude%22%3A${dropoff.longitude}%7D`;
// // };

// // // Function to generate Ola fare estimate URL based on pickup and dropoff
// // const generateOlaEstimateUrl = (pickup, dropoff) => {
// //   const dropName = encodeURIComponent("Pacific Mall NSP Pitampura, Pitampura, New Delhi, Delhi, 110088, India"); // Example drop name
// //   const pickupName = encodeURIComponent("Punjabi Bagh Terminal, West Punjabi Bagh, Punjabi Bagh, JJ Colony, Moti Nagar, Delhi, 110026, India"); // Example pickup name

// //   return `https://book.olacabs.com/?serviceType=p2p&utm_source=widget_on_olacabs&drop_lat=${dropoff.latitude}&drop_lng=${dropoff.longitude}&drop_name=${dropName}&lat=${pickup.latitude}&lng=${pickup.longitude}&pickup_name=${pickupName}&pickup=`;
// // };

// // // WebView component to display the fare estimate page for Uber and Ola
// // const RideWebView = ({ route }) => {
// //   const { url } = route.params;
// //   return (
// //     <View style={{ flex: 1 }}>
// //       <WebView source={{ uri: url }} style={{ flex: 1 }} />
// //     </View>
// //   );
// // };

// // // Home screen component with buttons to navigate to Uber and Ola fare estimates
// // const HomeScreen = ({ navigation }) => {
// //   const pickup = { latitude: 28.6619753, longitude: 77.1241557 }; // Default pickup location
// //   const dropoff = { latitude: 28.6655211, longitude: 77.1529569 }; // Default dropoff location

// //   return (
// //     <View style={styles.container}>
// //       <Button
// //         title="Get Uber Fare Estimate"
// //         onPress={() => {
// //           const url = generateUberEstimateUrl(pickup, dropoff);
// //           navigation.navigate('FareEstimate', { url });
// //         }}
// //       />
// //       <Button
// //         title="Get Ola Fare Estimate"
// //         onPress={() => {
// //           const url = generateOlaEstimateUrl(pickup, dropoff);
// //           navigation.navigate('FareEstimate', { url });
// //         }}
// //       />
// //     </View>
// //   );
// // };

// // // Main App component with Stack Navigation
// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="Home">
// //         <Stack.Screen name="Home" component={HomeScreen} />
// //         <Stack.Screen name="FareEstimate" component={RideWebView} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });

// // export default App;








// // import React, { useState } from 'react';
// // import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import WebView from 'react-native-webview';

// // const Stack = createStackNavigator();

// // const RideWebView = ({ route }) => {
// //   const { url } = route.params;
// //   return (
// //     <View style={{ flex: 1 }}>
// //       <WebView source={{ uri: url }} style={{ flex: 1 }} />
// //     </View>
// //   );
// // };

// // // Function to generate Uber fare estimate URL
// // const generateUberEstimateUrl = (pickup, dropoff) => {
// //   return `https://m.uber.com/go/product-selection?pickup=%7B%22latitude%22%3A${pickup.latitude}%2C%22longitude%22%3A${pickup.longitude}%7D&drop%5B0%5D=%7B%22latitude%22%3A${dropoff.latitude}%2C%22longitude%22%3A${dropoff.longitude}%7D`;
// // };

// // // Function to generate Ola fare estimate URL based on pickup and dropoff
// // const generateOlaEstimateUrl = (pickup, dropoff) => {
// //   const dropName = encodeURIComponent("Pacific Mall NSP Pitampura, Pitampura, New Delhi, Delhi, 110088, India"); // Example drop name
// //   const pickupName = encodeURIComponent("Punjabi Bagh Terminal, West Punjabi Bagh, Punjabi Bagh, JJ Colony, Moti Nagar, Delhi, 110026, India"); // Example pickup name

// //   return `https://book.olacabs.com/?serviceType=p2p&utm_source=widget_on_olacabs&drop_lat=${dropoff.latitude}&drop_lng=${dropoff.longitude}&drop_name=${dropName}&lat=${pickup.latitude}&lng=${pickup.longitude}&pickup_name=${pickupName}&pickup=`;
// // };

// // const HomeScreen = ({ navigation }) => {
// //   const [pickup, setPickup] = useState({ latitude: 28.6619753, longitude: 77.1241557 }); // Default pickup location
// //   const [dropoff, setDropoff] = useState({ latitude: 28.6655211, longitude:    }); // Default dropoff location
// //   const [olaFare, setOlaFare] = useState(null); // State to store fetched fare
// //   const [loading, setLoading] = useState(false); // State to handle loading state

// //   // Function to fetch Ola fare from the server
// //   const fetchOlaFare = async () => {
// //     setLoading(true);
// //     try {
// //       const response = await fetch(`http://localhost:5000/scrape-fare?pickupLat=${pickup.latitude}&pickupLng=${pickup.longitude}&dropoffLat=${dropoff.latitude}&dropoffLng=${dropoff.longitude}`); // Call the backend API
// //       const data = await response.json();
// //       setOlaFare(data.fare); // Set the fetched fare in state
// //     } catch (error) {
// //       console.error('Error fetching Ola fare:', error);
// //       setOlaFare(null); // Handle error gracefully
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Button
// //         title="Get Uber Fare Estimate"
// //         onPress={() => {
// //           const url = generateUberEstimateUrl(pickup, dropoff);
// //           navigation.navigate('FareEstimate', { url });
// //         }}
// //       />
// //       <Button
// //         title="Get Ola Fare Estimate"
// //         onPress={() => {
// //           const url = generateOlaEstimateUrl(pickup, dropoff);
// //           navigation.navigate('FareEstimate', { url });
// //         }}
// //       />
      
// //       {/* Fetch and display Ola fare */}
// //       <Button title="Fetch Ola Fare Estimate" onPress={fetchOlaFare} />
// //       {loading ? (
// //         <ActivityIndicator size="large" color="#0000ff" />
// //       ) : olaFare ? (
// //         <Text style={styles.fareText}>Ola Fare Estimate: ₹{olaFare}</Text>
// //       ) : (
// //         <Text style={styles.fareText}>No fare estimate available.</Text>
// //       )}
// //     </View>
// //   );
// // };

// // // Main App component with Stack Navigation
// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="Home">
// //         <Stack.Screen name="Home" component={HomeScreen} />
// //         <Stack.Screen name="FareEstimate" component={RideWebView} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   fareText: {
// //     marginTop: 20,
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default App;













// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Button } from 'react-native';
// import HomeScreen from './components/HomeScreen';
// import UberTab from './components/UberTab';
// import OlaTab from './components/OlaTab';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         {/* <Tab.Screen name="Uber" component={UberTab} />
//         <Tab.Screen name="Ola" component={OlaTab} /> */}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;














// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './components/HomeScreen'; // Import HomeScreen
// import UberTab from './components/UberTab'; // Import UberTab
// import OlaTab from './components/OlaTab'; // Import OlaTab
// import QuickRide from './components/QuickRideTab';
// import FareDetailsTab from './components/FareDetailsTab'; // Import FareDetailsTab
// //import MapboxGL from '@react-native-mapbox-gl/maps';


// const Tab = createBottomTabNavigator();

// //MapboxGL.setAccessToken('pk.eyJ1IjoidWdhbmRhYnVzaW5lc3NwYWdlcyIsImEiOiJjbTM3Zm56ZW0waHA0Mm1zZjJjZWluNzI1In0.J1bRs6RUA0HifWwQFgGIzg'); // Replace with your token

// //MapboxGL.setAccessToken('pk.eyJ1IjoidWdhbmRhYnVzaW5lc3NwYWdlcyIsImEiOiJjbTM3a2s4d20wZ2xuMmpzZXJqa25ibmMyIn0.TPTYsqPdLW_nloMWgx_C4w');

// const App = () => {
//   // Global state for coordinates and fare details
//   const [coordinates, setCoordinates] = useState({
//     pickupLat: '',
//     pickupLng: '',
//     dropLat: '',
//     dropLng: '',
//   });
  
//   const [uberFareDetails, setUberFareDetails] = useState(null);
//   const [olaFareDetails, setOlaFareDetails] = useState(null);
//   const [quickRideFareDetails, setQuickRideFareDetails] = useState(null)

//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="Home">
//         <Tab.Screen
//           name="Home"
//           children={(props) => (
//             <HomeScreen {...props} setCoordinates={setCoordinates} />
//           )}
//         />
//         <Tab.Screen
//           name="Uber"
//           children={(props) => (
//             <UberTab {...props} coordinates={coordinates} setUberFareDetails={setUberFareDetails} />
//           )}
//         />
//         <Tab.Screen
//           name="Ola"
//           children={(props) => (
//             <OlaTab {...props} coordinates={coordinates} setOlaFareDetails={setOlaFareDetails} />
//           )}
//         />
//         <Tab.Screen
//           name="QuickRide"
//           children={(props) => (
//             <QuickRide {...props} coordinates={coordinates} setQuickRideFareDetails={setQuickRideFareDetails} />
//           )}
//         />
//         <Tab.Screen
//           name="Fare Details"
//           children={(props) => (
//             <FareDetailsTab
//               {...props}
//               uberFareDetails={uberFareDetails}
//               olaFareDetails={olaFareDetails}
//             />
//           )}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;










import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // Import Stack Navigator
import HomeScreen from './components/HomeScreen'; // Import HomeScreen
import UberTab from './components/UberTab'; // Import UberTab
import OlaTab from './components/OlaTab'; // Import OlaTab
import QuickRide from './components/QuickRideTab';
import Header from './components/Header'; // Import your custom Header component
import { Image } from 'react-native'; // Import Image for custom icons

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Create Stack Navigator for Header

const App = () => {
  // Global state for coordinates and fare details
  const [coordinates, setCoordinates] = useState({
    pickupLat: '',
    pickupLng: '',
    dropLat: '',
    dropLng: '',
  });

  const [uberFareDetails, setUberFareDetails] = useState(null);
  const [olaFareDetails, setOlaFareDetails] = useState(null);
  const [quickRideFareDetails, setQuickRideFareDetails] = useState(null);

  return (
    <NavigationContainer>
      {/* Stack Navigator for rendering the header */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide the default header
        }}
      >
        <Stack.Screen
          name="Main"
          options={{
            headerShown: false, // Hide the default header for this screen
          }}
        >
          {() => (
            <>
              {/* Persistent Header */}
              <Header />
              {/* Bottom Tab Navigator */}
              <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                  tabBarStyle: {
                    height: 70, // Increase the height of the tab bar
                    paddingBottom: 10, // Optional: Add padding for better spacing
                  },
                }}
              >
                <Tab.Screen
                  name="Home"
                  children={(props) => (
                    <HomeScreen {...props} setCoordinates={setCoordinates} />
                  )}
                  options={{
                    tabBarIcon: () => (
                      <Image
                        source={require('./assets/images/home_icon.png')}
                        style={{ width: 35, height: 35, resizeMode: 'contain' }} // Adjusted size of the icon
                      />
                    ),
                    tabBarLabel: () => null, // Remove label under the icon
                    headerShown: false, // Hide the heading (tab name) at the top
                  }}
                />
                <Tab.Screen
                  name="Uber"
                  children={(props) => (
                    <UberTab {...props} coordinates={coordinates} setUberFareDetails={setUberFareDetails} />
                  )}
                  options={{
                    tabBarIcon: () => (
                      <Image
                        source={require('./assets/images/uber_logo.png')}
                        style={{ width: 35, height: 35, resizeMode: 'contain' }} // Adjusted size of the icon
                      />
                    ),
                    tabBarLabel: () => null, // Remove label under the icon
                    headerShown: false, // Hide the heading (tab name) at the top
                  }}
                />
                <Tab.Screen
                  name="Ola"
                  children={(props) => (
                    <OlaTab {...props} coordinates={coordinates} setOlaFareDetails={setOlaFareDetails} />
                  )}
                  options={{
                    tabBarIcon: () => (
                      <Image
                        source={require('./assets/images/ola_logo.png')}
                        style={{ width: 35, height: 35, resizeMode: 'contain' }} // Adjusted size of the icon
                      />
                    ),
                    tabBarLabel: () => null, // Remove label under the icon
                    headerShown: false, // Hide the heading (tab name) at the top
                  }}
                />
                <Tab.Screen
                  name="QuickRide"
                  children={(props) => (
                    <QuickRide {...props} coordinates={coordinates} setQuickRideFareDetails={setQuickRideFareDetails} />
                  )}
                  options={{
                    tabBarIcon: () => (
                      <Image
                        source={require('./assets/images/quickride_logo.png')}
                        style={{ width: 35, height: 35, resizeMode: 'contain' }} // Adjusted size of the icon
                      />
                    ),
                    tabBarLabel: () => null, // Remove label under the icon
                    headerShown: false, // Hide the heading (tab name) at the top
                  }}
                />
              </Tab.Navigator>
            </>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
