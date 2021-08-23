import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
    const [sound, setSound] = React.useState();
    const [paused, setPaused] = React.useState(true);

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
        require('../assets/Hello.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    };

    async function pauseSound() {
        await sound.pauseAsync();
        setPaused(false);
    }

    async function resumeSound() {
        await sound.playAsync();
        setPaused(true);
    }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={playSound}><Text style={styles.buttonText}>Start</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={paused ? pauseSound : resumeSound}><Text style={styles.buttonText}>Play/Pause</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#62baf5',
        justifyContent: 'center',
    },
    button: {
        top: "70%",
        margin: 25,
        width: 150,
        height: 100,
        borderRadius: 30,
        backgroundColor: '#f2bd49',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
        justifyContent: 'center'
    }
})