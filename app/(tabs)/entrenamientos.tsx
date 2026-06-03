// Componentes básicos de React Native
import { View, Text } from 'react-native';

// Pantalla que muestra el historial de entrenamientos registrados
export default function EntrenamientosScreen() {
  return (
    // Contenedor con fondo claro y padding lateral
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      {/* Título de la sección */}
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Entrenamientos
      </Text>

      {/* Tarjeta de ejemplo: sesión de pierna */}
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16, marginBottom: 15 }}>
        {/* Tipo o nombre del entrenamiento */}
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Pierna</Text>
        {/* Duración y notas breves */}
        <Text style={{ color: '#64748b', marginTop: 6 }}>45 minutos · Buenas sensaciones</Text>
      </View>

      {/* Tarjeta de ejemplo: sesión de pecho y tríceps */}
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Pecho y tríceps</Text>
        <Text style={{ color: '#64748b', marginTop: 6 }}>60 minutos · Entrenamiento intenso</Text>
      </View>
    </View>
  );
}
