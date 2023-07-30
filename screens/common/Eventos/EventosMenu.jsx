import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { general } from "../../../styles/General";
import { Text } from "react-native";
import { Button, Card, Icon } from "react-native-elements";

import { useListarElementos } from "../../../hooks/useListar";
import { categoriaURL, eventoxcategoria } from "../../../API/apiurls";
import { ItemEvento } from "./ItemEvento";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function EventosMenu() {
  const [categorias, setCategorias] = useState([]);
  const [cat, setCat] = useState(null);
  const [url, setUrl] = useState(null);
  const [showNo, setShowNo] = useState(false);

  const DatosCat = async () => {
    const cate = await AsyncStorage.getItem("cat");
    setCat(cate);
  };

  useEffect(() => {
    DatosCat();
  }, []); // Ejecutamos DatosCat solo una vez al cargar el componente

  useEffect(() => {
    if (cat != null) {
      setUrl(`${eventoxcategoria}${cat}`);
    } else {
      setUrl(`${categoriaURL}`);
    }
  }, [cat]); // Actualizamos la URL cuando cambie el valor de "cat"

  const ListarCategorias = useListarElementos(url, setCategorias);

  useEffect(() => {
    ListarCategorias();
  }, [url, ListarCategorias]); // Asegúrate de incluir "url" en las dependencias

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
            {item.map((categoria, index) => (
              <ItemEvento
                key={categoria.id}
                nombre={
                  cat
                    ? categoria.eventosModel
                      ? categoria.eventosModel.nombre
                      : setShowNo(true)
                    : categoria.nombre
                }
                icono={categoria.icono}
              />
            ))}
          </View>
        )}
      />
      {showNo &&
        <Text>No hay mas elementos</Text>
      }

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
