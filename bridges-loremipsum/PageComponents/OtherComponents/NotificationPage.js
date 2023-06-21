import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Switch } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';

export default function NotificationPage({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);


    return (
        <View style={styles.container}>
            <Text style={styles.description}>Receive notifications to have a full experience of Bridges</Text>
            <View style={styles.empathyContainer}>
                <View style={styles.empathyCardsContainer}>
                    <Text style={styles.titleEmpathy}>Empathy Cards</Text>
                    <Text style={styles.descriptionDescription}>{"Create an account to get started on\nyour journey to grow your perspective\nand stay motivated to grow empathy"}</Text>
                </View>
                <View style={styles.underline} />
                <View style={styles.empathyActionContainer}>
                    <Text style={styles.titleEmpathy}>Empathy Actions</Text>
                    <Text style={styles.descriptionDescription}>{"Create an account to get started on\nyour journey to grow your perspective\nand stay motivated to grow empathy"}</Text>
                </View>
            </View>
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('YouDidIt');
                }}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <Switch
                trackColor={{ false: "#767577", true: "#F1C927" }}
                thumbColor={isEnabled ? "#fffff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                style={{bottom: 560, left: 120}}
                value={isEnabled}
            />

            <Switch
                trackColor={{ false: "#767577", true: "#F1C927" }}
                thumbColor={isEnabled2 ? "#fffff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                style={{bottom: 430, left: 120}}
                value={isEnabled2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    description: {
        fontSize: 23,
        color: "#707070",
        fontWeight: 'bold',
        bottom: 20,
        marginTop: 150,
        marginBottom: 20
    },
    descriptionDescription: {
        fontSize: 12, 
        color: "#707070",
        marginTop: 15
    },
    empathyContainer:{
        flexDirection: "column",
        backgroundColor: "#FEF5E4",
        borderRadius: 50,
        width: 370,
        height: 350,
    },
    empathyCardsContainer: {
        flexDirection: "column",
        marginTop: 30,
        marginLeft: 30,
    },
    empathyActionContainer:{
        flexDirection: "column",
        marginTop: 40,
        marginLeft: 30
    },
    titleEmpathy:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#707070",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 60,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: "#F8CC55",
        borderRadius: 50,
        marginTop: 130,
        marginBottom: 90,
    },
    
    underline: {
        height: 1,
        width: 320,
        marginTop: 50,
        alignSelf: "center",
        backgroundColor: "#707070",
    },
    buttonEnabled: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonDisabled: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    }
});
