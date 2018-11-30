import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Alert,
    StyleSheet,
    ViewStyle,
    TextStyle,
    ImageStyle
} from 'react-native';
import { Avatar, Rating } from 'react-native-elements';
import { DrawerItems } from 'react-navigation';
import { withNavigation, NavigationScreenProp, NavigationInjectedProps, createDrawerNavigator } from 'react-navigation';
import { inject } from 'mobx-react';
import SessionStore from '../stores/session.store';
import I18n from '../i18n';
import Setting from '../screen/setting/setting.screen';


interface Props {
    navigation: NavigationScreenProp<any, any>,
    SessionStore?: SessionStore
};

interface State { };

interface Style {
    container: ViewStyle,
    header: ViewStyle,
    nameLabel: TextStyle,
    signOutText: TextStyle,
    signOutIcon: ImageStyle,
    signOutContainer: ViewStyle,
    avatarContainer: ViewStyle
};

@inject('SessionStore')
class DrawerContent extends Component<any, any> {

    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }

    get SessionStore(): SessionStore {
        return this.props.SessionStore as SessionStore;
    }

    logOut() {
        Alert.alert(
            'Đăng xuất',
            'Bạn có muốn đăng xuất không?',
            [
                {
                    text: 'Không',
                    onPress: () => console.log('Cancel Pressed'),
                },
                {
                    text: 'Có',
                    onPress: () => {
                        // SessionStore.logout();
                    }
                },
            ],
            {
                cancelable: false
            }
        )
        return true;
    }

    renderSignOutComponent() {
        return (
            <TouchableOpacity
                style={stylesInternal.signOutContainer}
                onPress={this.logOut.bind(this)}
            >
                <Image
                    // source={require("../assets/images/icons/sign_out.png")}
                    source={require("../assets/mark_green.png")}
                    style={stylesInternal.signOutIcon}
                />
                <Text style={stylesInternal.signOutText}>{I18n.t("common.sign_out")}</Text>
            </TouchableOpacity>
        );
    }


    render() {

        return (
            <View style={stylesInternal.container}>
                <TouchableOpacity
                    style={stylesInternal.header}
                    onPress={() => this.props.navigation.navigate("EditProfile")
                    }
                >
                    <Avatar
                        large
                        rounded
                        source={{ uri: this.props.SessionStore.user.avatar }}
                        activeOpacity={1}
                        // imageProps={{ resizeMode: "cover" }}
                        containerStyle={stylesInternal.avatarContainer}
                    />
                    <View>
                        <Text style={stylesInternal.nameLabel}> {this.props.SessionStore.user.display_name}</Text>
                    </View>
                </TouchableOpacity>
                < DrawerItems {...this.props} labelStyle={{ marginLeft: 0 }} />
                {this.renderSignOutComponent()}
            </View>

        );
    }

}

const stylesInternal = StyleSheet.create<Style>({
    container: {

    },
    header: {

    },
    nameLabel: {

    },
    avatarContainer: {

    },
    signOutContainer: {

    },
    signOutIcon: {

    },
    signOutText: {

    }

})


const Drawer = createDrawerNavigator(
    {
        Setting
    },
    {
        contentComponent: withNavigation(DrawerContent),
    },
);
export default Drawer;
