import React from 'react'
import { Text } from 'react-native';
import { View } from 'react-native';
import { general } from '../styles/General';

export function Inicio() {
    return(
        <View style={general.container}>
            <Text style={general.tittleText}>Inicio</Text>
        </View>
    );
}