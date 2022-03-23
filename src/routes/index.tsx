import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import { Image, Text, View } from 'react-native';

import FloatingMenuButton from '../components/FloatingMenuButton';
import PostPage from '../pages/Post';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: (props) => (
            <Image
              style={{ width: 150, height: 50 }}
              source={require('../../assets/logo.png')}
              resizeMode='contain' />
          ),
          headerRight: () => <FloatingMenuButton />
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="PostPage"
          component={PostPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;