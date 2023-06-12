import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Pages
import ExplorePage from "./PageComponents/ExplorePage";
import HomePage from "./PageComponents/HomePage";
import ProfilePage from "./PageComponents/ProfilePage";
import PerspectiveMatching from "./PageComponents/HomePages/PerspectiveMatching";
import ChatPage from "./PageComponents/HomePages/ChatPage";
import CustomTabBar from "./Components/CustomTabBar";
import EmpathyCardsPage from "./PageComponents/HomePages/EmpathyCardsPage";
import EmpathyActionPage from "./PageComponents/HomePages/EmpathyActionPage";

const homeName = "Home";
const exploreName = "Explore";
const profileName = "Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="PerspectiveMatching" component={PerspectiveMatching} />
            <Stack.Screen name="ChatPage" component={ChatPage} />
            <Stack.Screen name="EmpathyCardsPage" component={EmpathyCardsPage} />
            <Stack.Screen name="EmpathyActionPage" component={EmpathyActionPage} />
        </Stack.Navigator>
    );
}

export default function MainContainer() {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} style={{ color: "#F3EFE8" }} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name={homeName} component={HomeStack} />
            <Tab.Screen name={exploreName} component={ExplorePage} />
            <Tab.Screen name={profileName} component={ProfilePage} />
        </Tab.Navigator>
    );
}
