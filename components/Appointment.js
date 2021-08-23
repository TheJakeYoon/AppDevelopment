import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Calendar } from 'react-native-calendars';
import * as Notifications from 'expo-notifications';

export default function Appointment() {

    const [day, setDate] = useState('1');
    const [month, setMonth] = useState();
    const [time, setTime] = useState(new Date());
    const [dayPicked, setDayPicked] = useState(false);

    const setAlarm = async () => {
      await Notifications.scheduleNotificationAsync({
          content: {
          title: 'Time to go to the hospital!',
          },
          trigger : {
              month: month,
              day: day,
              hour: time.getHours() - 1,
              minute: time.getMinutes(),
              repeats: false
          }
      });
      alert("Alarm Set!");
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    //setShow(Platform.OS === 'ios');
    setTime(currentDate);
  };

  const changeDate = (day) => {
      setDate(day.day);
      setMonth(day.month);
      setDayPicked(true);
    }

    return(
        <View style={styles.container}>
            <Calendar
                onDayPress={(day) => changeDate(day)}
            />
            {dayPicked ? <DateTimePicker
                style={styles.picker}
                testID="dateTimePicker"
                value={time}
                mode={'time'}
                is24Hour={true}
                display="default"
                onChange={onChange}
            /> : <Text></Text>}
          <Button style={styles.button} onPress={setAlarm}>Set Alarm</Button>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62baf5',
    marginTop: 20,
  },
  button: {
    marginTop: 60,
    padding: 20,
    backgroundColor: '#f2bd49',
  },
  picker: {
      left: '35%',
      justifyContent: 'center',
      margin: 15,
  }
});
