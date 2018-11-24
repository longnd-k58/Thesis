import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import InputBase from '../../components/input.base';
import { Button } from 'react-native-elements';
import I18n from '../../i18n/index';

export interface Props {

};

export interface State {

};

type Style = {
    container: ViewStyle,
    imageStyle: ImageStyle,
    contentStyle: ViewStyle,
    inputStyle: ViewStyle,
    buttonStyle: ViewStyle,
    tabStyle: ViewStyle,
    textStyle: TextStyle,
    titleStyle: TextStyle,
    viewTitleStyle: ViewStyle
};

export default class Login extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    login() {

    }

    forgot() {

    }

    create() {

    }

    render() {
        return (

            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.imageStyle}
                        source={require("../../assets/Background.png")}
                    />
                </View>
                <View style={styles.contentStyle}>
                    <View style={{ flex: 5, width: '100%' }}>
                        <View style={styles.viewTitleStyle}>
                            <Text style={styles.titleStyle}>{I18n.t('login.title')}</Text>
                        </View>

                        <View style={styles.inputStyle}>
                            <InputBase
                                label={I18n.t('login.username')}
                                placeholder={I18n.t('login.plhUsername')}
                                ref={"inputBase"}

                            // defaultValue={"abc"}
                            />
                            <InputBase
                                label={I18n.t('login.password')}
                                placeholder={I18n.t('login.plhPassword')}
                                ref={"inputBase"}
                                secureText={true}
                            // defaultValue={"abc"}
                            />
                        </View>

                    </View>
                    <View style={styles.buttonStyle}>
                        <Button
                            title={I18n.t('login.btnLogin')}
                            color='white'
                            buttonStyle={{ backgroundColor: '#007AFF' }}
                            containerViewStyle={{ width: '70%' }}
                            onPress={this.login.bind(this)}
                        />
                    </View>
                    <View style={styles.tabStyle}>
                        <TouchableOpacity
                            onPress={this.forgot.bind(this)}
                        >
                            <Text style={styles.textStyle}>{I18n.t('login.forgot')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.create.bind(this)}
                        >
                            <Text style={styles.textStyle}>{I18n.t('login.create')}</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </View >
        )
    }
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    imageStyle: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },
    viewTitleStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontWeight: 'bold',
    },
    contentStyle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 2,
        justifyContent: 'space-evenly'
    },
    buttonStyle: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    tabStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center'
    },
    textStyle: {
        color: '#007AFF'
    }
})