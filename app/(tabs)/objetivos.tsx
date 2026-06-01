import { View, Text } from 'react-native';

export default function ObjetivosScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Objetivos
      </Text>

      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16, marginBottom: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Subir press banca</Text>
        <Text style={{ color: '#64748b', marginTop: 6 }}>Objetivo: llegar a 80 kg</Text>
      </View>

      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Mejorar constancia</Text>
        <Text style={{ color: '#64748b', marginTop: 6 }}>Entrenar mínimo 4 días por semana</Text>
      </View>
    </View>
  );
}