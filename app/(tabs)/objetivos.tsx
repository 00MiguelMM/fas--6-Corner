// Componentes básicos de React Native
import { View, Text } from 'react-native';

// Pantalla que muestra los objetivos o metas del usuario
export default function ObjetivosScreen() {
  return (
    // Contenedor con fondo claro y padding lateral
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      {/* Título de la sección */}
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Objetivos
      </Text>

      {/* Tarjeta de ejemplo: objetivo de fuerza en press banca */}
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16, marginBottom: 15 }}>
        {/* Nombre del objetivo */}
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Subir press banca</Text>
        {/* Meta concreta a alcanzar */}
        <Text style={{ color: '#64748b', marginTop: 6 }}>Objetivo: llegar a 80 kg</Text>
      </View>

      {/* Tarjeta de ejemplo: objetivo de constancia */}
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Mejorar constancia</Text>
        <Text style={{ color: '#64748b', marginTop: 6 }}>Entrenar mínimo 4 días por semana</Text>
      </View>
    </View>
  );
}
