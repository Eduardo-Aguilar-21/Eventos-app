import React, { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { general } from "../styles/General";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";


export function Cuenta({navigation}) {
  const [user, setUser] = useState("");

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      setUser("");
      console.log("Sesión cerrada. Todos los datos eliminados de AsyncStorage.");
      navigation.navigate('Login')

    } catch (error) {
      console.log("Error al cerrar la sesión:", error);
    }
  };

  return (
    <View style={general.container}>
      <Text style={general.tittleText}>Cuenta</Text>

      <Button
        title="Cerrar Sesion"
        buttonStyle={general.styleButton}
        titleStyle={general.tittleText}
        onPress={() => handleLogout()}
      />
    </View>
  );
}
