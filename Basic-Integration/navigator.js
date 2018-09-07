import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import OtherScreen from './screens/OtherScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';


const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen});

export const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);