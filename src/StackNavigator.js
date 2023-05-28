import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';

import { Entypo } from '@expo/vector-icons';
import SavedScreen from './screens/SavedScreen';
import { AntDesign } from '@expo/vector-icons';

import ProfileScreen from './screens/ProfileScreen';
import BookingScreens from './screens/BookingScreens';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './screens/SearchScreen';
import PlacesScreen from './screens/PlacesScreen';
import MapScreen from './screens/MapScreen';
import PropertyInfoScreen from './screens/PropertyInfoScreen';
import RoomScreen from './screens/RoomScreen';
import UserScreens from './screens/UserScreens';
import Confirmation from './screens/Confirmation';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const BottomTabs = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreens} options={{
                    tabBarLabel: 'Home', headerShown: false, tabBarIcon: ({ focused }) => focused ?
                        (
                            <Entypo name="home" size={24} color="#003580" />
                        ) : (
                            <AntDesign name="home" size={24} color="black" />
                        )
                }} />
                <Tab.Screen name='Saved' component={SavedScreen} options={{
                    tabBarLabel: 'Saved', headerShown: false, tabBarIcon: ({ focused }) => focused ?
                        (
                            <AntDesign name="heart" size={24} color="#003580" />
                        ) : (
                            <AntDesign name="hearto" size={24} color="black" />
                        )
                }} />

                <Tab.Screen name='Bookings' component={BookingScreens} options={{
                    tabBarLabel: 'Bookings', headerShown: false, tabBarIcon: ({ focused }) => focused ?
                        (
                            <Ionicons name="notifications-sharp" size={24} color="#003580" />
                        )
                        : (
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        )

                }} />
                <Tab.Screen name='Profile' component={ProfileScreen} options={{
                    tabBarLabel: 'Profile', headerShown: false, tabBarIcon: ({ focused }) => focused ?
                        (

                            <Ionicons name="person-sharp" size={24} color="#003580" />
                        ) : (

                            <Ionicons name="ios-person-outline" size={24} color="black" />
                        )
                }} />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
                <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}} />
                <Stack.Screen name='Search' component={SearchScreen} options={{headerShown:false}}/>
                <Stack.Screen name='Places' component={PlacesScreen} />
                <Stack.Screen name='Map' component={MapScreen} options={{headerShown:false}}/>
                <Stack.Screen name='Info' component={PropertyInfoScreen}/>
                <Stack.Screen name='Rooms' component={RoomScreen}/>
                <Stack.Screen name='User' component={UserScreens}/>
                <Stack.Screen name='Confirm' component={Confirmation}/>
            </Stack.Navigator> 
        </NavigationContainer>

    )
}

export default StackNavigator

const styles = StyleSheet.create({})