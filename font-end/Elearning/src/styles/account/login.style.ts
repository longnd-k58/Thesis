import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';

type Style = {
    container: ViewStyle,
    contentStyle: ViewStyle,
    viewTitleStyle: ViewStyle,
    imageStyle: ImageStyle,
    titleStyle: TextStyle,
    buttonStyle: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    contentStyle: {
        flex: 3
    },
    imageStyle: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },
    viewTitleStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontWeight: 'bold',
    },
    buttonStyle: {
        backgroundColor: '#007AFF'
    }
})
export default styles;