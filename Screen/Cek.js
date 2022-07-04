import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../utils'
import { Icon } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import { color } from 'react-native-reanimated'
import { ActivityIndicator } from 'react-native'

export default function Cek({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(false);

    const laki = [44.2,
        48.9,
        52.4,
        55.3,
        57.6,
        59.6,
        61.2,
        62.7,
        64,
        65.2,
        66.4,
        67.6,
        68.6,
        69.6,
        70.6,
        71.6,
        72.5,
        73.3,
        74.2,
        75,
        75.8,
        76.5,
        77.2,
        78,
        78,
        78.6,
        79.3,
        79.9,
        80.5,
        81.1,
        81.7,
        82.3,
        82.8,
        83.4,
        83.9,
        84.4,
        85,
        85.5,
        86,
        86.5,
        87,
        87.5,
        88,
        88.4,
        88.9,
        89.4,
        89.8,
        90.3,
        90.7,
        91.2,
        91.6,
        92.1,
        92.5,
        93,
        93.4,
        93.9,
        94.3,
        94.7,
        95.2,
        95.6,
        96.1]

    const women = [43.6,
        47.8,
        51,
        53.5,
        55.6,
        57.4,
        58.9,
        60.3,
        61.7,
        62.9,
        64.1,
        65.2,
        66.3,
        67.3,
        68.3,
        69.3,
        70.2,
        71.1,
        72,
        72.8,
        73.7,
        74.5,
        75.2,
        76,
        76,
        76.8,
        77.5,
        78.1,
        78.8,
        79.5,
        80.1,
        80.7,
        81.3,
        81.9,
        82.5,
        83.1,
        83.6,
        84.2,
        84.7,
        85.3,
        85.8,
        86.3,
        86.8,
        87.4,
        87.9,
        88.4,
        88.9,
        89.3,
        89.8,
        90.3,
        90.7,
        91.2,
        91.7,
        92.1,
        92.6,
        93,
        93.4,
        93.9,
        94.3,
        94.7,
        95.2
    ]

    const [kirim, setKirim] = useState({
        tanggal_lahir: '',
        tinggi_badan: '',
        jenis_kelamin: ''
    });


    const [pilihJenisKelamin, setPilihJenisKelamin] = useState({
        1: false,
        2: false,
    });

    const getAgeFromBirthday = (birthday) => {
        if (birthday) {
            var totalMonths = moment().diff(birthday, 'months');
            var years = parseInt(totalMonths / 12);
            var months = totalMonths % 12;
            if (months !== 0) {
                return parseFloat(years + '.' + months);
            }
            return years;
        }
        return null;
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.secondary
        }}>
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
                }}>Memeriksa Status Gizi</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    padding: 10
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],

                        marginVertical: 5,
                        color: colors.primary,
                        fontSize: 15
                    }}>Tanggal Lahir</Text>
                    <DatePicker
                        style={{ width: '100%', color: colors.white }}
                        date={kirim.tanggal_lahir}
                        mode="date"
                        placeholder="Masukan tanggal lahir"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                right: 0,
                                top: 4,
                                marginLeft: 5
                            },
                            dateInput: {
                                borderWidth: 1,
                                borderColor: colors.primary,
                                backgroundColor: colors.white,
                                borderRadius: 5,
                                color: colors.white,
                                fontSize: 20,
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {

                            setKirim({
                                ...kirim,
                                tanggal_lahir: date
                            })
                        }}
                    />
                </View>

                <View style={{
                    padding: 10,
                }}>
                    <Text style={{
                        color: colors.primary,
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                        flex: 1,
                    }}>Jenis Kelamin</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>



                        <TouchableOpacity onPress={() => {
                            setPilihJenisKelamin({
                                1: true,
                                2: false,
                            });
                            setKirim({
                                ...kirim,
                                jenis_kelamin: 'Laki-laki'
                            })
                        }



                        } style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: pilihJenisKelamin[1] ? colors.primary : colors.white,
                            flexDirection: 'row',
                            marginVertical: 5,
                            padding: 0,

                        }}>
                            <View style={{
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: pilihJenisKelamin[1] ? colors.primary : colors.white,
                            }}>
                                {pilihJenisKelamin[1] && <Icon type='ionicon' name='checkbox' color={colors.white} size={15} />}

                            </View>

                            <Text style={{
                                margin: 10,
                                textAlign: 'center',
                                fontFamily: fonts.secondary[600],
                                fontSize: 15,
                            }}>Laki-laki</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setPilihJenisKelamin({
                                1: false,
                                2: true,

                            });
                            setKirim({
                                ...kirim,
                                jenis_kelamin: 'Perempuan'
                            })

                        }} style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: pilihJenisKelamin[2] ? colors.primary : colors.white,
                            flexDirection: 'row',
                            marginVertical: 5,
                            marginLeft: 10,
                            padding: 0,

                        }}>
                            <View style={{
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: pilihJenisKelamin[2] ? colors.primary : colors.white,
                            }}>
                                {pilihJenisKelamin[2] && <Icon type='ionicon' name='checkbox' color={colors.white} size={15} />}

                            </View>

                            <Text style={{
                                margin: 10,
                                textAlign: 'center',
                                fontFamily: fonts.secondary[600],
                                fontSize: 15,
                            }}>Perempuan</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{
                    padding: 10
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],

                        marginVertical: 5,
                        color: colors.primary,
                        fontSize: 15
                    }}>Tinggi Badan (Cm)</Text>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <TextInput onChangeText={x => setKirim({
                            ...kirim,
                            tinggi_badan: x
                        })} value={kirim.tinggi_badan} keyboardType='number-pad' placeholder="Masukan tinggi badan" style={{
                            fontFamily: fonts.secondary[600],
                            backgroundColor: colors.white,
                            borderRadius: 5,
                            flex: 1,
                            fontSize: 20,
                            height: 45,
                            paddingLeft: 10,
                        }} />
                        <Image source={require('../rule.png')} style={{
                            width: 35,
                            height: 35,
                            position: 'absolute',
                            right: 5,
                            top: 5,
                        }} />
                    </View>

                    {!loading && <TouchableOpacity onPress={() => {



                        if (kirim.tanggal_lahir.length <= 0) {
                            alert('Maaf tanggal lahir harus di isi !')
                        } else if (kirim.jenis_kelamin.length <= 0) {
                            alert('Maaf jenis kelamin harus di isi !')
                        } else if (kirim.tinggi_badan.length <= 0) {
                            alert('Maaf tinggi badan harus di isi !')
                        } else {
                            setLoading(true);

                            setTimeout(() => {
                                setLoading(false);
                                setResult(true);
                            }, 1200)
                            console.log('==========');

                            // console.log(getAgeFromBirthday(kirim.tanggal_lahir) * 12);

                            if (getAgeFromBirthday(kirim.tanggal_lahir) * 12 > 60) {
                                alert('Maaf Maksimal hanya 60 bulan')
                            } else {
                                var umur_bulan = Math.round(getAgeFromBirthday(kirim.tanggal_lahir) * 12);

                                if (kirim.jenis_kelamin == 'Laki-laki') {
                                    // console.warn('laki', umur_bulan);
                                    let nilai = '';
                                    let detail = '';
                                    setKirim({
                                        ...kirim,
                                        hasil: '+3 D',
                                        detail: 'Tinggi-tinggi'
                                    })

                                    for (let i = 0; i <= 60; i++) {


                                        if (umur_bulan == i) {
                                            // console.log(laki[i]);
                                            for (let x = 0; x <= 12; x++) {
                                                let params = 0;
                                                params += Math.round((laki[i] + (x * 0.95)) * 100) / 100;
                                                console.log(params);
                                                if (params > kirim.tinggi_badan) {

                                                    switch (x) {

                                                        case 0:
                                                            nilai = '-3 SD'
                                                            detail = 'Sangat Pendek (severely stunted)'
                                                            break;
                                                        case 1:
                                                            nilai = '-3 SD'
                                                            detail = 'Pendek (stunted)'
                                                            break;
                                                        case 2:
                                                            nilai = '-2 SD'
                                                            detail = 'Pendek (stunted)'
                                                            break;
                                                        case 3:
                                                            nilai = '-2 SD'
                                                            detail = 'Pendek (stunted)'
                                                            break;
                                                        case 4:
                                                            nilai = '-1 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 5:
                                                            nilai = '-1 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 6:
                                                            nilai = 'Median'
                                                            detail = 'Normal'
                                                            break;
                                                        case 7:
                                                            nilai = 'Median'
                                                            detail = 'Normal'
                                                            break;
                                                        case 8:
                                                            nilai = '1 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 9:
                                                            nilai = '1 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 10:
                                                            nilai = '2 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 11:
                                                            nilai = '2 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 12:
                                                            nilai = '3 SD'
                                                            detail = 'Normal'
                                                            break;

                                                        default:
                                                            nilai = '+3 SD'
                                                            detail = 'Tinggi-tinggi'
                                                            break;
                                                    }
                                                    setKirim({
                                                        ...kirim,
                                                        hasil: nilai,
                                                        detail: detail
                                                    })
                                                    break;

                                                } else {
                                                    // nilai = '3 SD'
                                                    // console.warn('nilai', nilai);
                                                    // break;
                                                }
                                            }

                                            break;

                                        }


                                    }

                                } else {
                                    console.warn('cewe', umur_bulan);

                                    let nilai = '';
                                    let detail = '';
                                    setKirim({
                                        ...kirim,
                                        hasil: '+3 D',
                                        detail: 'Tinggi-tinggi'
                                    })

                                    for (let i = 0; i <= 60; i++) {


                                        if (umur_bulan == i) {
                                            // console.log(laki[i]);
                                            for (let x = 0; x <= 12; x++) {
                                                let params = 0;
                                                params += Math.round((women[i] + (x * 0.95)) * 100) / 100;
                                                console.log(params);
                                                if (params > kirim.tinggi_badan) {

                                                    switch (x) {

                                                        case 0:
                                                            nilai = '-3 SD'
                                                            detail = 'Sangat Pendek (severely stunted)'
                                                            break;
                                                        case 1:
                                                            nilai = '-3 SD'
                                                            detail = 'Pendek (stunted)'
                                                            break;
                                                        case 2:
                                                            nilai = '-2 SD'
                                                            detail = 'Pendek (stunted)'
                                                            break;
                                                        case 3:
                                                            nilai = '-2 SD'
                                                            detail = 'Pendek (stunted)'
                                                            break;
                                                        case 4:
                                                            nilai = '-1 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 5:
                                                            nilai = '-1 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 6:
                                                            nilai = 'Median'
                                                            detail = 'Normal'
                                                            break;
                                                        case 7:
                                                            nilai = 'Median'
                                                            detail = 'Normal'
                                                            break;
                                                        case 8:
                                                            nilai = '1 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 9:
                                                            nilai = '1 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 10:
                                                            nilai = '2 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 11:
                                                            nilai = '2 SD'
                                                            detail = 'Normal'
                                                            break;
                                                        case 12:
                                                            nilai = '3 SD'
                                                            detail = 'Normal'
                                                            break;

                                                        default:
                                                            nilai = '+3 SD'
                                                            detail = 'Tinggi-tinggi'
                                                            break;
                                                    }
                                                    setKirim({
                                                        ...kirim,
                                                        hasil: nilai,
                                                        detail: detail
                                                    })
                                                    break;

                                                } else {
                                                    // nilai = '3 SD'
                                                    // console.warn('nilai', nilai);
                                                    // break;
                                                }
                                            }

                                            break;

                                        }


                                    }
                                }
                            }

                        }

                    }} style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 15,
                        backgroundColor: colors.primary,
                        marginVertical: 20,
                        borderRadius: 5,

                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            color: colors.white,
                            fontSize: 15
                        }}>Periksa Status Gizi</Text>
                    </TouchableOpacity>}

                    {loading && <View style={{
                        padding: 20,
                    }}>
                        <ActivityIndicator color={colors.primary} size="large" /></View>}

                    {result && <View style={{
                        backgroundColor: colors.white,
                        height: 200,
                    }}>
                        <Text style={{
                            padding: 10,
                            backgroundColor: colors.success,
                            textAlign: 'center',
                            color: colors.white,
                            fontSize: 20,
                            fontFamily: fonts.secondary[600]
                        }}>Status Gizi</Text>

                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontFamily: fonts.secondary[400],
                                color: colors.black
                            }}>Tinggi Badan / Umut (TB/U) :</Text>
                            <Text style={{
                                fontSize: 20,
                                color: colors.primary,
                                fontFamily: fonts.secondary[600]
                            }}>{kirim.detail}</Text>
                        </View>
                    </View>}


                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})