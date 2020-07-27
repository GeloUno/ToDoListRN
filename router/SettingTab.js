import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from './../screens/Profile';
import PrivateSettings from './../screens/PrivateSettings';
import PublicSettings from './../screens/PublicSettings';
import ProtectedSettings from './../screens/ProtectedSettings';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
// const myIcon = <Icon name="chevron-left" size={26} color="#900" />;

export default function SettingTab({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="PublicSettings"
      tabBarOptions={{
        activeTintColor: '#0373fc',
      }}>
      <Tab.Screen
        name="Private"
        component={PrivateSettings}
        navigation={navigation}
        options={{
          activeBackgroundColor: '#900',
          tabBarLabel: 'Prywatne',
          tabBarIcon: ({color}) => {
            return <Icon name="user" color={color} size={26} />;
          },
        }}
      />
      <Tab.Screen
        name="Public"
        component={PublicSettings}
        options={{
          tabBarLabel: 'Publiczny',
          tabBarIcon: ({color}) => {
            return <Icon name="users" color={color} size={26} />;
          },
        }}
      />
      <Tab.Screen
        name="Protected"
        component={ProtectedSettings}
        options={{
          tabBarLabel: 'Chroniony',
          tabBarIcon: ({color}) => {
            return <Icon name="user-secret" color={color} size={26} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
