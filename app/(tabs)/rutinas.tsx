import { View, Text } from 'react-native';

export default function RutinasScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Mis rutinas
      </Text>

      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16, marginBottom: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Push Pull Legs</Text>
        <Text style={{ color: '#64748b', marginTop: 6 }}>Rutina de 5 días</Text>
      </View>

      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Full Body</Text>
        <Text style={{ color: '#64748b', marginTop: 6 }}>Rutina de 3 días</Text>
      </View>
    </View>
  );
}