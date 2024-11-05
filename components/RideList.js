import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import RideItem from './RideItem';

const RideList = () => {
  const rides = [
    { id: '1', name: 'Standard Ride', details: 'Comfortable sedan', price: 15 },
    { id: '2', name: 'Premium Ride', details: 'Luxury sedan', price: 25 },
    { id: '3', name: 'SUV Ride', details: 'Spacious SUV', price: 30 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={rides}
        renderItem={({ item }) => <RideItem ride={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default RideList;
