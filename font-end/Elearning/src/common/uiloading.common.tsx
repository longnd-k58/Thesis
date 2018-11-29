import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    ViewStyle,
    StyleSheet
} from 'react-native';
import { inject, observer } from 'mobx-react';
import UIStore from '../stores/ui.store';

interface Props {
    containerStyle?: any,
    backgroundStyle?: any,
    indicatorStyle?: any,
    indicatorSize?: any,
    indicatorColor?: string,
    UIStore?: UIStore
};
interface State { };
interface Style {
    container: ViewStyle,
    background: ViewStyle,
    activityIndicatorStyle: ViewStyle,
};

@inject('UIStore')
@observer
export default class UICommon extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
    }

    get UIStore(): UIStore {
        return this.props.UIStore as UIStore;
    }

    render() {
        console.log('Open UI Loading')
        const containerStyle = this.props.containerStyle || {};
        const backgroundStyle = this.props.backgroundStyle || {};
        const indicatorStyle = this.props.indicatorStyle || {};
        const indicatorSize = this.props.indicatorSize || "large";
        const indicatorColor = this.props.indicatorColor || "#000";
        const containerSize = this.UIStore.shouldShowLoading ? { width: '100%', height: '100%' } : { width: 0, height: 0 };
        return (
            <View style={[innerStyles.container, containerStyle, containerSize]} >
                <View style={[innerStyles.background, backgroundStyle]}></View>
                {
                    this.UIStore.shouldShowLoading
                        ?
                        <ActivityIndicator
                            size={indicatorSize}
                            color={indicatorColor}
                            style={[innerStyles.activityIndicatorStyle, indicatorStyle]}
                        />
                        : null
                }
            </View>
        );
    }
}
const innerStyles = StyleSheet.create<Style>({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        zIndex: 10001,
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.3
    },
    activityIndicatorStyle: {
        width: 40,
        height: 40,
    },
})