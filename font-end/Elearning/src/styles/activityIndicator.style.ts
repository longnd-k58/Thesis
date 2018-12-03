import { StyleSheet, ViewStyle } from 'react-native';

type Style = {
    loading: ViewStyle,
    activityIndicator: ViewStyle,
}

const styles = StyleSheet.create<Style>({
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
    activityIndicator: {
        borderWidth: 0.1,
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: 60,
        height: 60,
        paddingTop: 3,
        paddingLeft: 3
    },
})
export default styles;