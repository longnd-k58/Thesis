import { createStackNavigator } from 'react-navigation';
import Splash from '../screen/Splash';
import CreateAccount from '../screen/account/CreateAccount';
import ForgotPassword from '../screen/account/ForgotPassword';
import Login from '../screen/account/Login';

export const AuthStack = createStackNavigator(
    {
        Login,
        CreateAccount,
        ForgotPassword
    },
    {
        initialRouteName: 'Login',
    }
);

export const AuthStackWithSplash = createStackNavigator(
    {
        Splash,
        Login,
        CreateAccount,
        ForgotPassword
    },
    {
        initialRouteName: 'Splash',
    },
);