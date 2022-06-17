import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlanningPage from './components/Planning';
import CalendarStack from './components/CalendarStack';

export let items =  [
  { date: '2022-06-05' , name: ['RDV dentiste', 'Véto'] },
  { date: '2022-05-30' , name: ['Courses']},
  { date: '2022-06-29' , name: ['Kiné']},
  { date: '2022-05-29' , name: ['Ciné']},
  { date: '2022-06-08' , name: ['Anniversaire pedro'] },
  { date: '2022-05-30' , name: ['ouvrir les volets']},
  { date: '2022-07-17' , name: ['fermer les volets', 'douche du mois']},
  { date: '2022-05-29' , name: ['Plus inspiré']}
];


function Calendar() {
  return (
    <CalendarStack items={items}/>
  );
}

function Planning() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PlanningPage items={items}/>
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
