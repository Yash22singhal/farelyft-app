import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import RideList from './components/RideList';
import Footer from './components/Footer';
import MapViewComponent from './components/MapViewComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <MapViewComponent />
      <RideList />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
