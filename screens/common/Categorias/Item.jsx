import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Icon } from "react-native-elements";

export function Item({ nombre, icono }) {
  return (
    <>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>{nombre}</Card.Title>
        <View style={styles.iconContainer}>
          <Icon name={icono} type="font-awesome" color="black" size={40} />
        </View>
        <Button
          title="Ver eventos"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    marginBottom: 10, // Agrega un espacio de 10 puntos entre el icono y el botón
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
