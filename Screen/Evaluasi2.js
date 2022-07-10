import { StyleSheet, Text, Dimensions, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import { colors, fonts } from '../utils'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Evaluasi2() {

    const lebarDevice = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    const [soal, setSoal] = useState([
        {
            "pertanyaan": "Berdasarkan cerita “Empat Sekawan”, apakah tema dari cerita tersebut….",
            "a": "a.	Percintaan",
            "b": "b.	Persahabatan",
            "c": "c.	Kesombongan",
            "d": "d.	Pendidikan",
            "betul": "b"
        },
        {
            "pertanyaan": "Dimanakah latar tempat dari cerita tersebut adalah….",
            "a": "a.	Di Kota",
            "b": "b.	Di Desa",
            "c": "c.	Di Hutan",
            "d": "d.	Di Laut",
            "betul": "c"
        },
        {
            "pertanyaan": "Berikut tokoh-tokoh yang ada pada cerita tersebut, kecuali…",
            "a": "a.	Si Rusa",
            "b": "b.	Si Gagak",
            "c": "c.	Si Tikus",
            "d": "d.	Si Semut",
            "betul": "d"
        },
        {
            "pertanyaan": "Tergolong apakah watak tokoh Si Gagak pada cerita tersebut….",
            "a": "a.	Protagonis",
            "b": "b.	Antagonis",
            "c": "c.	Tritagonis",
            "d": "d.	Humoris",
            "betul": "a"
        },
        {
            "pertanyaan": "Apa alur yang digunakan dalam cerita “Empat Sekawan”….",
            "a": "a.	Alur Mundur",
            "b": "b.	Alur Campuran",
            "c": "c.	Alur Maju",
            "d": "d.	Alur Maju Mundur",
            "betul": "c"
        },
        {
            "pertanyaan": "Apakah pesan moral yang terkandung dalam ceita “Empat Sekawan”….",
            "a": "a.	Kita tidak boleh keras kepala",
            "b": "b.	Kita tidak boleh bermalas-malasan",
            "c": "c.	Kita harus bersabar karena setiap kesusahan pasti ada hikmahnya",
            "d": "d.	Kita harus saling tolong-menolong kepada orang lain yang sedang kesusahan",
            "betul": "d"
        },
        {
            "pertanyaan": "Apa yang terjadi pada si Rusa dalam cerita tersebut….",
            "a": "a.	Rusa pergi meninggalkan sahabatnya",
            "b": "b.	Rusa sedang mencari makan",
            "c": "c.	Rusa terperangkap jaring pemburu",
            "d": "d.	Rusa bermain dengan si tupai",
            "betul": "c"
        },
        {
            "pertanyaan": "Siapakah yang berhasil menemukan si Rusa yang terperangkap di jaring pemburu…",
            "a": "a.	Si Tupai",
            "b": "b.	Si Gagak",
            "c": "c.	Si Kura-Kura",
            "d": "d.	Si Tikus",
            "betul": "b"
        },
        {
            "pertanyaan": "Berikut ini, manakah sikap empat sekawan yang mencerminkan sila ketiga pancasila….",
            "a": "a.	Mereka saling bekerja sama dan bersatu untuk menyelamatkan si Rusa",
            "b": "b.	Mereka selalu berkata jujur dan tidak pernah berbohong",
            "c": "c.	Mereka selalu bekerja keras mengumpulkan makanan ",
            "d": "d.	Mereka tidak mau menolong si Rusa yang sedang kesusahan",
            "betul": "d"
        },
        {
            "pertanyaan": "Berikut ini, gambar manakah yang mencerminkan sikap yang sesuai dengan nilai Pancasila sila ketiga, kecuali….",
            "a": require('../a.png'),
            "b": require('../b.png'),
            "c": require('../c.png'),
            "d": require('../d.png'),
            "betul": "d",

        },

    ]);

    const [jawaban, setJawaban] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
    });

    const [pilih, setPilih] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
    });

    const MySoal = ({ no, tanya, a, b, c, d, jawab }) => {
        return (
            <View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 12
                    }}>{no}. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 12
                    }}>{tanya}</Text>

                </View>

                <View style={{ marginVertical: 5, }}>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'a' ? 1 : 0
                        })

                        setPilih({
                            ...pilih,
                            [no]: a
                        })
                    }} style={pilih[no] == a ? styles.cek : styles.bulat}>

                        {no == 10 && <View style={{
                            flexDirection: 'row'
                        }}><Text style={{
                            paddingRight: 10,
                        }}>a</Text><Image style={pilih[no] == a ? styles.imgOK : styles.imgtxt} source={a} /></View>}

                        {no !== 10 && <Text style={pilih[no] == a ? styles.txtOK : styles.txt}>{a}</Text>}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'b' ? 1 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: b
                        })
                    }} style={pilih[no] == b ? styles.cek : styles.bulat}>
                        {no == 10 && <View style={{
                            flexDirection: 'row'
                        }}><Text style={{
                            paddingRight: 10,
                        }}>b</Text><Image style={pilih[no] == b ? styles.imgOK : styles.imgtxt} source={b} /></View>}
                        {no !== 10 && <Text style={pilih[no] == b ? styles.txtOK : styles.txt}>{b}</Text>}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'c' ? 1 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: c
                        })
                    }} style={pilih[no] == c ? styles.cek : styles.bulat}>
                        {no == 10 && <View style={{
                            flexDirection: 'row'
                        }}><Text style={{
                            paddingRight: 10,
                        }}>c</Text><Image style={pilih[no] == c ? styles.imgOK : styles.imgtxt} source={c} /></View>}

                        {no !== 10 && <Text style={pilih[no] == c ? styles.txtOK : styles.txt}>{c}</Text>}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'd' ? 1 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: d
                        })
                    }} style={pilih[no] == d ? styles.cek : styles.bulat}>
                        {no == 10 && <View style={{
                            flexDirection: 'row'
                        }}><Text style={{
                            paddingRight: 10,
                        }}>d</Text><Image style={pilih[no] == d ? styles.imgOK : styles.imgtxt} source={d} /></View>}
                        {no !== 10 && <Text style={pilih[no] == d ? styles.txtOK : styles.txt}>{d}</Text>}
                    </TouchableOpacity>

                </View>
            </View >

        )
    }

    return (
        <SafeAreaView style={{
            padding: 10,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>


                {soal.map((item, index) => {
                    return (
                        <MySoal no={index + 1} tanya={item.pertanyaan} jawab={item.betul} a={item.a} b={item.b} c={item.c} d={item.d} img={item.image} />
                    )
                })}




            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bulat: {
        padding: 10,
        backgroundColor: colors.white,
        overflow: 'hidden',
        borderWidth: 1,
        marginVertical: 2,
        borderRadius: 10,
        // borderColor: colors.primary
    },
    cek: {
        padding: 10,
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 10,
        borderColor: colors.primary,
        backgroundColor: colors.primary
    },
    txt: {
        fontFamily: fonts.secondary[400],
        color: colors.black,
        fontSize: 12
    },
    txtOK: {
        fontFamily: fonts.secondary[600],
        color: colors.white,
        fontSize: 12
    },
    imgOK: {
        height: 250,
        width: '80%',
        resizeMode: 'contain',
        aspectRatio: 1,
        alignSelf: 'center'
    },
    imgtxt: {
        height: 250,
        width: '80%',
        resizeMode: 'contain',
        aspectRatio: 1,
        alignSelf: 'center'
    }
})