import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Svg, { Circle } from 'react-native-svg';

export default function WelcomePage() {
    const navigation = useNavigation();
    
    const handleSignUpPress = () => {
        navigation.navigate("OverviewPage");
    };
    
    const [loaded] = useFonts({
        YuseiMagic: require('../../assets/fonts/YuseiMagic-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'YuseiMagic', bottom: -50,lineHeight: 100,  fontSize: 85, marginBottom: 160, color: "#FFA42A"}}>Bridges</Text>
            <Text style={styles.subtitle}>Meet, Connect, Understand</Text>
            <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
                <Text style={styles.buttonText}>Continue</Text>
                <Ionicons name="arrow-forward" size={30} color="black" style={styles.icon}/>
            </TouchableOpacity>
            <Image source={require('../../assets/HomePic.png')} style={{top: 120}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FEF5E4"
    },
    title: {
        fontSize: 85,
        fontWeight: "bold",
        marginBottom: 16,
        bottom: 190,
        color: "#FFA42A"
    },
    subtitle: {
        fontSize: 23,
        marginBottom: 32,
        bottom: 50,
        color: "#707070"
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 260,
        height: 60,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: "#ebebeb",
        borderRadius: 50,
    },
    buttonText: {
        flex: 1,
        fontSize: 30,
        fontWeight: "400",
        textAlign: "center",
        bottom: 5,
        left: 15,
        color: "#707070",
        marginRight: 8,
    },
    icon:{
        color: "#616669"
    }
});







