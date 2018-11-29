import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, ImageStyle, KeyboardAvoidingView } from 'react-native';
import { Icon } from 'react-native-elements';
const { StarRating } = require('react-native-star-rating');
import defaultStyles from '../styles/default.style';


export interface Props {
    defaultValue?: string,
    secureText?: boolean,
    label?: string,
    type?: string,
    disabled?: boolean,
    value?: string,
    placeholder?: string,
    starSize?: number
};

export interface State {
    secureText: boolean,
    value: any,

};

type Style = {
    container: ViewStyle;
    inputBase: TextStyle;
    label: TextStyle;
    showPasswordIcon: ImageStyle;
    menuStyle: ImageStyle;
    iconStyle: ImageStyle;
};

export default class InputBase extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            value: null,
            secureText: false
        }
    }

    onChangeText(value: any) {
        console.log('text input base', value)
        this.setState({ value })
    }

    onStarRatingPress(value: any) {
        console.log('rating input base', value)
        this.setState({ value })
    }

    componentWillMount() {
        this.props.defaultValue ? this.setState({ value: this.props.defaultValue }) : null
        this.props.secureText ? this.setState({ secureText: this.props.secureText }) : null
    }

    onPress() {
        this.setState(state => ({
            secureText: !state.secureText
        }))
    }

    renderShowPassword() {
        return (
            <TouchableOpacity
                style={styles.showPasswordIcon}
                onPress={this.onPress.bind(this)}
            >
                {
                    this.state.secureText ?
                        <Icon
                            containerStyle={styles.menuStyle}
                            iconStyle={styles.iconStyle}
                            name="eye-slash"
                            // color="white"
                            type="font-awesome"
                        />
                        :
                        <Icon
                            containerStyle={styles.menuStyle}
                            iconStyle={styles.iconStyle}
                            name="eye"
                            // color="white"
                            type="font-awesome"
                        />
                }
            </TouchableOpacity>
        )
    }

    render() {
        const { type, label } = this.props;
        if (type === 'rate') {
            return (
                <StarRating
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    rating={this.props.disabled && this.props.value ? parseInt(this.props.value) : this.state.value ? parseInt(this.state.value) : 0}
                    selectedStar={(value: any) => this.onStarRatingPress(value)}
                    fullStarColor={defaultStyles.Colors.Yellow}
                    halfStarColor={defaultStyles.Colors.Yellow}
                    starSize={this.props.starSize}
                    {...this.props}
                />
            )
        }
        return (
            <View style={styles.container}>
                {label != null && label != undefined ? <Text style={styles.label}>{label}</Text> : null}
                <TextInput
                    onChangeText={this.onChangeText.bind(this)}
                    style={styles.inputBase}
                    defaultValue={this.props.defaultValue}
                    placeholder={this.props.placeholder}
                    autoCapitalize='none' //disable capitalize
                    underlineColorAndroid='transparent' //disable underline in android
                    {...this.props}
                    secureTextEntry={this.state.secureText}
                />
                {this.props.secureText ? this.renderShowPassword() : null}
            </View>
        )

    }
}

const styles = StyleSheet.create<Style>({
    container: {
        // borderWidth: 1,
        // borderRadius: defaultStyles.Border.Radius,
        // borderColor: defaultStyles.Border.Color,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: defaultStyles.Margin.Right,
        marginLeft: defaultStyles.Margin.Left,
        justifyContent: 'space-around',
        // position: 'relative'
    },
    inputBase: {
        position: 'relative',
        flex: 1,
        borderWidth: 1,
        borderRadius: defaultStyles.Border.Radius,
        borderColor: defaultStyles.Border.Color,
        height: defaultStyles.Dimensions.Height,
        padding: defaultStyles.Padding.Text
    },
    label: {
        padding: defaultStyles.Padding.Text,
        paddingRight: defaultStyles.Padding.Right,
        width: '40%'
    },
    showPasswordIcon: {
        position: 'absolute',
        right: 0,
        marginRight: defaultStyles.Margin.SecureText
    },
    menuStyle: {

    },
    iconStyle: {

    }
})