import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';

const Home = (props) => {
    const fetchJadwalSholat = async () => {
        try {
            const apiName =
                'http://api.aladhan.com/v1/hijriCalendarByCity?city=Surabaya&country=Indonesia';
            let response = await fetch(apiName);
            let responseJson = await response.json();
            if (responseJson) {
                setSholatTiming(responseJson.data[0].timings);
                // console.log('sholat timings ->', responseJson.data[0].timings);
            }
        } catch (error) {
            console.log('error ->', error);
        }
    };

    const [sholatTiming, setSholatTiming] = useState([]);
    useEffect(() => {
        fetchJadwalSholat();
    }, []);

    const renderJadwalSholat = (title, time) => (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    paddingVertical: 16,
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: 'gray',
                    marginHorizontal: 13,
                }}>
                <Text style={{ flex: 1, color: 'gray' }}>{title}</Text>
                <Text style={{ color: 'gray' }}>{time}</Text>
            </View>
        </>
    );
    return (
        <View>
            <StatusBar backgroundColor={'#2b8be7'} />
            <View style={styles.banner}>
                <Image
                    source={require('../back.jpg')}
                    style={{ height: 150, width: '100%', opacity: 0.5 }}
                />
                <Text style={styles.tbanner} >{'Halo, kawan'}</Text>
            </View>
            {renderJadwalSholat('Subuh', sholatTiming.Fajr)}
            {renderJadwalSholat('Sunrise', sholatTiming.Sunrise)}
            {renderJadwalSholat('Dzuhur', sholatTiming.Dhuhr)}
            {renderJadwalSholat('Ashar', sholatTiming.Asr)}
            {renderJadwalSholat('Maghrib', sholatTiming.Maghrib)}
            {renderJadwalSholat("Isya'", sholatTiming.Isha)}
            <Text 
                style={styles.tentangkami}
                onPress={() => props.navigation.navigate('TentangKami')}>
                {'Tentang Kami'}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    banner: {
        height: 150,
        width: '100%',
        backgroundColor: '#2b8be7',
        justifyContent: 'center'
    },
    tbanner: {
        position: 'absolute',
        marginLeft: 16,
        color: 'white',
        fontSize: 21,
        fontWeight: 'bold'
    },
    tentangkami:{
        position: 'relative',
        left: '38%',
        marginTop:32,
        color:'gray',
        fontWeight:'bold',
        alignItems: 'center',
        justifyContent:'center'
    }
});

export default Home;