import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Item({ nombre, icono, ide }) {
  const navigation = useNavigation();
  const handleVer = async () => {
    const ideString = ide.toString(); 
    await AsyncStorage.setItem('cat', ideString);
    navigation.navigate('Menu');
  };
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>{nombre}</Card.Title>
        <View style={styles.iconContainer}>
          <Icon name={icono} type="font-awesome-5" color="black" size={40} />
        </View>
        <Button
          title="Ver eventos"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={() => handleVer()}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    alignSelf: "center",
  },
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
