import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';

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
            />
            <View>
                <Text>
                    {selected === '' ? 'Aucune date sélectionnée' 
                    : selected === new Date().toISOString().split('T')[0] ? 'Aujourd\'hui' 
                    : new Date(selected).toLocaleDateString('fr-FR', {dateStyle: 'medium', timeStyle: 'none'})}
                </Text>
            </View>
            //add a button to
        </View>
    );
}


export default CalendarPage;