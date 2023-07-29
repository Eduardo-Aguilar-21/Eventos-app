import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { general } from "../../styles/General";
import { useListarElementos } from "../../hooks/useListar";
import { infoURL } from "../../API/apiurls";
import { Button } from "react-native";

export function Redirigir({ navigation }) {
  const [info, setInfo] = useState();
  const [user, setUser] = useState();
  const [showText, setShowText] = useState(false);

  const DatosUser = async () => {
    const token = await AsyncStorage.getItem("token");
    const username = await AsyncStorage.getItem("username");
    setUser(username);
  };

  useEffect(() => {
    DatosUser();
  }, [DatosUser]);

  const ListarInfo = useListarElementos(`${infoURL}${user}`, setInfo);

  useEffect(() => {
    ListarInfo();
  }, [ListarInfo]);

  useEffect(() => {
    const obtenerDatosUser = async () => {
      if (info) {
        await AsyncStorage.setItem("rol", info.rolesModel.nombre);
        navigation.navigate("Inicio");
        setTimeout(() => {
          setShowText(true);
        }, 2000);
      }
    };
    obtenerDatosUser();
  }, [info, navigation]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      setUser("");
      console.log(
        "Sesion Cerrada. Todos los datos eliminados de AsyncStorage."
      );
    } catch (error) {
      console.log("Error al cerrar la sesión:", error);
    }
  };

  return (
    <View style={general.container}>
      <Text style={general.tittleText}>Cargando... </Text>
      {showText && (
        <>
          <Text style={general.tittleText}>
            Algo a fallado en su inico de sesion
          </Text>
          <Text style={general.tittleText}>Por favor cierra sesion </Text>
          <Text style={general.tittleText}>
            y comunicate con tu administrador
          </Text>
          <Button
            title="Cerrar Sesión"
            buttonStyle={general.styleButton}
            titleStyle={general.tittleText}
            onPress={() => handleLogout()}
          />
        </>
      )}
    </View>
  );
}
