import React from "react";
import { Item } from "../Categorias/Item";
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";
import { ScrollView, StyleSheet, View } from "react-native";
import { general } from "../../../styles/General";
import { ItemDestacado } from "./ItemDestacado";
import { Categorias } from "../Categorias/Categorias";

export function Destacados() {
  const destacados = [
    { nombre: "Destacado1" },
    { nombre: "Destacado2" },
    { nombre: "Destacado3" },
    { nombre: "Destacado4" },
    // Agrega más elementos destacados según tus necesidades
  ];

  const renderItem = ({ item }) => {
    return <ItemDestacado nombre={item.nombre} />;
  };

  return (
    <ScrollView>
      <View style={general.container}>
        <Carousel
          data={destacados}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={200}
        />
      </View>
    </ScrollView>
  );
}
