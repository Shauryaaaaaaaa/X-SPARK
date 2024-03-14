import { Text, View, TextInput, TouchableOpacity, Alert, StyleSheet, Button, ImageBackground, handleSubmit, ScrollView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react';
import Background from "./Background";
import axios from 'axios';
import {ReqIP} from '@env';


export default function Signup({ navigation }) {
    const [userType, setUserType] = useState();
    const [registerData, setRegisterData] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: ""
    });


    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { label: 'Farmer', value: 'Farmer' },
        { label: 'Trader', value: 'Trader' },
    ]

    function handleInputChange(key, value) {
        setRegisterData({
            ...registerData,
            [key]: value
        })
    }

    async function handleSubmit() {
        console.log(registerData, userType);
        let response = await axios.post(`http://${ReqIP}:8080/api/auth/signup`, {registerData, userType: userType});
        console.log(response);
    }

    return (
        <Background>
            <View style={{ alignItems: "center", width: 350 }}>
                <Text style={{ color: "#000000", fontSize: 60, fontWeight: '800', marginVertical: 15 }}>Register</Text>
                <View style={{ marginTop: 5, marginLeft: 7, backgroundColor: "#fff", height: 560, width: 300, borderTopLeftRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 0.4, paddingTop: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, color: "#006400", fontWeight: '900' }}>XSPARK</Text>
                    <Text style={{ color: 'grey', fontSize: 15, fontWeight: 'bold', marginBottom: 10, }}> Create your account</Text>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            value={registerData.name}
                            onChangeText={(text) => handleInputChange('name', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            value={registerData.username}
                            onChangeText={(text) => handleInputChange('username', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={registerData.password}
                            onChangeText={(text) => handleInputChange('password', text)}
                            secureTextEntry />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            value={registerData.confirmPassword}
                            onChangeText={(text) => handleInputChange('confirmPassword', text)}
                            secureTextEntry />
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            value={registerData.email}
                            onChangeText={(text) => handleInputChange('email', text)}
                        />
                        <View style={{ padding: 5, }}>
                            <DropDownPicker
                                items={items}
                                open={isOpen}
                                setOpen={() => setIsOpen(!isOpen)}
                                value={userType}
                                setValue={(val) => setUserType(val)}
                                maxHeight={200}
                                autoScroll
                                placeholder="Select user type"
                                placeholderStyle={{ fontWeight: '300', fontSize: 15 }}
                                showTickIcon={true}
                                showArrowIcon={true}
                                dropDownDirection="TOP"
                                theme='LIGHT'
                            />
                        </View>
                        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                            <Text style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Text style={{ color: "#006400", fontWeight: 'bold', fontSize: 14, textDecorationLine: 'underline' }}> Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Change to 'flex-start'
        alignItems: 'center',
    },
    input: {
        height: 35,
        width: 280,
        borderWidth: 0.2,
        borderColor: 'black', // Border color
        color: 'black', // Text color
        marginTop: 8,
        marginBottom: 15,
        paddingHorizontal: 5,
        borderRadius: 30,
        fontSize: 13,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#006400', // Button background color
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 270,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', // Button text color
        fontSize: 16,
    },
});
