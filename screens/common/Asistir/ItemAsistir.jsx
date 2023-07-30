import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Card } from "react-native-elements";

export function ItemAsistir() {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title>Evento 1</Card.Title>
      <Text>Detalles</Text>
      <Button title={"Ver evento"} />
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
  },
});
