import React from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RegisterPage({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back" size={35} color="black" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Register</Text>
            </View>
            <Text style={styles.subtitle}>Already have an account?</Text>
            <TouchableOpacity>
                <Text  onPress={() => navigation.navigate("LoginPage")} style={styles.signUpLink}>Log in!</Text>
            </TouchableOpacity>
            <View style={styles.inputsContainer}>
                <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry />
                <TextInput style={styles.input} placeholder="First Name" secureTextEntry />
                <TextInput style={styles.input} placeholder="Last Name" secureTextEntry />
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Main")} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Register</Text>
            </TouchableOpacity>
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
        marginTop: 100,
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
});
