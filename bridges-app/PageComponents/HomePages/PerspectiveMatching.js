import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Glue from "../../LibGlue/LibGlue";

export default function PerspectiveMatching({navigation}) {

  //  console.warn('Need to pull latest chats!');
  //  Glue.PullChats();

    // Dummy data
    const chats = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'User name',
            description: 'Something about your common interest!',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            title: 'User name',
            description: 'Something about your common interest!',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            title: 'User name',
            description: 'Something about your common interest!',
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/150',
            title: 'User name',
            description: 'Something about your common interest!',
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/150',
            title: 'User name',
            description: 'Something about your common interest!',
        },
        {
            id: 6,
            image: 'https://via.placeholder.com/150',
            title: 'User name',
            description: 'Something about your common interest!',
        },
        {
            id: 7,
            image: 'https://via.placeholder.com/150',
            title: 'User name',
            description: 'Something about your common interest!',
        },
        // ...add more chats
    ];
    
    const navigateToChatPage = (chat) => {
        navigation.navigate('ChatPage', { chat });
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.bridges}>Bridges</Text>
            <Text style={styles.title}>How others see the world?</Text>
            <Text style={styles.description}>Start a chat with one of your matches, grow your perspective and build empathy!</Text>
            <Text style={styles.subTitle}>This is who we matched you with!</Text>

            <View style={styles.chatContainer}>
                {Glue.GlueStore.Messages.length > 0 ? (
                    <ScrollView>
                        {Glue.GlueStore.Messages.map((chat) => (
                            <TouchableOpacity style={styles.chat} onPress={() => navigateToChatPage(chat)}>
                                <Image style={styles.image} source={{uri: chat.image}} />
                                <View style={styles.chatContent}>
                                    <Text style={styles.chatTitle}>{chat.title}</Text>
                                    <Text style={styles.chatDescription}>{chat.description}</Text>
                                </View>
                                <Ionicons name="arrow-forward" size={24} color="black" />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                ) : (
                    <View style={styles.noChats}>
                        <Text style={styles.noChatsText}>No people found!</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFF',
        flexDirection: "column"
    },
    bridges:{
        left: 140,
        top: 50,
        fontSize: 30,
        color: "#F8CC55",

    },
    title: {
        fontSize: 20,
        top: 65,
        left: 20,
        fontWeight: 'bold',
        color: "#F8CC55",
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        left: 20,
        top: 65,
        color: "#707070",
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 23,
        left: 20,
        fontWeight: 'bold',
        color: "#707070",
        marginVertical: 10,
        top: 70
    },
    chatContainer: {
        flex: 0.9, // This makes the chat section take up 60% of the screen
        top: 70
    },
    chat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30, // increase padding
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    image: {
        width: 70, // increase width
        height: 70, // increase height
        borderRadius: 35, // make sure this is half of width and height for a perfect circle
        right: 15
    },
    chatContent: {
        flex: 1,
        marginLeft: 10,
    },
    chatTitle: {
        fontSize: 22, // increase font size
        fontWeight: 'bold',
        color: "#707070",
    },
    chatDescription: {
        fontSize: 10, // increase font size
        color: "#707070",
        top: 5
    },
    noChats: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noChatsText: {
        fontSize: 20,
        color: '#888',
    },
});
