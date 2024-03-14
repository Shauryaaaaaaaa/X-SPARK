import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
export default function Navbar({ navigation }) {
    const user = useSelector((state) => state.user.user);

    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={{
                marginTop: 15,
                paddingTop: 5,
            }} onPress={() => navigation.navigate("Home")}>
                <Octicons name="home" size={24} color="black" />
            </TouchableOpacity>
            <View >
                <Feather name="shopping-cart" size={24} color="black" />
            </View>
            {user.userType === "Trader" ? <View ><TouchableOpacity onPress={() => navigation.navigate("NewPost")}>
                <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity></View> : <View></View>}
            <View ><TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
            <Ionicons name="location-outline" size={26} color="black" />
            </TouchableOpacity></View>
            <View ><TouchableOpacity>
                <Text>Settings</Text>
            </TouchableOpacity></View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flex: 0,
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#EEE5E9',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        zIndex: 2,
        borderWidth: 0.2
    }
});