import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import About from './../screens/About';
import Header from '../screens/headers/About';

const Stack = createStackNavigator();

const AboutStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{header: () => <Header navigation={navigation} title={'About'} />}}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
