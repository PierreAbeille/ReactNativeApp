import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Jour from '../components/Jour';

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

const CalendarPage = (props) => {
    const [selected, setSelected] = useState('');
    const [name, setName] = useState('');
    const onDayPress = (day) => {
        setSelected(day.dateString);
            setName('')
            props.items.map((item)=>{
                if(item.date == day.dateString) setName(item.name)
            })
    }
    let days = {} ;
    props.items.map((item)=>{
        let jr = item.date;
        days[jr] = {selected: true, marked: true, selectedColor: '#0F4EE5', dotColor: '#a00303'};
    })
    
    return (
        <View>
            <Calendar
                markedDates={days}
                onDayPress={onDayPress}
                monthFormat={'MMMM yyyy'}
                firstDay={1}
            />
            <View>
                <Text>
                    {selected === '' ? 'Aucune date sélectionnée' 
                    : selected === new Date().toISOString().split('T')[0] ? 'Aujourd\'hui' 
                    : new Date(selected).toLocaleDateString('fr-FR', {dateStyle: 'medium', timeStyle: 'none'})}
                </Text>
                {name ? <Jour date={selected} nom={name}>Date : {selected}</Jour> : <Text></Text>}
            </View>
        </View>
    );
}

export default CalendarPage;