import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';
import Pdf from 'react-native-pdf';
import { colors, fonts } from '../utils';



export default function Menu2() {

    const [halaman, setHalaman] = useState(0);

    // const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    const source = { uri: 'bundle-assets://pdf/menu2.pdf' };
    //const source = {uri:'bundle-assets://test.pdf' };
    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
    //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
    //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};


    const MyList = ({ no, data }) => {
        return (
            <View style={{
                flexDirection: 'row',
                marginVertical: 2,
            }}>
                <Text style={{

                    fontFamily: fonts.secondary[400],
                    color: colors.black,
                    fontSize: 15
                }}>{no} </Text>
                <Text style={{
                    flex: 1,
                    paddingLeft: 10,
                    maxWidth: '95%',
                    fontFamily: fonts.secondary[400],
                    color: colors.black,
                    fontSize: 13
                }}>{data}</Text>
            </View>
        )
    }

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
                }}>Tujuan Pembelajaran</Text>
            </View>

            <View style={{
                padding: 10,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.black,
                    fontSize: 20,
                    marginVertical: 10,
                }}>Materi 1</Text>
                <MyList no="1." data="Dengan penjelasan guru, siswa mampu mengenal unsur intrinsik cerita dalam dongeng dengan baik." />
                <MyList no="2." data="Setelah membaca dongeng “Anwar Si Pengrajin Kayu” berbantuan media komik, siswa mampu menemukan unsur intrinsik dalam cerita tersebut dengan tepat." />
                <MyList no="3." data="Dengan berdiskusi, siswa mampu mengidentifikasi jenis pekerjaan terkait sosial budaya di wilayahnya dengan rinci." />


                <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.black,
                    fontSize: 20,
                    marginVertical: 10,
                }}>Materi 2</Text>
                <MyList no="1." data="Dengan membaca dongeng “Empat Sekawan” berbantuan media komik, siswa mampu menganalisis contoh perilaku yang mencerminkan sila ketiga Pancasila dengan benar." />
                <MyList no="2." data="Dengan penjelasan guru, siswa mampu mengenal hubungan simbol dengan makna sila ketiga Pancasila dengan tepat" />
                <MyList no="3." data="Setelah mengamati gambar, siswa mampu menentukan contoh sikap dalam kehidupan sehari-hari yang sesuai dengan sila ketiga Pancasila dengan benar." />
            </View>

        </View>
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