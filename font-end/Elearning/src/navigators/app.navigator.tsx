import { createBottomTabNavigator, NavigationScreenProps } from 'react-navigation';
import React, { Component } from 'react';
import HomeScreen from '../screen/home.screen';
import CourseScreen from '../screen/course/course.screen';
import Drawer from './drawer.navigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
// const AppNavigator = createSwitchNavigator(
//     {
//         // Course: Drawer
//     },
//     {
//         initialRouteName: "App"
//     }
// );

const Home = {
    screen: HomeScreen,
    navigationOptions: {
        header: null,
    },
};
const Course = {
    screen: HomeScreen,
    navigationOptions: {
        header: null,
    },
}

/**
 * Create TAB BAR 
 * 
 */
const AppNavigator = createBottomTabNavigator(
    {
        Home,
        Course,
        More: Drawer
    },
    {
        defaultNavigationOptions: ({ navigation }: any) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }: any) => {
                console.log('defaultNavigationOptions');
                const { routeName } = navigation.state;
                console.log('routeName', routeName);
                let iconName: string = '';

                if (routeName === 'Home') {
                    iconName = `home${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Course') {
                    iconName = `book${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Drawer') {
                    iconName = `list${focused ? '' : '-outline'}`;
                }
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#007AFF',
            inactiveTintColor: 'gray',
        },
    } as any
);

export default AppNavigator;