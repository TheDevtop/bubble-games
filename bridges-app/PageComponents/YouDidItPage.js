import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export default function YouDidItPage() {
    const navigation = useNavigation();

    const handleSignUpPress = () => {
        navigation.navigate("Main");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Bridges</Text>
            <Text style={styles.title}>You did it!</Text>
            <Text style={styles.subtitle}>{"Get to know Bridges and\nconnect to your matches!"}</Text>
            <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
                <Text style={styles.buttonText}>Explore</Text>
                <Ionicons name="arrow-forward" size={30} color="black" style={styles.icon}/>
            </TouchableOpacity>
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
    logo: {
        marginTop: 50,
        bottom: 250,
        fontSize: 25,
        color: "#F8CC55",
    },
    title: {
        fontSize: 45,
        fontWeight: "bold",
        marginBottom: 16,
        bottom: 190,
        color: "#707070"
    },
    subtitle: {
        fontSize: 23,
        textAlign: "center",
        bottom: 120,
        marginBottom: 32,
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
        bottom: 70,
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







