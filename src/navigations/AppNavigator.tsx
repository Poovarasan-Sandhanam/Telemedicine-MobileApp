import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name="App" component={AppStack} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
