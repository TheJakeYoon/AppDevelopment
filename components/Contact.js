import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, KeyboardAvoidingView, StyleSheet, ScrollView, Platform, View } from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import call from 'react-native-phone-call'

export default function Contact ({navigation}) {
    
    const [name, setName] = useState();
    const [contactList, setContactList] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState('');

    const getList = async() => {
        try {
            let list = await AsyncStorage.getItem("contactList");
            list = JSON.parse(list);
            setContactList(list);
        } catch(e) {
            //alert(e)
        }
    };

    const storeData = async () => {
        try {
            const element = {name: name, phoneNumber: phoneNumber};
            if (contactList) {
                let list = [...contactList, element]
                await AsyncStorage.setItem('contactList', JSON.stringify(list));
            }
            else {
                const list = [element];
                await AsyncStorage.setItem('contactList', JSON.stringify(list));
            }
            getList();
        } catch (e) {
            //alert(e)
        }
    };

    useEffect(() => {
        getList();
    }, []);

    const createButtons = () => {
        const buttons = [];
        let list = contactList;
        if(list) {
            list.forEach(element => {
                let name = element['name'];
                let args = {number: element['phoneNumber'], prompt: false};
                buttons.push(<Button labelStyle={styles.buttonText} style={styles.button} mode = 'contained' onPress= {() => call(args)}>{name}</Button>);
            });
        }
        return buttons;
    };

    return (
        <View style = {styles.container}>
            <ScrollView>
                {createButtons()}
                <TextInput placeholder="Name" onChangeText={name => setName(name)}/>
                <TextInput placeholder="Phone Number" onChangeText={phoneNumber => setPhoneNumber(phoneNumber)} />
                <Button labelStyle={styles.buttonText} style={styles.button}mode = 'contained' onPress= {storeData}>ADD</Button>
            </ScrollView>
        </View>
      );
    }

    
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    button: {
        marginTop: 25,
        marginBottom: 25,
        padding: 10,
        backgroundColor: '#f2bd49',
    },
    buttonText: {
        color: '#000000',
    },
    container: {
        flex: 1,
        backgroundColor: '#62baf5',
    },
    inner: {
        padding: 25,
        flex: 1,
        justifyContent: 'space-around'
    }
})