// import React, { useState, Component } from 'react';
// import { View, Text } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';
// import firebase from 'firebase';

// export class Login extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             phone: '',
//             password: ''
//         }

//         this.onSignUp = this.onSignUp.bind(this)
//     };

//     onSignUp() {
//         // const { phone, password } = this.state;

//         // firebase.auth().signInWithPhoneNumber(phone)
//         //     .then((result)  => console.log
//         //     (result))
//         //     .catch((err) => console.log(err))


//             const [confirm, setConfirm] = useState(null);

//             const [code, setCode] = useState('');
          
//             // Handle the button press
//             async function signInWithPhoneNumber(phoneNumber) {
//               const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//               setConfirm(confirmation);
//             }
          
//             async function confirmCode() {
//               try {
//                 await confirm.confirm(code);
//               } catch (error) {
//                 console.log('Invalid code.');
//               }
//             }
          
//             if (!confirm) {
//               return (
//                 <Button
//                   title="Phone Number Sign In"
//                   onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
//                 />
//               );
//             }
          
//             return (
//               <>
//                 <TextInput value={code} onChangeText={text => setCode(text)} />
//                 <Button title="Confirm Code" onPress={() => confirmCode()} />
//               </>
//             );

//         // firebase.auth().createUserWithEmailAndPassword(phone, password)
//         //     .then((result)  => console.log
//         //     (result))
//         //     .catch((err) => console.log(err))
//     }

//     render() {
//         return(
//             <View>
//                 <TextInput placeholder='phone number' onChangeText={(phone)=>this.setState({phone})} />
//                 <TextInput placeholder='password' onChangeText={(password)=>this.setState({password})} />
//                 <Button onPress={()=>this.onSignUp()} mode='contained'>Sign Up</Button>
//             </View>
//         )
//     }
// };

// export default Login

import * as React from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import firebase from 'firebase';


// Initialize Firebase JS SDK
// https://firebase.google.com/docs/web/setup
/*try {
  firebase.initializeApp({
    ...
  });
} catch (err) {
  // ignore app already initialized error in snack
}*/

export default function App({ navigation }) {
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
        disabled={!verificationId}
        onPress={async () => {
          try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            await firebase.auth().signInWithCredential(credential);
            showMessage({ text: 'Phone authentication successful 👍' });
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