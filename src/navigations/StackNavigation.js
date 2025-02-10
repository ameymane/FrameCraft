import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../splash/Splash';
import Started from '../screens/Started';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPass from '../screens/ForgotPass';
import Home from '../screens/Home';
import BottomNav from './BottomNavigation';
import Success from '../screens/Success';
import CategoryDetails from '../screens/CategoryDetails';
import ProductDetails from '../screens/ProductDetails';
import Myfav from '../screens/Myfav';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={Splash} name="Splash" />
        <Stack.Screen component={Started} name="Started" />
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={SignUp} name="SignUp" />
        <Stack.Screen component={ForgotPass} name="ForgotPass" />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={BottomNav} name="BottomNav" />
        <Stack.Screen component={Success} name="Sucess" />
        <Stack.Screen component={CategoryDetails} name="Details" />
        <Stack.Screen component={ProductDetails} name="ProductDetails" />
        <Stack.Screen component={Myfav} name="Myfav" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
