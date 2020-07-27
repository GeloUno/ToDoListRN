import React from 'react';
import {View} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Todos from '../screens/ToDos';
import Home from '../screens/Home';
import About from './../screens/About';

const Stack = createStackNavigator();

const routeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Todos"
        component={Todos}
        options={{
          title: 'Person To Do',
          headerStyle: {backgroundColor: '#333'},
          headerTintColor: '#eee',
        }}
      />
    </Stack.Navigator>
  );
};

export default routeStack;
