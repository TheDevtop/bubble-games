import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, PanResponder, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CheckBox } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import * as Glue from "../../LibGlue/LibGlue";

export default function EmpathyCardsPage({ navigation }) {
    const [cards, setCards] = useState(Glue.GlueStore.Cards);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [pan] = useState(new Animated.ValueXY());
    const [opacity] = useState(new Animated.Value(1));
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);

    useEffect(() => {
        pan.setValue({ x: 0, y: 0 });
        opacity.setValue(1);
    }, [currentCardIndex]);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dy: pan.y }]),
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dy > 50) {
                swipeCard("down");
            } else if (gestureState.dy < -50) {
                swipeCard("up");
            } else {
                resetCardPosition();
            }
        },
    });

    const swipeCard = (direction) => {
        Animated.parallel([
            Animated.timing(pan, {
                toValue: {
                    x: 0,
                    y: direction === "up" ? -800 : 800,
                },
                duration: 300,
            }),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
            }),
        ]).start(() => {
            setCurrentCardIndex(currentCardIndex + 1);
            setSelectedCardIndex(currentCardIndex + 1); // Update selected card index
            pan.setValue({ x: 0, y: 0 });
            opacity.setValue(1);
        });
    };

    const resetCardPosition = () => {
        Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
        }).start();
    };

    const cardStyles = {
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
        opacity: opacity,
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={30} color="#000" style={styles.arrow} />
                </TouchableOpacity>
                <Text style={styles.title}>EMPATHY CARDS</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Get your cards of the day!</Text>
            </View>
            <View style={styles.cardsContainer}>
                {currentCardIndex < cards.length ? (
                    <>
                        <Animated.View
                            {...panResponder.panHandlers}
                            style={[styles.card, cardStyles]}
                        >
                            <Text style={styles.motivationalText}>{cards[currentCardIndex]}</Text>
                        </Animated.View>
                        <View style={styles.radioButtonContainer}>
                            {cards.map((_, index) => (
                                <CheckBox
                                    key={index}
                                    iconRight
                                    checkedIcon={
                                        <View style={[styles.checkBoxIcon, styles.checkedIcon]} />
                                    }
                                    uncheckedIcon={<View style={styles.checkBoxIcon} />}
                                    checked={selectedCardIndex === index}
                                    onPress={() => setSelectedCardIndex(index)}
                                    disabled={currentCardIndex >= cards.length}
                                    size={18}
                                />
                            ))}
                        </View>
                    </>
                ) : (
                    <Text style={styles.noCardsText}>No more cards for today!</Text>
                )}
            </View>

            <View style={styles.pullCardContainer}>
                <Icon name="arrow-up-outline" size={40} color="#000" style={styles.arrowUp} />
                <Text style={styles.pullYourCardText}>Pull your card</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        marginTop: 50,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    arrow: {
        right: 50
    },
    title: {
        fontSize: 28,
        color: "#FAD157",
        top: 20,
        fontWeight: "bold",
        left: -15
    },
    descriptionContainer: {
        marginBottom: 20,
        top: 20,
    },
    description: {
        fontSize: 16,
        color: "#707070",
    },
    cardsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        bottom: 30,
    },
    radioButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        right: 5,
        top: 25,
    },
    card: {
        width: 300,
        height: 400,
        top: 30,
        backgroundColor: "#F5E9D3",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    checkBoxIcon: {
        width: 10,
        height: 10,
        borderRadius: 9,
        borderWidth: 1.5,
        borderColor: "#707070",
        backgroundColor: "transparent",
        marginRight: -30,
    },
    checkedIcon: {
        backgroundColor: "#707070", // Customize the background color for checked state
    },
    cardText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    motivationalText: {
        fontSize: 16,
        color: "#707070",
    },
    noCardsText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#707070",
    },
    pullCardContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    arrowUp: {
        bottom: 40,
        color: "#616669",
    },
    pullYourCardText: {
        bottom: 30,
        fontSize: 18,
        color: "#707070",
    },
});

