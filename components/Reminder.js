import React, {useState, useEffect } from 'react';
import { Image, View, Text, Platform, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Reminder() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [image1, setImage1] = useState(null);
    const [image1Picked, setImage1Picked] = useState(false);
    const [image2, setImage2] = useState(null);
    const [image2Picked, setImage2Picked] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      //setShow(Platform.OS === 'ios');
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
        alert("Alarm Set!")
    }
    const getImages = async () => {
      try{
        let uri1 = await AsyncStorage.getItem('medicine1');
        setImage1(uri1)
        let uri2 = await AsyncStorage.getItem('medicine2');
        setImage2(uri2)
        
      } catch (e) {
        alert(e)
      }
    }

    const saveURI = async (name, uri) => {
      try{
        await AsyncStorage.setItem(name, uri);
      } catch (e) {
        alert(e)
      }
    };

    useEffect(() => {
        getImages();
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
          aspect: [4, 4],
          quality: 1,
        });
        if (!result.cancelled) {
          if(image1Picked){
            setImage1(result.uri);
            saveURI('medicine1', result.uri);
          }
          else if(image2Picked){
            setImage2(result.uri);
            saveURI('medicine2', result.uri);
          }
        }
    };
    
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
          {<DateTimePicker
            style={styles.timePicker}
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
          }
          <Button onPress={setAlarm} style={styles.button}>Set Alarm</Button>
          </View>
          <View>
            {image1 ? <Image source={{ uri: image1 }} style={styles.image}/> : <Button onPress={() => {setImage1Picked(true); pickImage();}} style={styles.image}>Pick Image</Button>}
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
          {<DateTimePicker
            style={styles.timePicker}
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
          }
          <Button onPress={setAlarm} style={styles.button}>Set Alarm</Button>
          </View>
          <View>
            {image2 ? <Image source={{ uri: image2 }} style={styles.image}/> : <Button onPress={() => {setImage2Picked(true); pickImage();}} style={styles.image}>Pick Image</Button>}
          </View>
        </View>
      </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
    },
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
        width: '100%',
        height: '50%',
        aspectRatio: 1,
        margin: 10,
        padding: 10,
        backgroundColor: '#f2bd49',
    },
    row: {
      display: 'flex',
      flexDirection: 'row'
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
    }
});