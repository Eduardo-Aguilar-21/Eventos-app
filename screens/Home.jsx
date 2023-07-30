import React from 'react'
import { Text } from 'react-native';
import { View } from 'react-native';
import { general } from '../styles/General';
import { Destacados } from './common/Destacados/Destacados';
import { FypEventos } from './common/Eventos/FypEventos';

export function Home() {
    return(
        <View style={general.container}>
            <Text style={general.tittleText}>Inicio</Text>
            <FypEventos />
        </View>
    );
}