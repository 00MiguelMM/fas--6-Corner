// Navegación por pestañas de expo-router
import { Tabs } from 'expo-router';
// Iconos vectoriales de Ionicons incluidos en Expo
import { Ionicons } from '@expo/vector-icons';

// Layout de las pestañas inferiores: Rutinas, Entrenamientos y Objetivos
export default function TabsLayout() {
  return (
    // Contenedor de pestañas con opciones compartidas
    <Tabs
      screenOptions={{
        // Centra el título en la cabecera de cada pestaña
        headerTitleAlign: 'center',
        // Color del icono y texto de la pestaña activa
        tabBarActiveTintColor: '#2563eb',
        // Color del icono y texto de las pestañas inactivas
        tabBarInactiveTintColor: '#64748b',
      }}
    >
      {/* Pestaña principal: listado de rutinas */}
      <Tabs.Screen
        name="rutinas"
        options={{
          // Título visible en la cabecera y debajo del icono
          title: 'Rutinas',
          // Icono de pesa en la barra de pestañas
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Pestaña: listado de entrenamientos registrados */}
      <Tabs.Screen
        name="entrenamientos"
        options={{
          title: 'Entrenamientos',
          // Icono de fitness/corazón en la barra de pestañas
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fitness-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Pestaña: listado de objetivos del usuario */}
      <Tabs.Screen
        name="objetivos"
        options={{
          title: 'Objetivos',
          // Icono de trofeo en la barra de pestañas
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Pantalla de detalle de rutina: oculta de la barra de pestañas */}
      <Tabs.Screen
        name="rutinas/[id]"
        options={{
          // href: null evita que aparezca como pestaña navegable
          href: null,
        }}
      />

      {/* Pantalla de detalle de entrenamiento: oculta de la barra de pestañas */}
      <Tabs.Screen
        name="entrenamientos/[id]"
        options={{
          href: null,
        }}
      />

      {/* Pantalla de detalle de objetivo: oculta de la barra de pestañas */}
      <Tabs.Screen
        name="objetivos/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
