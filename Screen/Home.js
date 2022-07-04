import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../utils'
import { Icon } from 'react-native-elements'

export default function Home({ navigation }) {

    const DataMenu = ({ img, judul, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{
                backgroundColor: colors.primary,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                flex: 1,
                marginHorizontal: 20,
            }}>
                <Image source={img} style={{
                    width: '100%',
                    height: 80,
                    resizeMode: "contain"
                }} />
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.white,
                    textAlign: 'center',
                    fontSize: 16
                }}>{judul}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.secondary
        }}>
            <View style={{
                flex: 1,
                backgroundColor: colors.primary,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                paddingHorizontal: 20,
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 1,
                    height: 80,
                }}>
                    <Text style={styles.txt}>Welcome</Text>
                    <Text style={styles.txtLogo}>KOMIK DIGITAL</Text>
                    <Text style={styles.txt}>Komik Literasi Digital untuk Sekolah Dasar</Text>
                </View>


            </View>
            <View style={{
                flex: 3,
                backgroundColor: colors.secondary,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -100,
                }}>
                    <Image source={require('../slider.png')} style={{
                        width: '90%',
                        height: 200,
                        borderRadius: 20,
                    }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginVertical: 5,
                }}>
                    <DataMenu onPress={() => navigation.navigate('Menu1')} judul="Petunjuk" img={require('../A1.png')} />
                    <DataMenu onPress={() => navigation.navigate('Menu2')} judul="Tujuan Pembelajaran" img={require('../A2.png')} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginVertical: 5,
                }}>
                    <DataMenu onPress={() => navigation.navigate('Menu3')} judul="Materi" img={require('../A3.png')} />
                    <DataMenu onPress={() => navigation.navigate('Menu4')} judul="Evaluasi" img={require('../A4.png')} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginVertical: 5,
                }}>
                    <DataMenu onPress={() => navigation.navigate('Menu5')} judul="Profile" img={require('../A5.png')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: fonts.secondary[400],
        fontSize: 13,
        color: colors.white,
    }
    , txt2: {
        fontFamily: fonts.secondary[600],
        fontSize: 14,
        marginBottom: 20,
        color: colors.primary,
    },
    txtLogo: {
        fontFamily: fonts.secondary[600],
        fontSize: 25,
        marginBottom: 5,
        color: colors.white,
    }, txtLogo2: {
        fontFamily: fonts.secondary[400],
        fontSize: 18,
        color: colors.primary,
    }

})