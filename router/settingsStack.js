import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import Settings from './../screens/Settings';
import SettingTab from './SettingTab';
import Header from '../screens/headers/About';

const Stack = createStackNavigator();

const SettingsStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingTab}
        options={{
          header: () => <Header navigation={navigation} title={'Settings'} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
