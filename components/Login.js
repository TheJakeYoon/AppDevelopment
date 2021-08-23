import * as React from 'react';
import { useEffect } from 'react';
import { Text, View, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
  const [message, showMessage] = React.useState(
    !firebaseConfig || Platform.OS === 'web'
      ? {
          text:
            'To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.',
        }
      : undefined
  );
  const attemptInvisibleVerification = false;

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={attemptInvisibleVerification}
      />
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        placeholder="+1 999 999 9999"
        textContentType="telephoneNumber"
        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
      />
      <Button
        style={styles.button}
        disabled={!phoneNumber}
        onPress={async () => {
          // The FirebaseRecaptchaVerifierModal ref implements the
          // FirebaseAuthApplicationVerifier interface and can be
          // passed directly to `verifyPhoneNumber`.
          try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            showMessage({
              text: 'Verification code has been sent to your phone.',
            });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
          }
        }}
      >Send Verification Code</Button>
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />
      <Button
        style={styles.button}
        disabled={!verificationId}
        onPress={async () => {
          try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            await firebase.auth().signInWithCredential(credential);
            showMessage({ text: 'Phone authentication successful 👍' });
            //const auth = firebase.auth();
            const firestore = firebase.firestore();
            //const user = useAuthState(auth);
            const users = firestore.collection('users');
            const addUser = async () => {
              await users.add({phoneNumber : phoneNumber.toString()});
            }
            const storeData = async () => {
              try {
                await AsyncStorage.setItem('registered', 'true');
                await AsyncStorage.setItem('phone', phoneNumber.toString())
              }
              catch(err) {
                alert(err)
              }
            }
            addUser();
            storeData();
            navigation.navigate('Main')
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
          }
        }}
      >Confirm Verification Code</Button>
      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: 'center' },
          ]}
          onPress={() => showMessage(undefined)}>
          <Text
            style={{
              color: message.color || 'blue',
              fontSize: 17,
              textAlign: 'center',
              margin: 20,
            }}>
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : (
        undefined
      )}
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 60,
    padding: 20,
    backgroundColor: '#f2bd49',
  },
})
