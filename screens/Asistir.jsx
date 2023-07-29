import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { general } from "../styles/General";
import { Button } from "react-native-elements";



export function Asistir() {
    const handleAlerta = () =>{
        alert("Alerta")
    }
  return (
    <View style={general.container}>
      <Text style={general.tittleText}>Asistir</Text>
      <Button
        title = "Alerta"
        buttonStyle={general.styleButton}
        titleStyle={general.textoButton}
        onPress={() => handleAlerta()}
      />
    </View>
  );
}
