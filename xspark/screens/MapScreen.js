
import { View } from "react-native";
import Map from "../components/map/Map";
import Navbar from "../components/navbar/Navbar";

export default function MapScreen({ navigation }) {
    return (
        <>
            <Map navigation={navigation} />
            <Navbar navigation={navigation} />
        </>
    )
}