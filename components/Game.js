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

    let randomImages = [require('../assets/1.jpg'), require('../assets/2.jpg'), require('../assets/3.jpg'), require('../assets/4.jpg'), require('../assets/5.jpg'), require('../assets/6.jpg'), require('../assets/7.jpg'), require('../assets/8.jpg'), require('../assets/9.jpg'), require('../assets/10.jpg')];
    let startingCards = [{image: randomImages[0], function: onPress1, bool: pressed1}, {image: randomImages[1], function: onPress2, bool: pressed2}, {image: randomImages[2], function: onPress3, bool: pressed3}, {image: randomImages[3], function: onPress4, bool: pressed4}, {image: randomImages[4], function: onPress5, bool: pressed5}, {image: randomImages[5], function: onPress6, bool: pressed6}, {image: randomImages[6], function: onPress7, bool: pressed7}, {image: randomImages[7], function: onPress8, bool: pressed8}, {image: randomImages[8], function: onPress9, bool: pressed9}, {image: randomImages[9], function: onPress10, bool: pressed10},{image: randomImages[0], function: onPress11, bool: pressed11}, {image: randomImages[1], function: onPress12, bool: pressed12}, {image: randomImages[2], function: onPress13, bool: pressed13}, {image: randomImages[3], function: onPress14, bool: pressed14}, {image: randomImages[4], function: onPress15, bool: pressed15}, {image: randomImages[5], function: onPress16, bool: pressed16}, {image: randomImages[6], function: onPress17, bool: pressed17}, {image: randomImages[7], function: onPress18, bool: pressed18}, {image: randomImages[8], function: onPress19, bool: pressed19}, {image: randomImages[9], function: onPress20, bool: pressed20}];
    const [cards, setCards] = useState(startingCards);
    function shuffle(array) {
        var currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
    useEffect(() => {
        setCards(shuffle(startingCards));
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (bothPressed == 2) {
                if (pressed1 & pressed2) {
                    setMatched1(true);
                    setMatched2(true);
                }
                setBothPressed(0);
                setPressed1(false);
                setPressed2(false);
                setPressed3(false);
                setPressed4(false);
            }
        }, 500);
    });
    alert(cards[0]['bool'])

    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={cards[0]['function']}>
                    {matched1 ? <View style={styles.matched}></View> :cards[0]['bool'] ? 
                        <Image style={styles.image} source={cards[0]['image']}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={cards[1]['function']}>
                    {matched2 ? <View style={styles.matched}></View> : cards[1]['bool'] ? 
                        <Image style={styles.image} source={cards[1]['image']}></Image> : 
                        <View style={styles.front}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress3}>
                    {pressed3 ? 
                        <Image style={styles.image} source={cards[2]['image']}></Image> : 
                        <View style={styles.front}></View>}
                    </TouchableOpacity>
                <TouchableOpacity onPress={onPress4}>
                    {pressed4 ? 
                        <Image style={styles.image} source={cards[3]['image']}></Image> : 
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
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#62baf5',
    },
    row: {
        flex: 4,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
    front: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#f2bd49'
    }
});

