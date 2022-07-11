import { StyleSheet, Text, Dimensions, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import { colors, fonts } from '../utils'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Evaluasi1({ navigation }) {

    const lebarDevice = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    const [soal, setSoal] = useState([
        {
            "pertanyaan": "Siapa yang bukan termasuk tokoh dalam cerita “Anwar si Pengrajin Kayu” ……",
            "a": "a.	Roni",
            "b": "b.	Ayah",
            "c": "c.	Anwar",
            "d": "d.	Kakek",
            "betul": "d"
        },
        {
            "pertanyaan": "Siapakah yang membantu Anwar mencari kayu yang ada di hutan…",
            "a": "a.    Nenek",
            "b": "b.    Ibu",
            "c": "c.    Roni",
            "d": "d.    Ayah",
            "betul": "c"
        },
        {
            "pertanyaan": "Bagaimana watak/sifat tokoh Anwar dalam cerita tersebut….",
            "a": "a.	Pemalas",
            "b": "b.	Pekerja Keras",
            "c": "c.	Pembohong",
            "d": "d.	Pendiam",
            "betul": "b"
        },
        {
            "pertanyaan": "Berikut ini merupakan latar tempat dari cerita “Anwar si Pengrajin kayu”, kecuali…",
            "a": "a.	Rumah",
            "b": "b.	Hutan",
            "c": "c.	Sungai",
            "d": "d.	Rumah Sakit",
            "betul": "c"
        },
        {
            "pertanyaan": "Apa tema dari cerita tersebut….",
            "a": "a.	Perjuangan Hidup",
            "b": "b.	Pendidikan",
            "c": "c.	Persahabatan",
            "d": "d.	Percintaan",
            "betul": "a"
        },
        {
            "pertanyaan": "Apa alur yang digunakan dalam cerita “Anwar si Pengrajin Kayu”……",
            "a": "a.	Alur Mundur",
            "b": "b.	Alur Mundur Maju",
            "c": "c.	Alur Maju",
            "d": "d.	Alur Maju Mundur",
            "betul": "c"
        },
        {
            "pertanyaan": "Amanat yang terdapat dalam cerita tersebut adalah…..",
            "a": "a.	Kita tidak boleh sombong kepada orang lain",
            "b": "b.	Kita harus selalu bekerja keras agar bisa meraih cita-cita yang diinginkan ",
            "c": "c.	Kita harus selalu berkata jujur pada orang lain",
            "d": "d.	Kita tidak boleh berbohong kepada orang lain",
            "betul": "b"
        },
        {
            "pertanyaan": "Dari cerita tersebut, pekerjaan apa yang dikerjakan oleh Anwar…..",
            "a": "a.	Penebang pohon",
            "b": "b.	Dokter",
            "c": "c.	Tukang Bangunan",
            "d": "d.	Pengrajin Kayu",
            "betul": "d"
        },
        {
            "pertanyaan": "Tukang kayu termasuk pekerjaan yang menghasilkan….",
            "a": "a.	Barang",
            "b": "b.	Jasa",
            "c": "c.	Pohon",
            "d": "d.	Untung",
            "betul": "a"
        },
        {
            "pertanyaan": "Sebelum kayu diolah menjadi berbagai kerajinan, kayu di dapatkan dari hutan. Bagaimana cara mendapatkan kayu yang ada di hutan tersebut….",
            "a": "a.	Dengan dijual ke pembeli",
            "b": "b.	Dengan menebang pohon",
            "c": "c.	Dengan membakar hutan",
            "d": "d.	Dengan menangkap hewan liar",
            "betul": "b"
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
                        <Text style={pilih[no] == a ? styles.txtOK : styles.txt}>{a}</Text>
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
                        <Text style={pilih[no] == b ? styles.txtOK : styles.txt}>{b}</Text>
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
                        <Text style={pilih[no] == c ? styles.txtOK : styles.txt}>{c}</Text>
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
                        <Text style={pilih[no] == d ? styles.txtOK : styles.txt}>{d}</Text>
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


                <TouchableOpacity onPress={() => {

                    navigation.navigate('Hasil', {
                        jawaban: jawaban
                    })



                }} style={{
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.secondary,
                    borderRadius: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.white,
                        fontSize: 15
                    }}>Lihat Nilai</Text>
                </TouchableOpacity>

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
    }
})