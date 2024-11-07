import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FareDetailsTab = ({ uberFareDetails, olaFareDetails }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fare Details</Text>
      <Text style={styles.fareText}>
        <Text style={styles.heading}>Uber Fare: </Text>
        {uberFareDetails || 'No fare details available.'}
      </Text>
      <Text style={styles.fareText}>
        <Text style={styles.heading}>Ola Fare: </Text>
        {olaFareDetails || 'No fare details available.'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  fareText: {
    fontSize: 18,
    marginVertical: 10,
  },
  heading: {
    fontWeight: 'bold',
  },
});

export default FareDetailsTab;
