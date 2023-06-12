import * as React from "react";
import {View, Text} from "react-native"
import { StyleSheet } from 'react-native';

export default function ProfilePage({navigation}){
    return(
        <View>
            <Text onPress={() => navigation.navigate("Home")} style={styles.homeText}>This is the profile screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    homeText:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});