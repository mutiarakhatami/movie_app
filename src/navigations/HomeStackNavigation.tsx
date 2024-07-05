import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';

export type RootStackParamList = {
  Home: undefined;
  MovieDetail: { movieId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStackNavigation(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
