import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Background from './Background';
import { darkGreen } from './Constants';
import Btn from './Btn.js';


export default function Welcome({ navigation }) {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>XSpark</Text>
        <Text style={styles.subtitle}>Welcome</Text>
        <Btn bgColor={darkGreen} textColor={'white'} btnLabel="Login" Press={()=>navigation.navigate("Login")}/>
        <Btn bgColor={'white'} textColor={darkGreen} btnLabel="Sign Up" Press={()=>navigation.navigate("Signup")} />

      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    marginVertical: 20,
  },
  title: {
    marginTop:40,
    color: 'white',
    fontSize: 54,
    marginBottom: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 64,
    marginBottom: 280,
  },
});
