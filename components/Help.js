import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import call from 'react-native-phone-call'

export default function Help ({navigation}) {
    let args = {
        number: "8201093427315",
        prompt: false
    };

    return(
        <View style = {styles.container}>
        <Button labelStyle={styles.buttonText} style={styles.firstButton} mode = 'contained' onPress= {() => call(args)}>
            Call
        </Button>
        <Button labelStyle={styles.buttonText} style={styles.button} mode = 'contained'onPress= {() => navigation.navigate('Chat')}>
            Chat
        </Button>
        <Button labelStyle={styles.buttonText} style={styles.button} mode = 'contained'onPress= {() => navigation.navigate('Chat')}>
            Ride
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
});