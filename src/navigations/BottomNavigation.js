import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Wishlist from '../screens/Wishlist';
import CustomerSupport from '../screens/CustomerSupport';
import Settings from '../screens/Settings';

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      activeColor="#e32f45"
      inactiveColor="#748c94"
      barStyle={{
        backgroundColor: '#ffffff',
        elevation: 3,
        height: 65,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../components/assets/images/TabIcons/home.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../components/assets/images/TabIcons/love.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={CustomerSupport}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../components/assets/images/TabIcons/customer-service.png')}
              style={[styles.icon, {tintColor: color, width: 35, height: 35, bottom:5}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../components/assets/images/TabIcons/setting.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});

export default BottomNav;
