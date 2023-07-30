import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { general } from "../styles/General";
import { Destacados } from "./common/Destacados/Destacados";
import { FypEventos } from "./common/Eventos/FypEventos";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home() {

  const [cat, setCat] = useState();
  const DatosCat = async () => {
    const cate = await AsyncStorage.getItem("cat");
    setCat(cate);
  };

  useEffect(() => {
    DatosCat();
  }, [DatosCat]);

  return (
    <View style={general.container}>
      <Text style={general.tittleText}>Inicio</Text>
      <Text>{cat ? cat : "No hay p"}</Text>
      <FypEventos cat={cat} />
    </View>
  );
}
