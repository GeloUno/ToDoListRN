import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import profileOne from './../screens/profileOne';
import profileTwo from './../screens/profileTwo';
import profileThree from './../screens/profileThree';
import profileFour from './../screens/profileFour';

const Tab = createMaterialTopTabNavigator();

const profileTopTab = () => {
  return (
    <Tab.Navigator tabBarPosition="top">
      <Tab.Screen name="Jeden" component={profileOne} />
      <Tab.Screen name="Dwa" component={profileTwo} />
      <Tab.Screen name="Trzy" component={profileThree} />
      <Tab.Screen name="Cztery" component={profileFour} />
    </Tab.Navigator>
  );
};

export default profileTopTab;
