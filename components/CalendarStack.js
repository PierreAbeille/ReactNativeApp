import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import {items} from '../App';

import AddEventPage from '../pages/AddEventPage';
import CalendarPage from '../pages/CalendarPage';

function CalendarP({navigation}) {
    return (
        <View>
            <CalendarPage items={items}/>
            <Button
                title="AddEventPage"
                onPress={() => navigation.navigate('AddEventPage')}
            />
        </View>
    );
}

function AddEventP({navigation}) {
    return (
        <View>
            <AddEventPage />
        </View>
    );
}

const Stack = createStackNavigator();

export default function CalendarStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="CalendarPage" 
                    component={CalendarP}
                    options={{
                        presentation : 'modal',
                        headerShown : false
                    }}
                />
                <Stack.Screen 
                    name="AddEventPage" 
                    component={AddEventP}
                    options={{
                        presentation : 'modal'
                    }}
                />
            </Stack.Navigator>
    );
}