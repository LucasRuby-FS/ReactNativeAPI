import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './AppStyles';

export default function Details({ route }) {
  const { bear } = route.params || {};

  if (!bear) {
    return (
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>No Bear Selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>Bear Details</Text>
      <Text style={{ fontSize: 20, marginTop: 10 }}>Name: {bear.name}</Text>
      {bear.breed && <Text style={{ fontSize: 18 }}>Breed: {bear.breed}</Text>}
      {bear.gender && <Text style={{ fontSize: 18 }}>Gender: {bear.gender}</Text>}
    </View>
  );
}