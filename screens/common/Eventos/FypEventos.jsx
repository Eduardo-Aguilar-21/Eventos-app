import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native"; // Importa FlatList
import { general } from "../../../styles/General";
import { Text } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { useListarElementos } from "../../../hooks/useListar";
import { categoriaURL } from "../../../API/apiurls";
import { ItemEvento } from "./ItemEvento";
import { Destacados } from "../Destacados/Destacados";
import { Categorias } from "../Categorias/Categorias";
import { EventosMenu } from "./EventosMenu";

export function FypEventos() {
  const [categorias, setCategorias] = useState([]);
  const [showDestacados, setShowDestacados] = useState(true);

  const ListarCategorias = useListarElementos(`${categoriaURL}`, setCategorias);

  useEffect(() => {
    ListarCategorias();
  }, [ListarCategorias]);

  // Divide el arreglo de categorías en grupos de 2 elementos por fila
  const dataByRow = [];
  for (let i = 0; i < categorias.length; i += 2) {
    dataByRow.push(categorias.slice(i, i + 2));
  }

  const handleOcultar = () => {
    if (showDestacados) {
      setShowDestacados(false);
    } else {
      setShowDestacados(true);
    }
  };

  return (
    <ScrollView>
      <View style={general.container}>
        <Button title={showDestacados ? "Ocultar":"Mostrar"} onPress={() => handleOcultar()} />
        {showDestacados && <Destacados />}
        
        <EventosMenu />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
