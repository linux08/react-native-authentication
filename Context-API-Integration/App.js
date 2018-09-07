import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AppNavigator} from './navigator';
import MyProvider from './Provider';


export default () => (
  <MyProvider>
    <View style={styles.container}>
      <AppNavigator />
    </View>
  </MyProvider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
