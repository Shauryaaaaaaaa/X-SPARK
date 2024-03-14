import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen.js';
import SignupScreen from './screens/SignupScreen.js';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import HomeScreen from './screens/HomeScreen.js';
import EditPostScreen from './screens/EditPostScreen.js';
import NewPostScreen from './screens/NewPostScreen.js';
import ShowPostScreen from './screens/ShowPostScreen.js';
import { Button } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen.js';

import MapScreen from './screens/MapScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OrderScreen from './screens/OrderScreen.js';
import MainApp from './MainApp.js';
import AuthApp from './AuthApp.js';
import { Alert } from 'react-native';



// TODO: Manage the order of farmer and trader
// TODO: Give Push Notifications to Both Farmer and Trader
// TODO: Set up an interface for communication
// TODO: Sowing Details
// TODO: Weather Predication Model
// TODO: Quality Check Feature
// TODO: ESCROW Gateway
// TODO: Save order history
// TODO: Maps Integration and GPS Tracking
// TODO: Review System

export default function App() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const retrievedUser = await AsyncStorage.getItem('user');
      console.log(retrievedUser)
      if (retrievedUser !== null) {
        setUser(JSON.parse(retrievedUser));
      } else {
        Alert.alert('Error', 'Item not found.');
        setUser(false);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve item.');
      setUser(false);
    }
  };


  useEffect(()=>{
    getUser();
  },[]);

  console.log(user);
  if(user){
    return(
      <MainApp/>
    )
  }else{
    return(
      <AuthApp/>
    )
  }
}
