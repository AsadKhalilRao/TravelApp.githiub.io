import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font"
import * as Splashscreen from "expo-splash-screen"
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from "./navigation/BottomTabNavigation"
import {Onboarding,PlaceDetailsScreen,HotelSearchScreen, HotelDetailScreen,HotelListScreen,RecommendationsPage,Search,CountryDetailes} from "./screens/index"
export default function App() {
const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='onboarding' component={Onboarding} options={{headerShown:false}}/>
      <Stack.Screen name='BottomTabNavigation' component={BottomTabNavigation} options={{headerShown:false}}/>
      <Stack.Screen name='Search' component={Search} options={{headerShown:true}}/>     
      <Stack.Screen name='Detailes' component={CountryDetailes} options={{headerShown:false}}/>     
      <Stack.Screen name='RecommendationsPage' component={RecommendationsPage} options={{headerShown:false}}/>     
      <Stack.Screen name='PlaceDetailsScreen' component={PlaceDetailsScreen} options={{headerShown:false}}/>     
      <Stack.Screen name='HotelDetailScreen' component={HotelDetailScreen} options={{headerShown:false}}/>     
      <Stack.Screen name="HotelListScreen" component={HotelListScreen} options={{headerShown:false}}/>
      <Stack.Screen name="HotelSearchScreen" component={HotelSearchScreen} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
