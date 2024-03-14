import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReqIP } from '@env';
import { deletePost } from '../features/post/postSlice';

// TODO: Take Edit and Delete Button only if user is author
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function ShowPostScreen({ route, navigation }) {
    const data = route.params.data;
    const image = route.params.image;
    const user = useSelector((state) => state.user.user);

    const handleBookNow = async (data) => {
        console.log("Order Placed");
        navigation.navigate("OrderScreen", {data});
    };

    async function handleDelete(id) {
        try {
            await axios.delete(`http://${ReqIP}:8080/home/${id}`);
            dispatch(deletePost(id));
        } catch (e) {
            console.log(e);
        }
    }



    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{user.name}</Text>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.details}>
                        <Text style={styles.detailLabel}>Country:</Text> {data.country}
                    </Text>
                    <Text style={styles.details}>
                        <Text style={styles.detailLabel}>Location:</Text> {data.location}
                    </Text>
                    <View style={styles.clockContainer}>
                        <AntDesign name="clockcircleo" size={26} color="black" />
                        <Text style={{ fontWeight: '500' }}> 6 Months</Text>
                        <MaterialIcons name="currency-rupee" size={26} color="black" style={{ paddingLeft: 20, }} />
                        <Text style={{ fontWeight: '500' }}>{data.price}/-</Text>
                        <Entypo name="database" size={26} color="black" style={{ paddingLeft: 20, }} />
                        <Text style={{ fontWeight: '500' }}>{data.amountRequired}Kg</Text>
                    </View>
                </View>
            </ScrollView>
            {user.id === data.owner._id ? <View><TouchableOpacity style={[styles.bookNowButton, { backgroundColor: "#f79457" }]} onPress={() => navigation.navigate('EditPost', { data: data })}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Edit</Text>
            </TouchableOpacity>
                <TouchableOpacity style={[styles.bookNowButton, { backgroundColor: "#fc4444" }]} onPress={() => handleDelete(p.id)}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Delete</Text>
                </TouchableOpacity></View> : <View></View>}
            {user.userType === "Farmer" ? <TouchableOpacity style={styles.bookNowButton} onPress={()=> handleBookNow(data)}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Accept Order</Text>
            </TouchableOpacity> : <View></View>}
        </View>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 16
    },
    deleteButtonText: {
        color: '#000',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // borderBottomRightRadius: 20,
        // borderBottomLeftRadius: 20,
    },
    content: {
        padding: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    details: {
        fontSize: 16,
        marginBottom: 5,
    },
    detailLabel: {
        fontWeight: 'bold',
    },
    clockContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    bookNowButton: {
        backgroundColor: 'green',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 30,
        alignSelf: 'center',
        marginBottom: 20,
    },
});
