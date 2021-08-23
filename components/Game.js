import React from 'react';
import { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Game({navigation}){

    const [ bothPressed, setBothPressed ] = useState(0);
    const onBothPress = () => {
        setBothPressed(bothPressed + 1);
    };
    const [ pressed1, setPressed1 ] = useState(false);  
    const [ pressed2, setPressed2 ] = useState(false);  
    const [ pressed3, setPressed3 ] = useState(false);  
    const [ pressed4, setPressed4 ] = useState(false);  
    const [ pressed5, setPressed5 ] = useState(false);  
    const [ pressed6, setPressed6 ] = useState(false);  
    const [ pressed7, setPressed7 ] = useState(false);  
    const [ pressed8, setPressed8 ] = useState(false);  
    const [ pressed9, setPressed9 ] = useState(false); 
    const [ pressed10, setPressed10 ] = useState(false);    
    const [ pressed11, setPressed11 ] = useState(false);    
    const [ pressed12, setPressed12 ] = useState(false);    
    const [ pressed13, setPressed13 ] = useState(false);    
    const [ pressed14, setPressed14 ] = useState(false);    
    const [ pressed15, setPressed15 ] = useState(false);    
    const [ pressed16, setPressed16 ] = useState(false);    
    const [ pressed17, setPressed17 ] = useState(false);    
    const [ pressed18, setPressed18 ] = useState(false);    
    const [ pressed19, setPressed19 ] = useState(false);    
    const [ pressed20, setPressed20 ] = useState(false); 

    const [ matched1, setMatched1 ] = useState(false);
    const [ matched2, setMatched2 ] = useState(false);
    const [ matched3, setMatched3 ] = useState(false);
    const [ matched4, setMatched4 ] = useState(false);
    const [ matched5, setMatched5 ] = useState(false);
    const [ matched6, setMatched6 ] = useState(false);
    const [ matched7, setMatched7 ] = useState(false);
    const [ matched8, setMatched8 ] = useState(false);
    const [ matched9, setMatched9 ] = useState(false);
    const [ matched10, setMatched10 ] = useState(false);
    const [ matched11, setMatched11 ] = useState(false);
    const [ matched12, setMatched12 ] = useState(false);
    const [ matched13, setMatched13 ] = useState(false);
    const [ matched14, setMatched14 ] = useState(false);
    const [ matched15, setMatched15 ] = useState(false);
    const [ matched16, setMatched16 ] = useState(false);
    const [ matched17, setMatched17 ] = useState(false);
    const [ matched18, setMatched18 ] = useState(false);
    const [ matched19, setMatched19 ] = useState(false);
    const [ matched20, setMatched20 ] = useState(false);
    
    const onPress1 = () => {onBothPress(); setPressed1(!pressed1)}
    const onPress2 = () => {onBothPress(); setPressed2(!pressed2)}
    const onPress3 = () => {onBothPress(); setPressed3(!pressed3)}
    const onPress4 = () => {onBothPress(); setPressed4(!pressed4)}
    const onPress5 = () => {onBothPress(); setPressed5(!pressed5)}
    const onPress6 = () => {onBothPress(); setPressed6(!pressed6)}
    const onPress7 = () => {onBothPress(); setPressed7(!pressed7)}
    const onPress8 = () => {onBothPress(); setPressed8(!pressed8)}
    const onPress9 = () => {onBothPress(); setPressed9(!pressed9)}
    const onPress10 = () => {onBothPress(); setPressed10(!pressed10)}
    const onPress11 = () => {onBothPress(); setPressed11(!pressed11)}
    const onPress12 = () => {onBothPress(); setPressed12(!pressed12)}
    const onPress13 = () => {onBothPress(); setPressed13(!pressed13)}
    const onPress14 = () => {onBothPress(); setPressed14(!pressed14)}
    const onPress15 = () => {onBothPress(); setPressed15(!pressed15)}
    const onPress16 = () => {onBothPress(); setPressed16(!pressed16)}
    const onPress17 = () => {onBothPress(); setPressed17(!pressed17)}
    const onPress18 = () => {onBothPress(); setPressed18(!pressed18)}
    const onPress19 = () => {onBothPress(); setPressed19(!pressed19)}
    const onPress20 = () => {onBothPress(); setPressed20(!pressed20)}

    let images = [require('../assets/2.jpg'), require('../assets/8.jpg'), require('../assets/1.jpg'), require('../assets/1.jpg'), require('../assets/2.jpg'), require('../assets/7.jpg'), require('../assets/10.jpg'), require('../assets/10.jpg'), require('../assets/5.jpg'), require('../assets/4.jpg'), require('../assets/4.jpg'), require('../assets/7.jpg'), require('../assets/9.jpg'), require('../assets/6.jpg'), require('../assets/5.jpg'), require('../assets/3.jpg'), require('../assets/9.jpg'), require('../assets/3.jpg'), require('../assets/8.jpg'), require('../assets/6.jpg')];


    useEffect(() => {
        setTimeout(() => {
            if (bothPressed == 2) {
                if (pressed3 & pressed4) {
                    setMatched3(true);
                    setMatched4(true);
                }
                else if (pressed1 & pressed5) {
                    setMatched1(true);
                    setMatched5(true);
                }
                else if (pressed16 & pressed18) {
                    setMatched16(true);
                    setMatched18(true);
                }
                else if (pressed10 & pressed11) {
                    setMatched10(true);
                    setMatched11(true);
                }
                else if (pressed3 & pressed4) {
                    setMatched3(true);
                    setMatched4(true);
                }
                else if (pressed9 & pressed15) {
                    setMatched9(true);
                    setMatched15(true);
                }
                else if (pressed14 & pressed20) {
                    setMatched14(true);
                    setMatched20(true);
                }
                else if (pressed6 & pressed12) {
                    setMatched6(true);
                    setMatched12(true);
                }
                else if (pressed2 & pressed19) {
                    setMatched2(true);
                    setMatched19(true);
                }
                else if (pressed13 & pressed17) {
                    setMatched13(true);
                    setMatched17(true);
                }
                else if (pressed7 & pressed8) {
                    setMatched7(true);
                    setMatched8(true);
                }
                setBothPressed(0);
                setPressed1(false);
                setPressed2(false);
                setPressed3(false);
                setPressed4(false);
                setPressed5(false);
                setPressed6(false);
                setPressed7(false);
                setPressed8(false);
                setPressed9(false);
                setPressed10(false);
                setPressed11(false);
                setPressed12(false);
                setPressed13(false);
                setPressed14(false);
                setPressed15(false);
                setPressed16(false);
                setPressed17(false);
                setPressed18(false);
                setPressed19(false);
                setPressed20(false);
            }
        }, 500);
    });
    //alert(cards[0]['bool'])

    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={onPress1}>
                    {matched1 ? <View style={styles.matched}></View> : pressed1 ? 
                        <Image style={styles.image} source={images[0]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress2}>
                    {matched2 ? <View style={styles.matched}></View> : pressed2 ? 
                        <Image style={styles.image} source={images[1]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress3}>
                    {matched3 ? <View style={styles.matched}></View> : pressed3 ? 
                        <Image style={styles.image} source={images[2]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress4}>
                    {matched4 ? <View style={styles.matched}></View> : pressed4 ? 
                        <Image style={styles.image} source={images[3]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={onPress5}>
                    {matched5 ? <View style={styles.matched}></View> : pressed5 ? 
                        <Image style={styles.image} source={images[4]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress6}>
                    {matched6 ? <View style={styles.matched}></View> : pressed6 ? 
                        <Image style={styles.image} source={images[5]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress7}>
                    {matched7 ? <View style={styles.matched}></View> : pressed7 ? 
                        <Image style={styles.image} source={images[6]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress8}>
                    {matched8 ? <View style={styles.matched}></View> : pressed8 ? 
                        <Image style={styles.image} source={images[7]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={onPress9}>
                    {matched9 ? <View style={styles.matched}></View> : pressed9 ? 
                        <Image style={styles.image} source={images[8]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress10}>
                    {matched10 ? <View style={styles.matched}></View> : pressed10 ? 
                        <Image style={styles.image} source={images[9]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress11}>
                    {matched11 ? <View style={styles.matched}></View> : pressed11 ? 
                        <Image style={styles.image} source={images[10]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress12}>
                    {matched12 ? <View style={styles.matched}></View> : pressed12 ? 
                        <Image style={styles.image} source={images[11]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={onPress13}>
                    {matched13 ? <View style={styles.matched}></View> : pressed13 ? 
                        <Image style={styles.image} source={images[12]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress14}>
                    {matched14 ? <View style={styles.matched}></View> : pressed14 ? 
                        <Image style={styles.image} source={images[13]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress15}>
                    {matched15 ? <View style={styles.matched}></View> : pressed15 ? 
                        <Image style={styles.image} source={images[14]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress16}>
                    {matched16 ? <View style={styles.matched}></View> : pressed16 ? 
                        <Image style={styles.image} source={images[15]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={onPress17}>
                    {matched17 ? <View style={styles.matched}></View> : pressed17 ? 
                        <Image style={styles.image} source={images[16]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress18}>
                    {matched18 ? <View style={styles.matched}></View> : pressed18 ? 
                        <Image style={styles.image} source={images[17]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress19}>
                    {matched19 ? <View style={styles.matched}></View> : pressed19 ? 
                        <Image style={styles.image} source={images[18]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress20}>
                    {matched20 ? <View style={styles.matched}></View> : pressed20 ? 
                        <Image style={styles.image} source={images[19]}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#62baf5',
    },
    matched: {
        width: 80,
        height: 80,
        margin: 5,
        backgroundColor: '#62baf5',
    },
    row: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
        margin: 5,
    },
    front: {
        width: 80,
        height: 80,
        margin: 5,
        backgroundColor: '#f2bd49'
    }
});

