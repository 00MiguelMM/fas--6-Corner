import { View, Text } from 'react-native';

export default function EntrenamientosScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Entrenamientos
      </Text>

      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16, marginBottom: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Pierna</Text>
        <Text style={{ color: '#64748b', marginTop: 6 }}>45 minutos · Buenas sensaciones</Text>
      </View>

      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Pecho y tríceps</Text>
        <Text style={{ color: '#64748b', marginTop: 6 }}>60 minutos · Entrenamiento intenso</Text>
      </View>
    </View>
  );
}