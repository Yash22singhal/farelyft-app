import React from 'react';
import { StyleSheet, View, Text, StatusBar, Platform, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Adjust the status bar appearance */}
      <StatusBar barStyle="light-content" translucent={true} />
      
      {/* Logo and Title */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/farelyft_logo.jpeg')} // Path to the logo
          style={styles.logo}
        />
        <Text style={styles.title}>FairLyft</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 40 : 60, // Adjust for platform-specific padding
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#133E87', 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'column', // Stack the logo and title vertically
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Adjust shadow direction
    shadowOpacity: 0.2, // Subtle shadow
    shadowRadius: 4, // Radius of the shadow
  },
  logoContainer: {
    flexDirection: 'row', // Align logo and title horizontally
    alignItems: 'center', // Vertically align logo and title in the center
    justifyContent: 'center', // Center the content horizontally
  },
  logo: {
    width: 80, // Increase the size of the logo
    height: 80, // Increase the height of the logo
    marginRight: 15, // Add spacing between logo and title
    borderRadius: 40, // Half of the width/height to make it circular
    overflow: 'hidden', // Hide any overflow to maintain the circular shape
  },
  title: {
    color: '#ffffff', // White text for better contrast
    fontSize: 35, // Increase the font size for better visibility
    fontWeight: 'bold', // Bold text for more prominence
    letterSpacing: 3, // Wider letter spacing for a stylish appearance
    textTransform: 'uppercase', // Uppercase text for impact
    textAlign: 'center',
  },
});

export default Header;
