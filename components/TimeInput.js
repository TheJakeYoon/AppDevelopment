import React, {useState} from 'react';
import {View, Text, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';

export default function TimeInput() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showTimepicker = () => {
        setShow(true);
        setMode('time');
    };

    const setAlarm = () => {
        const time = new Date();
        time.setHours(15, 39, 40);
        Notifications.scheduleNotificationAsync({
            content: {
            title: 'Happy new hour!',
            },
            trigger : {
                hour: time.getHours(),
                minute: time.getMinutes(),
                repeats: true
            }
        });
    }

    return (
        <View>
          <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <Text>{date.toString()}</Text>
          <Button onPress={setAlarm} title="Set Alarm"></Button>
          
        </View>
      );
}