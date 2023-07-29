import React from "react";
import { Inicio } from "./screens/Inicio";
import { Cuenta } from "./screens/Cuenta";
import { Configuracion } from "./screens/Configuracion";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Asistir } from "./screens/Asistir";
import { Categorias } from "./screens/Categorias";

const Tab = createBottomTabNavigator();

export function CustomBottomTabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={Inicio}
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
