import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Chat({navigation}){
    const [text, setText] = useState();
    const [phone, setPhone] = useState('');
    const getPhoneNumber = async () => {
        phoneNumber = await AsyncStorage.getItem('phone');
        setPhone(phoneNumber);
    }

    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const user = useAuthState(auth);

    function Chatroom(){
        const messages = firestore.collection('helpchat');
        const query = messages.orderBy('time').limit(100);
        const [msgs] = useCollectionData(query, { phone: phone});

        return(
            <View style={styles.textContainer}>
                {msgs && msgs.map(msg => <View style={phone == msg.phone ? styles.sentTextContainer : styles.recievedTextcontainer}><Text style={phone == msg.phone ? styles.sentText : styles.recievedText}>{msg.text}</Text></View>)}
            </View>
        )
    }

    const sendMessage = async (e) => {
        e.preventDefault();
    
        //const { phone } = auth.currentUser;
        const messages = firestore.collection('helpchat');
    
        await messages.add({
            phone: phone,
            text: text,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    return(
        <View style={styles.container}>
            <Chatroom/>
            <TextInput value={text} placeholder='Type Here' onChange={text => setText(text.target.value)}/>
            <Button onPress={sendMessage}>Send</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    sentText: {
        maxWidth: 400,
        padding: 10,
        margin: 5,
        color: "white",
        fontSize: 24,
        lineHeight: 30,
        borderRadius: 15,
        fontWeight: "bold",
        backgroundColor: "#4b47c4"
    },
    recievedText: {
        maxWidth: 400,
        padding: 10,
        margin: 5,
        color: "white",
        fontSize: 24,
        lineHeight: 30,
        borderRadius: 15,
        fontWeight: "bold",
        backgroundColor: "#f2bd49"
    },
    sentTextContainer: {
        flexDirection: "row-reverse"
    },
    recievedTextcontainer: {
        flexDirection: "row"
    },
    textContainer: {
        flex: 1,
        backgroundColor: "#62baf5",
    },
    container: {
        flex: 1,
   }
});