import { Button } from "react-native"
import { Text, View } from "react-native-animatable"
import Welcome from "../components/welcome/Welcome"

export default function WelcomeScreen({navigation}){
    return(
        <Welcome navigation={navigation}/>
    )
}