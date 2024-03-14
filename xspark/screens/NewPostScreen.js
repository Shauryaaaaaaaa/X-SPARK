import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Route, json } from 'react-router-native';
import { ReqIP } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewPostScreen = ({ navigation }) => {
  const user = useSelector((state)=> state.user.user);

  const [data, setData] = useState({
    title: '',
    description: '',
    amountRequired: '',
    country: '',
    location: '',
    price: '',
    image: {
      url:
        'https://images.unsplash.com/photo-1529511582893-2d7e684dd128?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      filename: 'Sample Image',
    },
    owner: user.id
  });

  const handleChange = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`http://${ReqIP}:8080/home`, { data });
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <CustomTextInput
          placeholder="Title"
          value={data.title}
          onChangeText={(text) => handleChange('title', text)}
        />
        <CustomTextInput
          placeholder="Description"
          value={data.description}
          onChangeText={(text) => handleChange('description', text)}
          multiline
          style={styles.messageInput}
        />
        <CustomTextInput
          placeholder="Country"
          value={data.country}
          onChangeText={(text) => handleChange('country', text)}
        />
        <CustomTextInput
          placeholder="Location"
          value={data.location}
          onChangeText={(text) => handleChange('location', text)}
        />
        <CustomTextInput
          placeholder="Required Amount"
          keyboardType="numeric"
          value={data.price.toString()}
          onChangeText={(text) => handleChange('price', text)}
        />
        <CustomTextInput
          placeholder="Price"
          keyboardType="numeric"
          value={data.amountRequired.toString()}
          onChangeText={(text) => handleChange('amountRequired', text)}
        />
        <CustomButton title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const CustomTextInput = ({ placeholder, value, onChangeText, multiline, style }) => {
  return (
    <TextInput
      style={[styles.input, styles.customInput, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
    />
  );
};

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 45,
    backgroundColor: '#fff', // Set a background color for the container
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 10,
    width: '100%',
  },
  customInput: {
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    color: '#333',
  },
  messageInput: {
    height: 100,
  },
  buttonContainer: {
    backgroundColor: '#4D6AFF',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewPostScreen;
