import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import Header from '../screens/headers/About';
import profileTopTab from './profileTopTab';

const Stack = createStackNavigator();

const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={profileTopTab}
        options={{
          header: () => <Header navigation={navigation} title={'Profil'} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
