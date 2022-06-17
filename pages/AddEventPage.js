import React from 'react';
import {View, Text, Button} from 'react-native';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';


const AddEventPage = (props) => {
    const [date, setDate] = React.useState(new Date());
    const [name, setName] = React.useState('name');

    const [show, setShow] = React.useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setShow(false);
        setDate(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }

    const hideDatePicker = () => {
        setShow(false);
    }

    const onPress = () => {

        let dt = date.toISOString().split('T')[0];
        let jr = name.toString();
        let exists = false;
        props.items.map((item)=>{
            
            if(item.date == date.toISOString().split('T')[0]) {
                exists = true;
                item.name.push(name.toString());
            }
        })

        if(!exists){
            props.items.push({date: date.toISOString().split('T')[0] , name: [name.toString()]});
        }
    }

    return (
        <View>
            <View>
                <TextInput title="Nom" placeholder="Nom de l'évènement" onChangeText={setName}/>
            </View>
            <View>
                <Button
                    title="Date de l'évènement"
                    onPress={showDatePicker}
                />
                {show && (
                    <RNDateTimePicker
                        mode="datetime"
                        is24Hour={true}
                        display="default"
                        onChange={onChangeDate}
                        value={date}
                        onCancel={hideDatePicker}
                        onConfirm={onChangeDate}
                    />
                )}
            </View>
            <Button
                title="Add Event"
                onPress={onPress}
            />
        </View>
    );
}

export default AddEventPage;