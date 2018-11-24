/**
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Platform,
    BackHandler,
    Alert,
    Text,
    TouchableOpacity
} from 'react-native';
import Slash from './screen/Slash';
import Login from './screen/account/Login';

type Props = {};
type State = {};

export default class App extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentWillMount() {
        StatusBar.setBarStyle('light-content', false);
    }
    //Call alert base
    handleBackButton() {
        Alert.alert(
            'Exit App',
            'Exiting the application?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            },], {
                cancelable: false
            }
        )
        return true;
    }

    componentDidMount() {
        if (Platform.OS == 'android')
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnMount() {
        if (Platform.OS == 'android')
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    onPress() {
        console.log('icon content')
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <Slash /> */}
                <Login />
            </View>
        );
    }
}