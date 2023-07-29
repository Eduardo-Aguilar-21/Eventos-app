import React from 'react'
import { View } from 'react-native';
import { general } from '../styles/General';
import { Text } from 'react-native';

export function Categorias(){
    return(
        <View style={general.container}>
            <Text style={general.tittleText}>Categorias</Text>
        </View>
    );
}