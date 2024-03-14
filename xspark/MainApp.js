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

export default function MainApp({getUser}) {
    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Home">
                    <Stack.Screen
                        name='Home'
                        component={HomeScreen}
                        initialParams={getUser}
                        options={{ title: 'XSPARK' }} />

                    <Stack.Screen
                        name='EditPost'
                        component={EditPostScreen}
                        options={{ title: 'Edit' }} />

                    <Stack.Screen
                        name='NewPost'
                        component={NewPostScreen}
                        options={{ title: 'New' }} />

                    <Stack.Screen
                        name='ShowPost'
                        component={ShowPostScreen}
                        options={{ title: 'Post' }} />

                    <Stack.Screen
                        name='MapScreen'
                        component={MapScreen}
                        options={{ title: 'Map' }} />

                    <Stack.Screen
                        name='OrderScreen'
                        component={OrderScreen}
                        options={{ title: 'Place Order' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}