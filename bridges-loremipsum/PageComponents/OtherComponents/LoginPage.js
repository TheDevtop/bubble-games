﻿import React from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function LoginPage({ navigation }) {
    const handleLogin = () => {
        navigation.navigate("Main");
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={35} color="black" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Log in</Text>
            </View>
            <Text style={styles.subtitle}>New to Bridges?</Text>
            <TouchableOpacity >
                <Text onPress={() => navigation.navigate("RegisterPage")} style={styles.signUpLink}>Sign up for free</Text>
            </TouchableOpacity>
            <View style={styles.inputsContainer}>
                <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry />
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <View style={styles.iconContainer}>
                <Ionicons name="logo-google" size={30} color="#FFA42A" style={styles.socialIcon} />
                <Ionicons name="logo-facebook" size={30} color="#2699FB" style={styles.socialIcon} />
                <Ionicons name="logo-twitter" size={30} color="#2699FB" style={styles.socialIcon} />
                <Ionicons name="logo-apple" size={30} style={styles.socialIcon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
        bottom: 120
    },
    icon: {
        marginRight: 8,
        color: "#75726B"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        right: 150
    },
    subtitle: {
        fontSize: 15,
        marginTop: 50,
        marginBottom: 10,
        textAlign: "center",
        color: "#707070",
        bottom: 110
    },
    signUpLink: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#0175F9",
        textAlign: "center",
        bottom: 100
    },
    inputsContainer: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: 300,
        height: 60,
        borderWidth: 2,
        borderColor: "#DDCFB1",
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        bottom: 70
    },
    forgotPasswordText: {
        color: "#0175F9",
        textAlign: "left",
        marginBottom: 20,
        right: 90,
        bottom: 70,
        alignSelf: "flex-start"
    },
    loginButton: {
        backgroundColor: "#F8CC55",
        borderRadius: 40,
        width: 250,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        bottom: 50
    },
    loginButtonText: {
        color: "white",
        fontSize: 25,
    },
    orText: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
        bottom: 20,
        textAlign: "center",
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    socialIcon: {
        marginHorizontal: 15,
        },
});
