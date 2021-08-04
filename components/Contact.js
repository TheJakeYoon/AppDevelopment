import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import call from 'react-native-phone-call'

export default function Contact ({navigation}) {
    
    let [name, setName] = useState();
    let [phoneNumber, setPhoneNumber] = useState();

    let args = {
        number: phoneNumber,
        prompt: false
    };
    
    function createNewButton(name, phoneNumber) {
        views = <Button labelStyle={styles.buttonText} style={styles.firstButton}mode = 'contained' onPress= {() => call(args)}>{name}</Button>
        return views
    };

    return (
        <View style = {styles.container}>
            <Button labelStyle={styles.buttonText} style={styles.firstButton}mode = 'contained' onPress= {() => call(args)}>{name}</Button>
            <TextInput
                placeholder="Name"
                onChangeText={name => setName(name)}
           />
           <TextInput placeholder="Phone Number" onChangeText={phoneNumber => setPhoneNumber(phoneNumber)} />
           <Button labelStyle={styles.buttonText} style={styles.firstButton}mode = 'contained' onPress= {() => alert("Button Created")}>Add</Button>
        </View>
      );
    }

    
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    firstButton: {
        marginTop: 50,
        padding: 20,
        backgroundColor: '#f2bd49',
    },
    buttonText: {
        color: '#000000',
    },
    container: {
        flex: 1,
        backgroundColor: '#62baf5',
    },
})