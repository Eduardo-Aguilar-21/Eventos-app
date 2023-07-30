import React, { useEffect } from "react";

import { Cuenta } from "./screens/Cuenta";
import { Configuracion } from "./screens/Configuracion";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Asistir } from "./screens/common/Asistir/Asistir";
import { Categorias } from "./screens/common/Categorias/Categorias";
import { Home } from "./screens/Home";
import { Notificaciones } from "./screens/common/Notificaciones/Notificaciones";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

export function CustomBottomTabBar() {
  AsyncStorage.removeItem('cat');
  useEffect(() => {
    AsyncStorage.removeItem('cat');
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Categorias"
        component={Categorias}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tags" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Asistir"
        component={Asistir}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="ticket-alt" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Notificaciones"
        component={Notificaciones}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="bell" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Cuenta"
        component={Cuenta}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
