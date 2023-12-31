import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import axios from "axios";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { base } from "../../API/apiurls";

export default function Login({navigation}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${base}/login`, {
        username,
        password,
      });
      await AsyncStorage.setItem('username', response.data.Username);
      await AsyncStorage.setItem('token', response.data.token);
      console.log(response.data.token);
      navigation.navigate('Redirigir')
    } catch (error) {
      setError("Error en la autenticacion");
      console.log("Error en la autenticacion", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: 240, // Ancho del 80% del contenedor
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
  },
});
