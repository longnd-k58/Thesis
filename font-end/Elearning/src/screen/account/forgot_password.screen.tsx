import React, { Component } from 'react';
import { Text, View, StyleSheet, ViewStyle, Image, TextStyle } from 'react-native';
import I18n from '../../i18n/index';
import styles from '../../styles/account/login.style';
import InputBase from '../../components/input.base';
import { Button } from 'react-native-elements';

interface Props { };

interface State { };

type Style = {
    inputStyle: ViewStyle,
    smallTitleStyle: TextStyle,
    buttonViewStyle: ViewStyle,
    viewTitleStyle: ViewStyle
};

export default class ForgotPassword extends Component {
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
                <View style={{ flex: 2 }}>
                    <Image
                        style={styles.imageStyle}
                        source={require("../../assets/Background.png")}
                    />
                </View>
                <View style={styles.contentStyle}>
                    <View style={[styles.viewTitleStyle, stylesInternal.viewTitleStyle]}>
                        <Text style={styles.titleStyle}>{I18n.t('forgot_password.title')}</Text>
                        <Text style={stylesInternal.smallTitleStyle}>{I18n.t('forgot_password.small_title')}</Text>
                    </View>

                    <View style={stylesInternal.inputStyle}>
                        <InputBase
                            label={I18n.t('common.username')}
                            placeholder={I18n.t('common.plh_username')}
                            ref={"inputBase"}
                        // defaultValue={"abc"}
                        />
                    </View>
                    <View style={stylesInternal.buttonViewStyle}>
                        <Button
                            title={I18n.t('forgot_password.btn_forgot_password')}
                            color='white'
                            buttonStyle={styles.buttonStyle}
                            containerViewStyle={{ width: '70%' }}
                            onPress={this.create.bind(this)}
                        />
                    </View>
                    <View style={{ flex: 2 }}></View>
                </View>
            </View>
        )
    }
}

const stylesInternal = StyleSheet.create<Style>({
    inputStyle: {
        flex: 3,
        justifyContent: 'space-evenly'
    },
    smallTitleStyle: {
        alignSelf: 'flex-start',
        marginLeft: 15

    },
    viewTitleStyle: {
        justifyContent: 'space-around',
        // alignItems: 'flex-start',
        // marginLeft: 10
    },
    buttonViewStyle: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})
