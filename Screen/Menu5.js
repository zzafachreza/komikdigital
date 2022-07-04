import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Pdf from 'react-native-pdf';
import { colors, fonts } from '../utils';



export default function Menu5() {

    const [halaman, setHalaman] = useState(0);

    // const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    const source = { uri: 'bundle-assets://pdf/menu5.pdf' };
    //const source = {uri:'bundle-assets://test.pdf' };
    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
    //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
    //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};




    return (
        <ImageBackground source={require('../profil.png')} style={{
            flex: 1,
        }} />
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