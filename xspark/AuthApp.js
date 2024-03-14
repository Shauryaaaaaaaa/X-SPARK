import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen.js';
import WelcomeScreen from './screens/WelcomeScreen.js';
import SignupScreen from './screens/SignupScreen.js';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import HomeScreen from './screens/HomeScreen.js';
import EditPostScreen from './screens/EditPostScreen.js';
import NewPostScreen from './screens/NewPostScreen.js';
import ShowPostScreen from './screens/ShowPostScreen.js';
import MapScreen from './screens/MapScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OrderScreen from './screens/OrderScreen.js';

export default function AuthApp() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                    screenOptions={{ headerShown: false }}
                    options={{ title: 'Welcome' }} />

                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{ title: 'Login' }} />

                <Stack.Screen
                    name='Signup'
                    component={SignupScreen}
                    options={{ title: 'Sign up' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}