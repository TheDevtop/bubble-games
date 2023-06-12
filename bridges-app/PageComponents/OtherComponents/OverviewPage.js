import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';

const features = [
    {
        id: 1,
        title: "Perspective Matching",
        description: "Get matched with other users based on " +
            "your interests, beliefs, and viewpoints. " +
            "Broaden your understanding by engaging " +
            "with diverse perspectives that align " +
            "with or challenge your own interests."
       
    },
    {
        id: 2,
        title: "Empathy Cards", 
        description: "A source of thought-provoking insights and " +
            "uplifting messages to encourage " +
            "empathy in your interactions. " +
            "Consider them in your daily dose of " +
            "inspiration"
        
    },
    {
        id: 3,
        title: "Empathy Actions",
        description: "Get your personal guide to practice " +
            "empathy in everyday life. Receive actionable " +
            "steps, such as listening to a podcast from a " +
            "different perspective, reading a book " +
            "about another culture, or engaging in " +
            "a meaningful conversation."
    }
]

export default function OverviewPage({ navigation }) {
    const [value, setValue] = React.useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bridges</Text>
            <Text style={styles.description}>{features[value].title}</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.descriptionDescription}>{features[value].description}</Text>
            </ScrollView>
            <View style={styles.radioGroup}>
                {features.map((feature, index) => (
                    <RadioButton
                        key={index}
                        value={feature.id}
                        status={ value === index ? 'checked' : 'unchecked' }
                        onPress={() => setValue(index)}
                        uncheckedColor="grey" //Color of the radio button when it's not selected
                        color="#707070" //Color of the radio button when it's selected
                    />

                ))}
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (value === features.length - 1) {
                        navigation.navigate('Questioner');
                    } else {
                        setValue((value + 1) % features.length);
                    }
                }}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
        marginTop: 150
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
        left: 20,
        marginTop: 100,
        marginBottom: 20
    },
    scrollView: {
        width: '100%',
        height: 100,
    },
    descriptionDescription:{
        fontSize: 18,
        color: "#707070",
        textAlign: "left",
        left: 20,        
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 300,
        height: 60,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: "#F8CC55",
        borderRadius: 50,
        marginTop: 60,
        marginBottom: 90,
    },
    buttonText: {
        flex: 1,
        fontSize: 30,
        fontWeight: "400",
        textAlign: "center",
        color: "white",
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        color: "#707070",
    }
});
