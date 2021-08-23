import * as React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function Welcome({ navigation }) {
   return (
     <View style={styles.container}>
      <ImageBackground source={require('../assets/main.png')} resizeMode="cover" style={styles.image}>
        <Button mode='contained' style={styles.button} onPress={()=>{navigation.navigate('Login')}}>
          Get Started</Button>
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
    button: {
      marginTop: 60,
      padding: 20,
      backgroundColor: '#f2bd49',
    },
    container: {
        flex: 1,
   }
});
