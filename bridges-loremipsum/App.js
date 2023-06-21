import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "./PageComponents/OtherComponents/WelcomePage";
import SignUpPage from "./PageComponents/OtherComponents/SignUpPage";
import LoginPage from "./PageComponents/OtherComponents/LoginPage";
import MainContainer from "./MainContainer";
import OverviewPage from "./PageComponents/OtherComponents/OverviewPage";
import QuestionerPage from "./PageComponents/OtherComponents/QuestionerPage";
import NotificationPage from "./PageComponents/OtherComponents/NotificationPage";
import YouDidItPage from "./PageComponents/YouDidItPage";
import ChatPage from "./PageComponents/HomePages/ChatPage";
import RegisterPage from "./PageComponents/OtherComponents/RegisterPage";
import SelectYourInterestsPage from "./PageComponents/OtherComponents/SelectYourInterestsPage";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Welcome" component={WelcomePage} />
                <Stack.Screen name="OverviewPage" component={OverviewPage} />
                <Stack.Screen name="SignUp" component={SignUpPage} />
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="Questioner" component={QuestionerPage} />
                <Stack.Screen name="RegisterPage" component={RegisterPage} />
                <Stack.Screen name="Notification" component={NotificationPage} />
                <Stack.Screen name="YouDidIt" component={YouDidItPage} />
                <Stack.Screen name="Main" component={MainContainer} />
                <Stack.Screen name="SelectYourInterestsPage" component={SelectYourInterestsPage} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
