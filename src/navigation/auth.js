import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screen/Login';
import Register from '../screen/Register';
import ForgotPassword from '../screen/ForgotPassword';
import ConfirmPassword from '../screen/ConfirmPassword';

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Register}
        name="Register"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ForgotPassword}
        name="Forgot Password"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ConfirmPassword}
        name="Confirm Password"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
