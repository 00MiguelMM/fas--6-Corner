// Componentes básicos de React Native
import { View, Text } from 'react-native';

// Pantalla principal que muestra el listado de rutinas del usuario
export default function RutinasScreen() {
  return (
    // Contenedor con fondo claro y padding lateral
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      {/* Título de la sección */}
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Mis rutinas
      </Text>

      {/* Tarjeta de ejemplo: rutina Push Pull Legs */}
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16, marginBottom: 15 }}>
        {/* Nombre de la rutina */}
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Push Pull Legs</Text>
        {/* Descripción breve en texto secundario */}
        <Text style={{ color: '#64748b', marginTop: 6 }}>Rutina de 5 días</Text>
      </View>

      {/* Tarjeta de ejemplo: rutina Full Body */}
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Full Body</Text>
        <Text style={{ color: '#64748b', marginTop: 6 }}>Rutina de 3 días</Text>
      </View>
    </View>
  );
}
