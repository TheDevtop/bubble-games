import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import CustomRadioButton from "../../Components/CustomRadioButton";


const questions = [
    {
        id: 1,
        title: "I enjoy exploring new cultures and ideas different from my own.",
        agree: 3
    },
    {
        id: 2,
        title: "I believe everyone has the right to express their opinion, even if I don`t agree with it.",
        agree: 3
    },
    {
        id: 3,
        title: "In a discussion, I tend to focus on the areas where I disagree with the other person.",
        agree: 3
    },
    {
        id: 4,
        title: "Its more important to me to 'win' a debate than to understand the other person`s perspective.",
        agree: 3
    },
    {
        id: 5,
        title: "I enjoy reading or learning about topics that challenge my existing beliefs.",
        agree: 3
    },
    {
        id: 6,
        title: "I prefer to stick with what i know rather than try new experience or ideas.",
        agree: 3
    },
    {
        id: 7,
        title: "Its hard for me to understand why people would hold beliefs that are very different from my own.",
        agree: 3
    },
    {
        id: 8,
        title: "I often find myself in agreement with viewpoints that are different from my own.",
        agree: 3
    },
    {
        id: 9,
        title: "I often find myself in agreement with viewpoints that are different from my own.",
        agree: 3
    },
    {
        id: 10,
        title: "I open to changing my mind about something if I`m presented with compelling evidence of arguments.",
        agree: 3
    },
]

export default function QuestionerPage({ navigation }) {
    const [values, setValues] = React.useState(Array(questions.length).fill(0));

    const handleCheckboxPress = (questionIndex, optionIndex) => {
        const newValues = [...values];
        newValues[questionIndex] = optionIndex;
        setValues(newValues);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What is your perspective?</Text>
            <ScrollView style={styles.scrollView}>
                {questions.map((question, index) => (
                    <View key={index} style={styles.questionContainer}>
                        <View style={styles.questionRow}>
                            <Text style={styles.questionNumber}>{question.id}.</Text>
                            <Text style={styles.questionTitle}>{question.title}</Text>
                        </View>
                        <View style={styles.checkboxGroup}>
                            {Array.from({ length: 5 }).map((_, optionIndex) => (
                                <CustomRadioButton
                                    key={optionIndex}
                                    isChecked={values[index] === optionIndex}
                                    onPress={() => handleCheckboxPress(index, optionIndex)}
                                />
                            ))}
                        </View>
                        <View style={styles.agreeDisagreeRow}>
                            <Text style={styles.agreeText}>Disagree</Text>
                            <Text style={styles.disagreeText}>Agree</Text>
                        </View>
                    </View>
                ))}

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('SelectYourInterestsPage');
                    }}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        marginBottom: 40,
        color: "#F3C853",
        marginTop:30,
        alignSelf: 'center',
    },
    scrollView: {
        flex: 1,
        width: '100%',
        padding: 10
    },
    questionContainer: {
        marginBottom: 30
    },
    questionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    questionNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#707070",
        marginBottom: 20,
    },
    questionTitle: {
        fontSize: 18,
        marginLeft: 10,
        color: "#707070",
        fontWeight: 'bold',
    },
    checkboxGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        paddingTop: 10,
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 10
    },
    agreeDisagreeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    disagreeText: {
        fontSize: 16,
        marginLeft: 30,
        color: "#707070",
    },
    agreeText: {
        fontSize: 16,
        marginRight: 30,
        color: "#707070",
    },
    button: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 60,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: "#F8CC55",
        borderRadius: 50,
        marginTop: 30,
        marginBottom: 50,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: "400",
        textAlign: "center",
        color: "white",
        bottom: 2
    },
});





