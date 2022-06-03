import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlanningPage from './components/Planning';
import AgendaPage from './components/Agenda';

import CalendarPage from './pages/CalendarPage';

function Calendar() {
  return (
    <CalendarPage />
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
    <Tab.Navigator>
      <Tab.Screen name="Calendrier" component={Calendar} />
      <Tab.Screen name="Programme" component={Planning} />
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