import { createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import HomeScreen from '../screen/home.screen';
import MoreScreen from '../screen/more.screen';
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
        tabBarIcon: ({ horizontal, tintColor }: any) => (
            <Ionicons name={'ios-home'} size={horizontal ? 20 : 25} color={tintColor} />
        ),
    },
};

const Course = {
    screen: CourseScreen,
    navigationOptions: {
        header: null,
        tabBarIcon: ({ horizontal, tintColor }: any) => (
            <Ionicons name={'ios-book'} size={horizontal ? 20 : 25} color={tintColor} />
        ),
    },
}

const More = {
    // screen: Drawer,
    screen: MoreScreen,
    navigationOptions: {
        header: null,
        tabBarIcon: ({ horizontal, tintColor }: any) => (
            <Ionicons name={'ios-more'} size={horizontal ? 20 : 25} color={tintColor} />
        ),
        // tabBarOnPress: ({ navigation }: any) => {
        //     console.log('navigation', navigation);
        //     navigation.openDrawer();
        // }
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
        More
    },
    {
        // defaultNavigationOptions: ({ navigation }: any) => ({
        //     tabBarIcon: ({ focused, horizontal, tintColor }: any) => {
        //         console.log('defaultNavigationOptions');
        //         const { routeName } = navigation.state;
        //         console.log('routeName', routeName);
        //         let iconName: string = '';

        //         if (routeName === 'Home') {
        //             iconName = `ios-home${focused ? '' : '-outline'}`;
        //         }
        //         else if (routeName === 'Course') {
        //             iconName = `ios-book${focused ? '' : '-outline'}`;
        //         }
        //         else if (routeName === 'Drawer') {
        //             iconName = `ios-list${focused ? '' : '-outline'}`;
        //         }
        //         // You can return any component that you like here! We usually use an
        //         // icon component from react-native-vector-icons
        //         return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        //     },
        // }),
        tabBarOptions: {
            activeTintColor: '#007AFF',
            inactiveTintColor: 'gray',
            showIcon: true
        },
    } as any
);

export default AppNavigator;