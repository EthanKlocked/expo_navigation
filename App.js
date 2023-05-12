import { Navigation } from '@/components';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { checkFirstLaunch } from '@/lib';
//import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  //state
  const [firstLaunch, setFirstLaunch] = useState(false);

  //function
  const init = async() => {
    const firstLaunchResult = await checkFirstLaunch();    
    setFirstLaunch(firstLaunchResult);
  }

  //effect
  useEffect(() => {
    init();
  }, []);

  //render
  return (
    <>
    <Navigation/>
    {
      /*
    <View style={styles.container}>
      <Text>first Launch Chk : {firstLaunch ? 'true' : 'false'}</Text>
      <Text>Open up App.js to start working on your app!!!!!</Text>
      <Button title="async storage refresh" onPress = {() => AsyncStorage.clear()}/>
      <StatusBar style="auto" />
    </View>      
      */
    }
    </>
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
