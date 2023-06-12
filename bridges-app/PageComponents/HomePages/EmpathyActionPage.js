import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image } from "react-native";
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default function EmpathyActionPage({ navigation }) {
    const data = [
        {
            id: '1',
            title: 'The Happiness Lab',
            image: { uri: 'https://via.placeholder.com/80x80' }
        },
        {
            id: '2',
            title: 'Pullin the Thread',
            image: { uri: 'https://via.placeholder.com/80x80' }
        },
    ];

    const data2 = [
        {
            id: '1',
            title: 'Atomic Habits',
            image: { uri: 'https://via.placeholder.com/80x80' }
        },
        {
            id: '2',
            title: '33 Strategies of War',
            image: { uri: 'https://via.placeholder.com/80x80' }
        },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back-outline" size={30} color="#000" style={styles.arrow} />
                    </TouchableOpacity>
                    <Text style={styles.title}>EMPATHY ACTION</Text>
                </View>
            </View>
            <Text style={styles.description}>
                Here are small, achievable tasks that {'\n'}
                encourage you to practice empathy {'\n'}
                in your daily life!
            </Text>
            <View style={styles.podcastContainer}>
                <Text style={styles.podcastText}>Podcasts</Text>
                <View style={styles.underline} />
            </View>
            {data.map((item) => (
                <View key={item.id} style={styles.podcastItem}>
                    <View style={styles.imageContainer}>
                        <Image source={item.image} style={styles.podcastImage} />
                    </View>
                    <View style={styles.podcastItemButtonContainer}>
                        <Text style={styles.podcastTitle}>{item.title}</Text>
                        <TouchableOpacity style={styles.playButton}>
                            <Icon name="play-outline" size={20} color="#F9BC17" />
                            <Text style={styles.playButtonText}>Play</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
            <View style={styles.booksContainer}>
                <Text style={styles.booksText}>Books</Text>
                <View style={styles.underline} />
            </View>
            {data2.map((item) => (
                <View key={item.id} style={styles.booksItem}>
                    <View style={styles.imageContainer}>
                        <Image source={item.image} style={styles.podcastImage} />
                    </View>
                    <View style={styles.podcastItemButtonContainer}>
                        <Text style={styles.podcastTitle}>{item.title}</Text>
                        <TouchableOpacity style={styles.playButton}>
                            <Text style={styles.playButtonText}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#FEF5E4",
        paddingTop: 50,
        paddingBottom: 40,
        paddingLeft: 70,
        paddingRight: 70,
        paddingHorizontal: 20,
    },
    container: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    arrow: {
        right: 50,
        color: "#75726B"
    },
    title: {
        fontSize: 28,
        top: 10,
        right: 10,
        color: "#FAD157",
        fontWeight: "bold",
    },
    description: {
        textAlign: "center",
        fontSize: 20,
        top: 20,
        color: "#707070"
    },
    podcastContainer: {
        marginTop: 50, // Changed from "top"
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 130,
        paddingRight: 130,
        backgroundColor: "#FEF5E4",
        alignItems:"flex-start",
    },
    booksContainer:{
        marginTop: 50, // Changed from "top"
        paddingTop: 30,
        bottom: 50,
        paddingBottom: 30,
        paddingLeft: 155,
        paddingRight: 155,
        backgroundColor: "#FEF5E4",
        alignItems:"flex-start",
    },
    podcastText: {
        fontSize: 35,
        color: "#FAD157",
        fontWeight: "bold",
        right: 100
    },
    booksText:{
        fontSize: 35,
        color: "#FAD157",
        fontWeight: "bold",
        right: 120
    },
    podcastItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10, // Changed from "top"
        padding: 25,
        left: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CBC3C3'
    },
    booksItem:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10, // Changed from "top"
        padding: 25,
        left: 10,
        bottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#CBC3C3'
    },
    imageContainer: {
        width: 80, // Specify a fixed width for the image container
    },
    podcastImage: {
        width: 80,
        height: 80,
        borderRadius: 25,
    },
   
    podcastTitle: {
        fontSize: 20,
        color: "#707070",
    }, 
    podcastItemButtonContainer:{
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        paddingLeft: 20,
    },
    playButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F9BC17',
        borderRadius: 30, // Increase this to make the button more rounded
        paddingHorizontal: 40, // Increase this to make the button wider
        paddingVertical: 10,
        marginTop: 10,
    },
    playButtonText: {
        color: '#F9BC17',
        fontSize: 20,
        marginLeft: 5, // Create some space between the icon and the text
    },
});
