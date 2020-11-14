import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Button } from 'react-native';
import moment from 'moment';

const Home = (props) => {

    const getTime = () => {
        return moment().format('DD MMMM YYYY, h:mm a');
    }

    const testing = () => {
        return moment().startOf('hour').fromNow();
    }

    const fetchJadwalSholat = async () => {
        try {
            const apiName =
                'http://api.aladhan.com/v1/hijriCalendarByCity?city=Surabaya&country=Indonesia';
            let response = await fetch(apiName);
            let responseJson = await response.json();
            if (responseJson) {
                setSholatTiming(responseJson.data[0].timings);
                console.log('sholat timings ->', responseJson.data[0].timings);
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
        <View>
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
        </View>
    );
    return (
        <View>
            <StatusBar backgroundColor={'#2b8be7'} />
            <View style={styles.banner}>
                <Image
                    source={require('../back.jpg')}
                    style={{ height: 150, width: '100%', opacity: 0.5 }}
                />
                <View style={{position:'absolute'}}>
                    <Text style={styles.tbanner} >{'Halo Kawan'}</Text>
                    <Text style={styles.tbanner} >{getTime()}</Text>
                    {/* <Text style={styles.tbanner} >{testing()}</Text> */}
                </View>
            </View>
            {renderJadwalSholat('Subuh', sholatTiming.Fajr)}
            {renderJadwalSholat('Sunrise', sholatTiming.Sunrise)}
            {renderJadwalSholat('Dzuhur', sholatTiming.Dhuhr)}
            {renderJadwalSholat('Ashar', sholatTiming.Asr)}
            {renderJadwalSholat('Maghrib', sholatTiming.Maghrib)}
            {renderJadwalSholat("Isya'", sholatTiming.Isha)}
            {/* <View>
                <View style={styles.tentangkami}>
                    <Text style={styles.texttk} onPress={() => props.navigation.navigate('TentangKami')}>{'Tentang Kami'}</Text>
                </View>
            </View> */}
            <View style={styles.tentangkami}>
                <Button onPress={()=>props.navigation.navigate('TentangKami')} title="Tentang Kami"></Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    banner: {
        height: 150,
        width: '100%',
        backgroundColor: '#2b8be7',
        justifyContent: 'center',
    },
    tbanner: {
        marginLeft: 16,
        color: 'white',
        fontSize: 21,
        fontWeight: 'bold'
    },
    tentangkami:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 25
    },
    texttk:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default Home;