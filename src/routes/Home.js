//import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  //init
  const navigation = useNavigation();

  //render
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Go to Desc" onPress={() => navigation.navigate('Desc')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});