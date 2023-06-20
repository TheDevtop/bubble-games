import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export default function WelcomePage() {
    const navigation = useNavigation();

    const handleSignUpPress = () => {
        navigation.navigate("SignUp");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bridges</Text>
            <Text style={styles.subtitle}>Meet, Connect, Understand</Text>
            <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
                <Text style={styles.buttonText}>Continue</Text>
                <Ionicons name="arrow-forward" size={30} color="black" style={styles.icon} />
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
    title: {
        fontSize: 85,
        fontWeight: "bold",
        marginBottom: 16,
        bottom: 190,
        color: "#FFA42A"
    },
    subtitle: {
        fontSize: 23,
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
    icon: {
        color: "#616669"
    }
});







