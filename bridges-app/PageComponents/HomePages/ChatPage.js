import * as React from "react";
import { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import * as Glue from "../../LibGlue/LibGlue";
import { Ionicons } from "@expo/vector-icons";

export default function ChatPage({ route }) {
    const { chat } = route.params;
    const navigation = useNavigation();

    const [newMesg, setNewMesg] = useState('');

    function sendMessage() {
        Glue.PushChat(newMesg, chat.shortName);
    }

    const messages = [
        {
            id: 1,
            targetUser: 'User name',
            sourceUser: 'User 1',
            messageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: chat.image,
        },
        {
            id: 2,
            targetUser: 'User 1',
            sourceUser: 'User name',
            messageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: chat.image,
        },
        {
            id: 3,
            targetUser: 'User name',
            sourceUser: 'User 1',
            messageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: chat.image,
        },
        {
            id: 4,
            targetUser: 'User 1',
            sourceUser: 'User name',
            messageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: chat.image,
        },
        {
            id: 5,
            targetUser: 'User name',
            sourceUser: 'User 1',
            messageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: chat.image,
        },
        {
            id: 6,
            targetUser: 'User 1',
            sourceUser: 'User name',
            messageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: chat.image,
        },
        {
            id: 7,
            targetUser: 'User name',
            sourceUser: 'User 1',
            messageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: chat.image,
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={30} color="#000" style={styles.arrow} />
                </TouchableOpacity>
                <Text style={styles.title}>{chat.title}</Text>
                <Icon name="ellipsis-vertical" size={30} color="#000" style={styles.burger} />
            </View>
            <View style={styles.underline} />

            <Text style={styles.subtitle}>Start a conversation with one of the suggested questions!</Text>

            <Text style={styles.note1}>Remember to keep it friendly and respectful,</Text>
            <Text style={styles.note2}>we are here to grow and learn together!</Text>

            <View style={styles.questionContainer}>

                <TouchableOpacity>
                    <Text style={styles.question1}>Something question?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.question2}>Something question?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={styles.bigQuestion}>Something question?</Text>
            </TouchableOpacity>

            <ScrollView style={styles.chatContainer}>
                {messages.map((message) => (
                    <View key={message.id}
                        style={message.sourceUser === chat.title ? styles.messageRight : styles.messageLeft}>
                        <Image style={styles.messageImage} source={{ uri: message.image }} />
                        <View
                            style={message.sourceUser === chat.title ? styles.messageContentRight : styles.messageContentLeft}>
                            <Text style={styles.messageUser}>{message.sourceUser}</Text>
                            <View
                                style={message.sourceUser === chat.title ? styles.messageOfRightUser : styles.messageOfLeftUser}>
                                <Text style={styles.messageText}>{message.messageContent}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.searchContainer}>
                <TextInput
                    onChangeText={newMesg => setNewMesg(newMesg)}
                    style={styles.searchInput}
                    placeholder="Message"
                />
                <Ionicons
                    name="ios-send"
                    size={20}
                    color="grey"
                    style={styles.searchIcon}
                    onPress={sendMessage}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFF',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 30,
        top: 40,
        fontWeight: 'bold',
        color: "#F8CC55",
        textAlign: 'center',
        marginVertical: 10,
    },
    underline: {
        width: '100%',
        height: 1,
        top: 50,
        backgroundColor: '#FEE0BF',
        alignSelf: 'center',
        marginBottom: 20,
    },
    arrow: {
        top: 40,
        color: "#616669"
    },
    burger: {
        top: 40,
        color: "#FED78D"
    },
    subtitle: {
        fontSize: 13,
        color: "#707070",
        top: 60,
        textAlign: 'center',
        marginBottom: 10,
    },
    note1: {
        fontSize: 10,
        color: "#CCC4B6",
        textAlign: 'center',
        marginBottom: 20,
        top: 60
    },
    note2: {
        fontSize: 10,
        color: "#CCC4B6",
        textAlign: 'center',
        marginBottom: 20,
        top: 40
    },
    questionContainer: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: "row"
    },
    question1: {
        backgroundColor: '#FEF5E4',
        fontSize: 15,
        width: 180,
        left: 0,
        textAlign: 'center',
        lineHeight: 45,
        borderRadius: 30,
        height: 50,
        color: "#707070",
        bottom: -30,
        marginBottom: 10,
    },
    question2: {
        left: 10,
        width: 180,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#FEF5E4',
        fontSize: 15,
        color: "#707070",
        bottom: -30,
        marginBottom: 10,
        textAlign: 'center',
        lineHeight: 45
    },
    bigQuestion: {
        width: 300,
        height: 50,
        backgroundColor: '#FEF5E4',
        left: 45,
        bottom: -10,
        borderRadius: 30,
        fontSize: 20,
        color: "#707070",
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 45
    },
    chatContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    messageWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    messageLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    messageRight: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    messageOfRightUser: {
        right: 200,
        top: 10
    },
    messageOfLeftUser: {
        top: 10
    },
    messageImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    messageContentLeft: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        bottom: 10

    },
    messageContentRight: {
        flex: 1,
        right: 215,
        marginRight: 10,
        justifyContent: 'center',
        padding: 16
    },
    messageUser: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#707070",
    },
    messageText: {
        fontSize: 14,
        color: "#707070",
    },
    searchContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    searchIcon: {
        marginLeft: 10,
    },
});

