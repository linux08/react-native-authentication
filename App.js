import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { AppNavigator } from './navigator'


export default () => (
  <View style={styles.container}>
    <AppNavigator />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
