import { createStackNavigator } from 'react-navigation';
import SplashScreen from '../screen/splash.screen';
import CreateAccountScreen from '../screen/account/create_account.screen';
import ForgotPasswordScreen from '../screen/account/forgot_password.screen';
import LoginScreen from '../screen/account/login.screen';

const Login = {
    screen: LoginScreen,
    navigationOptions: {
        header: null,
    },
};

const ForgotPassword = {
    screen: ForgotPasswordScreen,
    navigationOptions: {
        header: null,
    },
};

const CreateAccount = {
    screen: CreateAccountScreen,
    navigationOptions: {
        header: null,
    },
};

const Splash = {
    screen: SplashScreen,
    navigationOptions: {
        header: null,
    },
};


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