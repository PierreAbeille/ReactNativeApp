import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlanningPage from './components/Planning';

import CalendarPage from './pages/CalendarPage';
import CalendarStack from './components/CalendarStack';

export let items =  [
  { date: '2022-06-05' , name: ['RDV dentiste', 'Véto'] },
  { date: '2022-05-30' , name: ['Bordel ça marche']},
  { date: '2022-06-29' , name: ['Truc en vrac']},
  { date: '2022-05-29' , name: ['Wesh alors']},
  { date: '2022-06-08' , name: ['Anniversaire machin'] },
  { date: '2022-05-30' , name: ['Bordel ça marche']},
  { date: '2022-07-17' , name: ['Ackip c mon anniv', 'douche du mois']},
  { date: '2022-05-29' , name: ['Wesh alors']}
];

function Calendar() {
  return (
    <CalendarStack items={items} />
  );
}

function Planning() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PlanningPage></PlanningPage>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#06aed5',
        }
      }}
    >
      <Tab.Screen 
        name="Calendrier" 
        component={Calendar} 
      />
      <Tab.Screen 
        name="Programme" 
        component={Planning} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer  style={styles.container}>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
