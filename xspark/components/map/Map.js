import { Text } from "react-native";
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { MapBoxToken } from '@env';

Mapbox.setAccessToken(`${MapBoxToken}`);

export default function Map({ navigation }) {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView style={styles.map} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: '100%',
        width: '100%',
    },
    map: {
        flex: 1
    }
});