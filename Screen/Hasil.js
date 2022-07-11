import axios from 'axios';
import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    Animated,
} from 'react-native';
import { colors, fonts } from '../utils';

import Sound from 'react-native-sound';


var oke = new Sound(
    require('../oke.mp3'),
    Sound.MAIN_BUNDLE,
    (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log(
            'duration in seconds: ' +
            oke.getDuration() +
            'number of channels: ' +
            oke.getNumberOfChannels(),
        );
    },
);

var salah = new Sound(
    require('../salah.mp3'),
    Sound.MAIN_BUNDLE,
    (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log(
            'duration in seconds: ' +
            salah.getDuration() +
            'number of channels: ' +
            salah.getNumberOfChannels(),
        );
    },
);


export default function Hasil({ navigation, route }) {

    const top = new Animated.Value(0.3);

    const animasi = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(top, {
                    toValue: 1,
                    duration: 800,
                }),
                Animated.timing(top, {
                    toValue: 200,
                    duration: 800,
                }),
            ]),
            {
                iterations: 1,
            },
        ).start();
    };



    useEffect(() => {
        animasi();

    }, []);

    const jawaban = route.params.jawaban;
    console.warn(jawaban[1])

    let total = 0;

    for (let i = 1; i <= 10; i++) {
        total += parseInt(route.params.jawaban[i] * 10);

    }
    console.warn('total', total);

    if (total >= 70) {
        oke.play();
    } else {
        salah.play();
    }








    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Animated.Image
                source={total >= 70 ? require('../lulus.png') : require('../gagal.png')}
                style={
                    {
                        width: top,
                        height: top,
                        aspectRatio: 1,
                        resizeMode: "contain"
                    }

                }
            />
            <Text style={{
                marginTop: 10,
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                textAlign: 'center',
            }}>{total >= 70 ? 'SELAMAT KAMU LULUS DENGAN NILAI' : 'MAAF NILAI KAMU MASIH DIBAWAH KKM, SILAHKAN COBA LAGI YA'}</Text>
            <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 50,
                textAlign: 'center',
            }}>{total}</Text>

            <View style={{
                marginVertical: 10
            }} />


        </View >
    );
}

const styles = StyleSheet.create({});
