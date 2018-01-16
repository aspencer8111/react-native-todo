import React, { Component } from 'react';
import Home from './src/components/Home'
import { View, StyleSheet } from 'react-native'

const App = () => (
  <View style={styles.container} >
    <Home />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
