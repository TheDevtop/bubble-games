import * as React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import * as Glue from "../LibGlue/LibGlue";

export default function HomePage({ navigation }) {
    const [isCardHovered1, setCardHovered1] = useState(false);
    const [isCardHovered2, setCardHovered2] = useState(false);
    const [isCardHovered3, setCardHovered3] = useState(false);

    if (Glue.GlueStore.CardsLoaded != true) {
        Glue.GlueStore.Cards = Glue.PullQuotes(4);
        Glue.GlueStore.CardsLoaded = true;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bridges</Text>
            <Text style={styles.description}>Start your growth!</Text>

            <TouchableWithoutFeedback
                onPressIn={() => setCardHovered1(true)}
                onPressOut={() => setCardHovered1(false)}
                onPress={() => navigation.navigate('EmpathyCardsPage')} // replace 'SomeScreen' with your screen's name
            >
                <View style={[styles.card, { backgroundColor: isCardHovered1 ? '#FED78D' : '#FEF5E4' }]}>
                    <View style={styles.cardContent}>
                        <View>
                            <Text style={styles.cardTitle}>Empathy Cards</Text>
                            <Text style={styles.cardDescription}>Pull your empathy card of the day</Text>
                        </View>
                        <Ionicons name="arrow-forward" size={30} color="black" style={{right: 10}}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                onPressIn={() => setCardHovered2(true)}
                onPressOut={() => setCardHovered2(false)}
                onPress={() => navigation.navigate('EmpathyActionPage')} // replace 'SomeOtherScreen' with your screen's name
            >
                <View style={[styles.card, { backgroundColor: isCardHovered2 ? '#FED78D' : '#FEF5E4' }]}>
                    <View style={styles.cardContent}>
                        <View>
                            <Text style={styles.cardTitle}>Empathy Action</Text>
                            <Text style={styles.cardDescription}>Pull your empathy card of the day</Text>
                        </View>
                        <Ionicons name="arrow-forward" size={30} color="black"                        style={{right: 10}}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                onPressIn={() => setCardHovered3(true)}
                onPressOut={() => setCardHovered3(false)}
                onPress={() => navigation.navigate('PerspectiveMatching')} // navigating to the PerspectiveMatching screen
            >
                <View style={[styles.card, { backgroundColor: isCardHovered3 ? '#FED78D' : '#FEF5E4' }]}>
                    <View style={styles.cardContent}>
                        <View>
                            <Text style={styles.cardTitle}>Perspective Matching</Text>
                            <Text style={styles.cardDescription}>Start a chat with one of your matches</Text>
                        </View>
                        <Ionicons name="arrow-forward" size={30} color="black" style={{right: 10}}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    title: {
        fontSize: 30,
        bottom: 65,
        color: "#F3C853"
    },
    description: {
        fontSize: 25,
        color: "#707070",
        fontWeight: 'bold',
        bottom: 20,
        alignSelf: "flex-start",
        left: 20
    },
    card: {
        width: '100%',
        height: 115,
        backgroundColor: '#FEF5E4',
        marginBottom: 20,
        top: 50,
        padding: 20,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#707070",
        bottom: 10,
        left: 15
    },
    cardDescription: {
        fontSize: 10,
        top: 10,
        color: "#707070",
        left: 15
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});



