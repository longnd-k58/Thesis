import React, { Component } from 'react';
import { Text, View, StyleSheet, ViewStyle, ImageStyle, Image } from 'react-native';
import CourseContainer from '../containers/course.container';
import headerStyles from '../styles/header.style';

interface Props { };

interface State { };

type Style = {
    container: ViewStyle,
};

export default class Home extends Component {


    static navigationOptions = ({ navigation }: any) => ({
        drawerLabel: 'Danh sách khoá học',
        headerTitle: 'Danh sách khoá học',
        headerTintColor: '#fff',
        headerTitleStyle: [
            {
                color: 'white',
            },
            headerStyles.navigatorHeaderWithoutTab
        ],
        headerStyle: headerStyles.headerStyle
    })

    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={stylesInternal.container}>
                <CourseContainer root_navigation={this.props.navigation} />
            </View>
        )
    }
}

const stylesInternal = StyleSheet.create<Style>({

    container: {

    },
})