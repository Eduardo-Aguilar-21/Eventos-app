import React from "react";
import { ScrollView, Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { general } from "../../../styles/General";
import { Button, Card } from "react-native-elements";
import { ItemAsistir } from "./ItemAsistir";

export function Asistir() {
  const handleAlerta = () => {
    alert("Alerta");
  };

  return (
    <ScrollView>
      <View style={general.container}>
        <ItemAsistir />
        <ItemAsistir />
        <ItemAsistir />
        <ItemAsistir />
        <ItemAsistir />
        <ItemAsistir />
        <ItemAsistir />
        <ItemAsistir />
      </View>
    </ScrollView>
  );
}
