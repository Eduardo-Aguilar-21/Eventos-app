import React from "react";
import { Image, StyleSheet } from "react-native";
import { Button, Card } from "react-native-elements";
import eventoImage from "../../../images/evento.jpg"; 

export function ItemDestacado({nombre}) {
  return (
    <>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>{nombre}</Card.Title>
        <Card.Image style={{height: 100}}>
          <Image source={eventoImage} style={styles.image} />
        </Card.Image>
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
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
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
