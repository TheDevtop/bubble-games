import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {useFonts} from "expo-font";

export default function SignupPage({ navigation }) {
    const handleSignUpPress = () => {
        // Handle signup logic
    };

    const handleLoginPress = () => {
        navigation.navigate("LoginPage");
    };
    
    const handleSignUpWithEmail = () =>{
        navigation.navigate("Questioner");
    }

    const [loaded] = useFonts({
        YuseiMagic: require('../../assets/fonts/YuseiMagic-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.backgroundImageContainer}>
                <Image source={require('../../assets/signuppng.png')} style={styles.backgroundImage} />
            </View>
            <Text style={{...styles.title, fontFamily: 'YuseiMagic', lineHeight: 100}}>Sign Up</Text>
            <Text style={styles.description}>
                Create an account to get started on{"\n"}
                your journey to grow your perspective{"\n"}
                and stay motivated to grow empathy.
            </Text>

            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-google" size={24} color="#FFA42A" style={styles.socialIcon} />
                    <Text style={[styles.socialButtonText]}>Sign Up with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-facebook" size={24} color="#2699FB" style={styles.socialIcon} />
                    <Text style={[styles.socialButtonText, { left: 8 }]}>Sign Up with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-twitter" size={24}  color="#2699FB" style={styles.socialIcon} />
                    <Text style={styles.socialButtonText}>Sign Up with Twitter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton} onPress={handleSignUpWithEmail}>
                    <Ionicons name="mail" size={24} color="#F8CC55" style={styles.socialIcon} />
                    <Text style={styles.socialButtonText}>Sign Up with Email</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Do you already have an existing account?</Text>
                <TouchableOpacity onPress={handleLoginPress}>
                    <Text style={styles.loginLink}>LOG IN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.backgroundImageContainer}>
                <Image source={require('../../assets/signuppng.png')} style={styles.backgroundImageBottom} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 40,
        color: "#F8CC55",
        marginTop: 40,
        bottom: 80
    },
    description: {
        fontSize: 18,
        marginBottom: 20,
        bottom: 50,
        color: "#707070",
        textAlign: "center",
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
        marginBottom: 20,
    },
    buttonText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
        marginRight: 8,
    },
    icon: {
        marginLeft: 8,
    },
    socialButtonsContainer: {
        marginBottom: 20,
        bottom: 30 
    },
    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 290,
        height: 60,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: "transparent",
        borderRadius: 30,
        marginBottom: 20, // Increase the value for more spacing
        borderWidth: 2,
        borderColor: "#DACAAB",
    },
    socialIcon: {
        marginLeft: 8,
        marginRight: 8,
    },
    socialButtonText: {
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 8,
        textAlign: "center",
        color: "#707070",
    },
    loginContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    loginText: {
        fontSize: 13,
        marginRight: 8,
        bottom: 20,
        color: "#707070"
    },
    loginLink: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFA42A",
    },
    backgroundImageContainer: {
        position: 'absolute',
        top: 180,
        zIndex: -1,
    },
    backgroundImage: {
        resizeMode: 'cover',
        transform: [{ rotate: '180deg'}],
        top:-390
    },
    backgroundImageBottom: {
        top: 500
    }
});