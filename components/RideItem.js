import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const RideItem = ({ ride }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{ride.name}</Text>
      <Text style={styles.details}>{ride.details}</Text>
      <Text style={styles.price}>${ride.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200ee',
  },
});

export default RideItem;
