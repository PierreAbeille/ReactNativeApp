import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};

LocaleConfig.defaultLocale = 'fr';

const CalendarPage = () => {
    const [selected, setSelected] = useState('');
    const onDayPress = (day) => {
        setSelected(day.dateString);
        // alert(`Date sélectionnée ${day.dateString}`);
    }
    return (
        <View>
            <Calendar
                onDayPress={onDayPress}
                markedDates={{
                    [selected]: {selected: true}
                }}
                monthFormat={'MMMM yyyy'}
                firstDay={1}
            />
            <View>
                <Text>
                    {selected === '' ? 'Aucune date sélectionnée' 
                    : selected === new Date().toISOString().split('T')[0] ? 'Aujourd\'hui' 
                    : new Date(selected).toLocaleDateString('fr-FR', {dateStyle: 'medium', timeStyle: 'none'})}
                </Text>
            </View>
        </View>
    );
}

export default CalendarPage;