import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import eventoImage from "../../../images/evento.jpg"; // Importa la imagen desde la ruta correcta

export function ItemEvento({ nombre, icono }) {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title>
          <Text style={styles.cardTitle}>{nombre}</Text>
        </Card.Title>
        <Card.Image>
          <Image source={eventoImage} style={styles.image} />
        </Card.Image>
        <Text>ROck nacional e internacional</Text>
        <Button
          title="Ver eventos"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180, // Ancho personalizado del contenedor
    alignSelf: "center", // Alinear el contenedor al centro horizontalmente
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
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
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
