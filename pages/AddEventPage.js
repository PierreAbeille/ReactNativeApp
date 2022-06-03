import React from 'react';
import {View, Text, Button} from 'react-native';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const AddEventPage = () => {
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const [name, setName] = React.useState('name');

    const [show, setShow] = React.useState(false);

    const onChangeStartDate = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setShow(false);
        setStartDate(currentDate);
    }

    const onChangeEndDate = (event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        setShow(false);
        setEndDate(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }

    const hideDatePicker = () => {
        setShow(false);
    }

    const onPress = () => {
        alert(`${name} ${startDate} ${endDate}`);
    }

    return (
        <View>
            <View>
                <Button
                    title="Show Date Picker"
                    onPress={showDatePicker}
                />
                {show && (
                    <RNDateTimePicker
                        mode="datetime"
                        is24Hour={true}
                        display="default"
                        onChange={onChangeStartDate}
                        value={startDate}
                        onCancel={hideDatePicker}
                        onConfirm={onChangeStartDate}
                    />
                )}
            </View>
            <View>
                <Button
                    title="Show Date Picker"
                    onPress={showDatePicker}
                />
                {show && (
                    <RNDateTimePicker
                        mode="datetime"
                        is24Hour={true}
                        display="default"
                        onChange={onChangeEndDate}
                        value={endDate}
                        onCancel={hideDatePicker}
                        onConfirm={onChangeEndDate}
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

    // const showStartDatePicker = () => {
    //     RNDateTimePicker.open({
    //         date: startDate,
    //         mode: 'datetime',
    //         is24Hour: true,
    //         android: {
    //             headerColor: '#06aed5',
    //             headerText: 'Sélectionnez une date',
    //             cancelText: 'Annuler',
    //             okText: 'OK'
    //         }
    //     }).then(date => {
    //         if (date) {
    //             setStartDate(date);
    //         }
    //     }
    //     );
    // }

    // const showEndDatePicker = () => {
    //     RNDateTimePicker.open({
    //         date: endDate,
    //         mode: 'datetime',
    //         is24Hour: true,
    //         android: {
    //             headerColor: '#06aed5',
    //             headerText: 'Sélectionnez une date',
    //             cancelText: 'Annuler',
    //             okText: 'OK'
    //         }
    //     }).then(date => {
    //         if (date) {
    //             setEndDate(date);
    //         }
    //     }
    //     );
    // }

//     return (
//         <View>
//             <View>
//                 <Button
//                     onPress={showStartDatePicker}
//                     title="Sélectionnez une date de Début"
//                 />
//             </View>
//             <View>
//                 <Button
//                     onPress={showEndDatePicker}
//                     title="Sélectionnez une date de fin"
//                 />
//             </View>
//             <Text>{startDate.toLocaleDateString()}</Text>
//             <Text>{endDate.toLocaleDateString()}</Text>
//         </View>
//     );
// }

export default AddEventPage;