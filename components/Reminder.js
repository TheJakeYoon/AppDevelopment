import React, {useState, useEffect } from 'react';
import { Image, View, Text, Platform, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';
import * as ImagePicker from 'expo-image-picker';

export default function Reminder() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };

    const setAlarm = () => {
        Notifications.scheduleNotificationAsync({
            content: {
            title: 'Time to take your medicine!',
            },
            trigger : {
                hour: date.getHours(),
                minute: date.getMinutes(),
                repeats: true
            }
        });
    }

    useEffect(() => {
        setShow(true);
        setMode('time');
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };
    
    return (
        <View style={styles.container}>
          <View style={styles.col}>
          {show && (
            <DateTimePicker
              style={styles.timePicker}
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
          )}
          <Button onPress={setAlarm} style={styles.button}>Set Alarm</Button>
          </View>
          <Button onPress={pickImage} style={styles.image}>Pick Image</Button>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
      );
}

const styles = StyleSheet.create({
    timePicker: {
        margin: 10,
        width: 150,
        height: 50,
        backgroundColor: '#000000'
    },
    button: {
      margin: 15,
    },
    image: {
        width: '50%',
        height: '50%',
        height: 110,
        margin: 10,
        padding: 10,
        backgroundColor: '#f2bd49',
    },
    container: {
      display: 'flex',
      flexDirection: 'row'
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
    }
});