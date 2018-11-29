import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import InputBase from '../../components/input.base';
import { Button } from 'react-native-elements';
import I18n from '../../i18n/index';
import styles from '../../styles/account/login.style';

interface Props { };

interface State { };

type Style = {
    contentStyle: ViewStyle,
    inputStyle: ViewStyle,
    buttonViewStyle: ViewStyle,
    tabStyle: ViewStyle,
    textStyle: TextStyle,
};

export default class Login extends Component<Props, State> {

    constructor(props: Props) {
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
                <View style={{ flex: 2 }}>
                    <Image
                        style={styles.imageStyle}
                        source={require("../../assets/Background.png")}
                    />
                </View>
                <View style={stylesInternal.contentStyle}>
                    <View style={{ flex: 5, width: '100%' }}>
                        <View style={styles.viewTitleStyle}>
                            <Text style={styles.titleStyle}>{I18n.t('login.title')}</Text>
                        </View>
                        <View style={stylesInternal.inputStyle}>
                            <InputBase
                                label={I18n.t('common.username')}
                                placeholder={I18n.t('common.plh_username')}
                                ref={"inputBase"}

                            // defaultValue={"abc"}
                            />
                            <InputBase
                                label={I18n.t('common.password')}
                                placeholder={I18n.t('common.plh_password')}
                                ref={"inputBase"}
                                secureText={true}
                            // defaultValue={"abc"}
                            />
                        </View>

                    </View>
                    <View style={stylesInternal.buttonViewStyle}>
                        <Button
                            title={I18n.t('login.btn_login')}
                            color='white'
                            buttonStyle={styles.buttonStyle}
                            containerViewStyle={{ width: '70%' }}
                            onPress={this.login.bind(this)}
                        />
                    </View>
                    <View style={stylesInternal.tabStyle}>
                        <TouchableOpacity
                            onPress={this.forgot.bind(this)}
                        >
                            <Text style={stylesInternal.textStyle}>{I18n.t('login.forgot')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.create.bind(this)}
                        >
                            <Text style={stylesInternal.textStyle}>{I18n.t('login.create')}</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </View >
        )
    }
}

const stylesInternal = StyleSheet.create<Style>({
    contentStyle: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 2,
        justifyContent: 'space-evenly'
    },
    buttonViewStyle: {
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