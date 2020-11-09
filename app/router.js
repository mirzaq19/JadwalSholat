import {createStackNavigator} from '@react-navigation/stack';
import Home from './Beranda';
import React from 'react';
import TentangKami from './TentangKami';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Beranda" 
                component={Home}
                options={{
                    title: 'Jadwal Sholat',
                    headerStyle: {
                        backgroundColor: '#2b8be7',
                    },
                    headerTintColor : '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            />
            <Stack.Screen 
                name="TentangKami" 
                component={TentangKami}
                options={{
                    title: 'Tentang Kami',
                    headerStyle: {
                        backgroundColor: '#2b8be7',
                    },
                    headerTintColor : '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            />
        </Stack.Navigator>
    );
};

export default Navigator;