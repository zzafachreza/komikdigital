import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text, Image } from 'react-native';
import Pdf from 'react-native-pdf';
import { colors, fonts } from '../utils';



export default function Menu3({ navigation }) {





    return (
        <View style={styles.container}>
            <View style={{
                height: 80,
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.white,
                    fontSize: 20
                }}>Materi</Text>
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 10,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Materi1')} style={{
                    flex: 1,
                    marginVertical: 10,
                    backgroundColor: colors.secondary,

                }}>
                    <Image source={require('../M1.png')} style={{
                        flex: 1,
                        width: '100%',
                        resizeMode: 'contain',
                        alignSelf: 'center'

                    }} />
                    <Text style={{
                        backgroundColor: colors.primary,
                        padding: 20,
                        textAlign: 'center',
                        fontSize: 30,
                        color: colors.white,
                        fontFamily: fonts.secondary[800]
                    }}>MATER 1</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Materi2')} style={{
                    flex: 1,
                    backgroundColor: colors.primary,

                }}>
                    <Image source={require('../M2.png')} style={{
                        flex: 1,
                        width: '100%',
                        resizeMode: 'contain',
                        alignSelf: 'center'

                    }} />
                    <Text style={{
                        backgroundColor: colors.secondary,
                        padding: 20,
                        textAlign: 'center',
                        fontSize: 30,
                        color: colors.white,
                        fontFamily: fonts.secondary[800]
                    }}>MATER 2</Text>
                </TouchableOpacity>
            </View>

        </View >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});