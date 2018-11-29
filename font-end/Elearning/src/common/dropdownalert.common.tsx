import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    ImageStyle
} from 'react-native';
import { inject, observer } from "mobx-react";
import UIStore from '../stores/ui.store';
const markGreen = require('../assets/mark_green.png');
const DropdownAlert = require('react-native-dropdownalert');
type Props = {
    containerStyle?: any,
    backgroundStyle?: any,
    indicatorStyle?: any,
    indicatorSize?: any,
    indicatorColor?: string,
    UIStore?: UIStore
};
type State = {};
type Style = {
    imageStyle: ImageStyle
};

@inject('UIStore')
@observer
export default class DropdownAlertCommon extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    get UIStore(): UIStore {
        return this.props.UIStore as UIStore;
    }

    onClose(data: any) {
        this.UIStore.dropdownOnClose(data);
    }

    componentDidMount() {
        // this.props.UIStore.initDropdown(this.dropdown);
    }

    render() {
        const currentAlert = this.UIStore.currentAlert;
        const duration = currentAlert && currentAlert.duration ? currentAlert.duration : 800;
        return (
            <DropdownAlert
                // ref={(ref: any) => this.dropdown = ref}
                onClose={(data: any) => this.onClose(data)}
                containerStyle={{ marginTop: 100 }}
                renderImage={(props: any) => <Image style={props.imageStyle} source={markGreen} />}
                imageStyle={innerStyles.imageStyle}
                zIndex={2}
                closeInterval={duration}
            />
        );
    }
}
const innerStyles = StyleSheet.create<Style>({
    imageStyle: {
        padding: 8,
        width: 16,
        height: 16,
        alignSelf: 'center'
    }
})