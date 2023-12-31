import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native"; // Importa FlatList
import { general } from "../../../styles/General";
import { Text } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { Item } from "./Item";
import { useListarElementos } from "../../../hooks/useListar";
import { categoriaURL } from "../../../API/apiurls";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Categorias() {
  const [categorias, setCategorias] = useState([]);

  const ListarCategorias = useListarElementos(`${categoriaURL}`, setCategorias);

  useEffect(() => {
    ListarCategorias();
    AsyncStorage.removeItem('cat');
  }, [ListarCategorias]);

  // Divide el arreglo de categorías en grupos de 2 elementos por fila
  const dataByRow = [];
  for (let i = 0; i < categorias.length; i += 2) {
    dataByRow.push(categorias.slice(i, i + 2));
  }

  return (
    <View style={general.container}>
      <FlatList
        data={dataByRow}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.rowContainer}>
            {item.map((categoria) => (
              <Item key={categoria.id} ide={categoria.id} nombre={categoria.nombre} icono={categoria.icono} />
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
