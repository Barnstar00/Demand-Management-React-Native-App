import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Authentication from '@src/components/screens/Authentication';
import AuthWithPhoneNumber from '@src/components/screens/AuthWithPhoneNumber';
import AuthVerificationCode from '@src/components/screens/AuthVerificationCode';
import Login from '@src/components/screens/Login';
import ForgotPassword from '@src/components/screens/ForgotPassword';
import SPRegister1 from "@src/components/screens/Register/SPRegister1";
import SPRegister2 from "@src/components/screens/Register/SPRegister2";
import SPRegister3 from "@src/components/screens/Register/SPRegister3";
import SPRegister4 from "@src/components/screens/Register/SPRegister4";
import SPRegister5 from "@src/components/screens/Register/SPRegister5";

type AuthenticationStackProps = {};
const Stack = createStackNavigator();

const AuthenticationStack: React.FC<AuthenticationStackProps> = () => {
    return (
        <Stack.Navigator
            initialRouteName="AuthenticationScreen"
            screenOptions={{
                headerShown: true,
                title: '',
                headerTransparent: true,
            }}>
            <Stack.Screen name="AuthenticationScreen" component={Authentication}/>
            <Stack.Screen
                options={{
                    headerBackTitle: 'Back',
                    headerTransparent: true,
                }}
                name="AuthWithPhoneNumberScreen"
                component={AuthWithPhoneNumber}
            />
            <Stack.Screen
                name="AuthVerificationCodeScreen"
                component={AuthVerificationCode}
            />
            <Stack.Screen name="LoginScreen" component={Login}/>
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword}/>


            <Stack.Screen name="SPRegister1"
                          component={SPRegister1}/>

            <Stack.Screen name="SPRegister2"
                          component={SPRegister2}/>
            <Stack.Screen name="SPRegister3"
                          component={SPRegister3}/>

            <Stack.Screen name="SPRegister4"
                          component={SPRegister4 }/>

            <Stack.Screen name="SPRegister5"
                          component={SPRegister5 }/>

        </Stack.Navigator>
    );
};

export default AuthenticationStack;
