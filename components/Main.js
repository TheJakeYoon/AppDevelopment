import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export default function Main ({navigation}) {
    return(
        <View style = {styles.container}>
        <Button labelStyle={styles.buttonText} style={styles.firstButton} mode = 'contained'onPress= {() => navigation.navigate('Reminder')}>
            Prescription Reminder
        </Button>
        <Button labelStyle={styles.buttonText} style={styles.button} mode = 'contained'onPress= {() => navigation.navigate('Appointment')}>
            Doctor's Appointment
        </Button>
        <Button labelStyle={styles.buttonText} style={styles.button} mode = 'contained'onPress= {() => navigation.navigate('Contact')}>
            Emergency Contact
        </Button>
        <Button labelStyle={styles.buttonText} style={styles.button} mode = 'contained'onPress= {() => navigation.navigate('Help')}>
            Request Help
        </Button>
        <Button labelStyle={styles.buttonText} style={styles.button} mode = 'contained'onPress= {() => navigation.navigate('Focus')}>
            Cozy Relaxed Warm
        </Button>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#62baf5',
    },
    button: {
        marginTop: 60,
        padding: 20,
        backgroundColor: '#f2bd49',
    },
    firstButton: {
        marginTop: 50,
        padding: 20,
        backgroundColor: '#f2bd49',
    },
    buttonText: {
        color: '#000000',
    }
})