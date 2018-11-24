import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageStyle, ViewStyle, TextStyle } from 'react-native';
import I18n from '../i18n/index';

export interface Props { };
export interface State {
    height: number
};
type Style = {
    loginView: ViewStyle;
    textContent: TextStyle;
    imageView: ViewStyle;
    imageContent: ImageStyle;
};
export default class Slash extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        }
    }
    /**
     * Get height view of imageView
     * @param e 
     */
    measureView(e) {
        this.setState({
            // x: e.nativeEvent.layout.x,
            // y: e.nativeEvent.layout.y,
            // width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height
        })
    }

    render() {
        let { height } = this.state;
        let distanceImage = height / 2 - height / 4;
        // console.log('i18n', I18n.t('login.title'))
        // console.log('bottom: ', Dimensions.get('window').height / 2)
        return (
            <View style={styles.loginView}>
                <View
                    style={styles.imageView}
                    onLayout={(event) => this.measureView(event)}
                >
                    <Image
                        style={styles.imageContent}
                        source={require("../assets/Background.png")}
                    />
                    {
                        distanceImage !== 0 ?
                            <Text style={[styles.textContent, { bottom: distanceImage }]}>
                                {I18n.t('slash.title')}
                            </Text>
                            : null
                    }
                </View>
                <View style={{ flex: 1 }}></View>
            </View >
        )
    }
}
const styles = StyleSheet.create<Style>({
    loginView: {
        flex: 1,
        alignItems: 'stretch'
    },
    imageView: {
        flex: 5,
        alignItems: 'center',
    },
    imageContent: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },
    textContent: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})