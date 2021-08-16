import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export default function MentalHealth ({navigation}){
return(
    <View style = {styles.container}>
    <Button labelStyle={styles.buttonText} style={styles.firstButton} mode = 'contained'onPress= {() => navigation.navigate('Meditation')}>
        Meditation
    </Button>
    <Button labelStyle={styles.buttonText} style={styles.button} mode = 'contained'onPress= {() => navigation.navigate('Game')}>
        Simple Concentration Game
    </Button>
    
    </View>
);
}

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