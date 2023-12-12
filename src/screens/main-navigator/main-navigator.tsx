import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactNode} from 'react';
import {NavigationScreens} from '../../utils/constants/navigation';
import HomeScreen from '../home-screen';
import AlbumScreen from '../album-screen';

const Stack = createStackNavigator();

const MainNavigator = (): ReactNode => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={NavigationScreens.home} component={HomeScreen} />
        <Stack.Screen
          name={NavigationScreens.albumScreen}
          component={AlbumScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
