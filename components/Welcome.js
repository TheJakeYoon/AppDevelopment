import * as React from 'react';
import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function Welcome({ navigation }) {
   return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/main.png')} resizeMode="cover" style={styles.image}>
      <Button mode='contained' onPress={()=>navigation.navigate('Login')}>Get Started</Button>
    </ImageBackground>
  </View>
   );
};
 
const styles = StyleSheet.create({
    image : {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    container: {
        flex: 1,
   }
});
