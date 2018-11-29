import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Platform,
    BackHandler,
    Alert,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    ViewStyle
} from 'react-native';
import { AuthStack, AuthStackWithSplash } from '../navigators/auth.navigator';
// import AppNavigator from '../navigators/app.navigator';
import store from '../stores/index.store';
import { observer } from 'mobx-react';
import UILoading from '../common/uiloading.common';
import DropdownAlertCommon from '../common/dropdownalert.common';

interface Props { };
interface State { };

type Style = {
    activityIndicatorStyle: ViewStyle,
    loading: ViewStyle,
    mainApp: ViewStyle
};

@observer
export default class App extends Component<Props, State> {

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

    /**
     * When app opened
     * Loading activity indicator
     * Open Login Screen if you haven't session
     * Open Course Screen if you have session
     */
    render() {
        let mainUI = null;
        if (store.SessionStore.status == 'loading') {
            mainUI = <View style={innerStyles.loading}>
                <ActivityIndicator
                    size="large"
                    color="#000"
                    style={innerStyles.activityIndicatorStyle}
                />
            </View>
        }
        else if (!store.UIStore.shouldGotoMain) {
            if (store.UIStore.skipSplash) {
                console.log('without splash')
                mainUI = <AuthStack />
            }
            else {
                console.log('splash')
                mainUI = <AuthStackWithSplash />

            }
        }
        else {
            console.log('app')
            // mainUI = <AppNavigator />
        }
        console.log('Main UI', mainUI)
        return (
            <View style={innerStyles.mainApp}>
                <UILoading />
                {mainUI}
                {/* <DropdownAlertCommon /> */}
            </View>
        );
    }
}

const innerStyles = StyleSheet.create<Style>({
    mainApp: {
        flex: 1,
        position: 'relative'
    },
    activityIndicatorStyle: {
        // borderWidth: 0.1,
        // borderRadius: 8,
        // backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: 40,
        height: 40,
        // paddingTop: 3,
        // paddingLeft: 3
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
    },
})