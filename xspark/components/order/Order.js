import { Button, TextInput } from "react-native";
import { Text, View } from "react-native-animatable";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import {ReqIP} from '@env';

export default function Order({ route, navigation }) {
    const data = route.params.data;
    const user = useSelector((state) => state.user.user);
    const [acceptOrder, setAcceptOrder] = useState({
        post: data.id,
        dealPrice: data.price,
        fromDelivery: "",
        toDelivery: "",
        trader: data.owner._id,
        farmer: user.id,
        status: "Request Sent"
    })

    function handleInputChange(key, value){
        setAcceptOrder({
            ...acceptOrder,
            [key]: value
        });
    }

    const handleOrderRequest = async ()=>{
        try{
            console.log(acceptOrder);
            const response = await axios.post(`http://${ReqIP}:8080/order/place`, {acceptOrder});
            console.log(response.data);
        }catch(e){
            console.log(e);
        }
    }

    return (
        <View>
            <Text>Trader: {data.owner.name}</Text>
            <Text>Post: {data.title}</Text>
            <Text>Price: {data.price}</Text>
            <TextInput
                placeholder="Shipping Address"
                value={acceptOrder.fromDelivery}
                onChangeText={(text) => handleInputChange('fromDelivery', text)} />
            <TextInput
                placeholder="Delivery Address"
                value={acceptOrder.toDelivery}
                onChangeText={(text) => handleInputChange('toDelivery', text)} />

            <Button onPress={handleOrderRequest} title="Request Order"/>
        </View>
    )
}