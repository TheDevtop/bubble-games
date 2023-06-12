import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomTabBar({ state, descriptors, navigation, hideNavBar }) {
    const getIcon = (routeName, focused) => {
        let iconName;
        const iconSize = focused ? 24 : 20; // Set size based on focus
        const iconOpacity = focused ? 1 : 0.7; // Set opacity based on focus

        if (routeName === 'Home') {
            iconName = 'home';
        } else if (routeName === 'Explore') {
            iconName = 'search';
        } else if (routeName === 'Profile') {
            iconName = 'person';
        }

        return (
            <Ionicons
                name={iconName}
                size={iconSize}
                color="#C3A56C"
                style={{ opacity: iconOpacity }}
            />
        );
    };

    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', height: 120, backgroundColor: '#F3EFE8' }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={onPress}
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                        >
                            {getIcon(route.name, isFocused)}
                            <Text style={{ color: '#C3A56C', opacity: isFocused ? 1 : 0.7, fontSize: 14 }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            
        </SafeAreaView>
    );
}
