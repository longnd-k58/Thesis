import React, { Component } from 'react';
import { Text, View, StyleSheet, ViewStyle, ImageStyle, Image } from 'react-native';
import I18n from '../../i18n/index';
import styles from '../../styles/account/login.style';
import InputBase from '../../components/input.base';
import { Button } from 'react-native-elements';

interface Props { };

interface State { };

type Style = {
    inputStyle: ViewStyle,
    buttonViewStyle: ViewStyle
};

export default class CreateAccount extends Component {
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
                    <View style={styles.viewTitleStyle}>
                        <Text style={styles.titleStyle}>{I18n.t('create_account.title')}</Text>
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
                        <InputBase
                            label={I18n.t('create_account.repeat_password')}
                            placeholder={I18n.t('create_account.plh_repeat_password')}
                            ref={"inputBase"}
                            secureText={true}
                        // defaultValue={"abc"}
                        />
                    </View>
                    <View style={stylesInternal.buttonViewStyle}>
                        <Button
                            title={I18n.t('create_account.btn_create')}
                            color='white'
                            buttonStyle={styles.buttonStyle}
                            containerViewStyle={{ width: '70%' }}
                            onPress={this.create.bind(this)}
                        />
                    </View>
                    <View style={{ flex: 1 }}></View>
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
    buttonViewStyle: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})