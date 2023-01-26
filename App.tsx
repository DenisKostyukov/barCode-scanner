/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});

export default App;
