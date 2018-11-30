import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageStyle, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import I18n from '../i18n/index';
import { inject, observer } from 'mobx-react';
import UIStore from '../stores/ui.store';
import styles from '../styles/account/login.style';

interface Props {

};

interface State {
    height: number
};

interface Style {
    textContent: TextStyle,
    imageView: ViewStyle,
    imageContent: ImageStyle,
};

@inject('UIStore')
export default class Splash extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            height: 0
        }
    }

    /**
     * Get height view of imageView
     * @param e 
     */
    measureView(e: any) {
        this.setState({
            // x: e.nativeEvent.layout.x,
            // y: e.nativeEvent.layout.y,
            // width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height
        })
    }

    componentDidMount() {
        // UIStore.setSkipSplash();
    }

    render() {
        let { height } = this.state;
        let distanceImage = height / 2 - height / 4;
        // console.log('i18n', I18n.t('login.title'))
        // console.log('bottom: ', Dimensions.get('window').height / 2)
        return (
            <View style={styles.container}>
                <View
                    style={innerStyles.imageView}
                    onLayout={(event) => this.measureView(event)}
                >
                    <Image
                        style={innerStyles.imageContent}
                        source={require("../assets/Background.png")}
                    />
                    {
                        distanceImage !== 0 ?
                            <Text style={[innerStyles.textContent, { bottom: distanceImage }]}>
                                {I18n.t('slash.title')}
                            </Text>
                            : null
                    }
                </View>
                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.skipSplash.bind(this)}>
                        <Text>Skip</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        )
    }
}


const innerStyles = StyleSheet.create<Style>({
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