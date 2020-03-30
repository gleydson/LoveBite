import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { loadRequest } from '@ducks/restaurants/actions';
import { ApplicationState } from '@store/index';

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  text: { color: '#000', fontSize: 18 },
});

export default function home() {
  const dispatch = useDispatch();

  const restaurants = useSelector(
    (state: ApplicationState) => state.restaurants.data
  );

  console.log(restaurants);

  useEffect(() => {
    dispatch(loadRequest());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>home</Text>
    </View>
  );
}
