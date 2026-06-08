// Navegación por pestañas de expo-router
import { Tabs } from 'expo-router';

// Iconos vectoriales de Ionicons incluidos en Expo
import { Ionicons } from '@expo/vector-icons';

// Layout de las pestañas inferiores
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#64748b',
      }}
    >
      {/* Pestaña principal: listado de rutinas */}
      <Tabs.Screen
        name="rutinas"
        options={{
          title: 'Rutinas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Pestaña: listado de entrenamientos */}
      <Tabs.Screen
        name="entrenamientos"
        options={{
          title: 'Entrenamientos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fitness-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Pestaña: listado de objetivos */}
      <Tabs.Screen
        name="objetivos"
        options={{
          title: 'Objetivos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" size={size} color={color} />
          ),
        }}
      />

      {/* NUEVA pestaña: archivados */}
      <Tabs.Screen
        name="archivados"
        options={{
          title: 'Archivados',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="archive-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Pantalla de detalle de rutina: oculta de la barra */}
      <Tabs.Screen
        name="rutinas/[id]"
        options={{
          href: null,
        }}
      />

      {/* Pantalla de detalle de entrenamiento: oculta de la barra */}
      <Tabs.Screen
        name="entrenamientos/[id]"
        options={{
          href: null,
        }}
      />

      {/* Pantalla de detalle de objetivo: oculta de la barra */}
      <Tabs.Screen
        name="objetivos/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}