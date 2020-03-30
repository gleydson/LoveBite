import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  text: { color: '#000', fontSize: 18 },
});

export default function home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>home</Text>
    </View>
  );
}
