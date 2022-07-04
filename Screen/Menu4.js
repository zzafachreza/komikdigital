import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';
import Pdf from 'react-native-pdf';
import { colors, fonts } from '../utils';



export default function Menu4() {

    const [halaman, setHalaman] = useState(0);

    // const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    const source = { uri: 'bundle-assets://pdf/menu4.pdf' };
    //const source = {uri:'bundle-assets://test.pdf' };
    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
    //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
    //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};




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
                }}>Gizi Ibu Hamil dan Menyusui</Text>
            </View>
            <Pdf
                enablePaging={true}
                horizontal={true}
                trustAllCerts={false}
                source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                    setHalaman(numberOfPages);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf} />
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