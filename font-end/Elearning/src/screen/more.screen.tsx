import React, { Component } from 'react';
import { Text, View, StyleSheet, ViewStyle, ImageStyle, Image } from 'react-native';
import I18n from '../i18n/index';
import styles from '../styles/account/login.style';
import InputBase from '../components/input.base';
import { Button } from 'react-native-elements';

interface Props { };

interface State { };

type Style = {
    inputStyle: ViewStyle,
    buttonViewStyle: ViewStyle
};

export default class More extends Component {
    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }

    create() {

    }


    render() {
        return (
            <View style={styles.container}>
                <Text>More Screen</Text>
            </View>
        )
    }
}

const stylesInternal = StyleSheet.create<Style>({
    inputStyle: {
        flex: 3,
        justifyContent: 'space-evenly'
    },
    buttonViewStyle: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})