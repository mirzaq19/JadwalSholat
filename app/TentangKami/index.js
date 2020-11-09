import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

const TentangKami = (props) => {
    return (
        <View style={{padding:8}}>
            <Text style={styles.des}>
                {'Aplikasi ini merupakan aplikasi jadwal sholat yang berguna untuk mengetahui jadwal sholat terkini'}
            </Text>
            <Text style={styles.des}>{'Ini merupakan aplikasi yang dibuat sebagai tugas dari LBE Lab MIS'}</Text>
            <Text style={styles.kelompok}>{'Nama Kelompok :'}</Text>
            <Text style={{fontSize:18}}>{'1. M. Auliya Mirzaq Romdloni'}</Text>
            <Text style={{fontSize:18}}>{'2. Husin Muhammad Assegaff'}</Text>

        </View>
    );
}
const styles = StyleSheet.create({
    des:{
        fontSize: 18,
        marginBottom: 15
    },
    kelompok:{
        fontWeight:'bold',
        marginBottom:8,
        fontSize: 18
    }
});

export default TentangKami;