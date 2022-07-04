import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../utils'

export default function Splash({ navigation }) {

    setTimeout(() => {
        navigation.replace('Home');
    }, 2000)

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.secondary,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Image source={require('../logo.png')} style={{
                width: '100%',
                resizeMode: 'contain'
            }} />




        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: fonts.secondary[400],
        fontSize: 14,
        marginVertical: 2,
        color: colors.primary,
    }
    , txt2: {
        fontFamily: fonts.secondary[600],
        fontSize: 14,
        marginBottom: 20,
        color: colors.primary,
    },
    txtLogo: {
        textAlign: 'center',
        fontFamily: fonts.secondary[600],
        fontSize: 30,
        marginBottom: 5,
        color: colors.white,
    }, txtLogo2: {
        fontFamily: fonts.secondary[400],
        fontSize: 18,
        color: colors.primary,
    }

})