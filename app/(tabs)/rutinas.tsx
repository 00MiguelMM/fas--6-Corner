import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import Animated, { FadeInDown } from 'react-native-reanimated';

import RutinaCard from '../../components/items/RutinaCard';
import { useGymStore } from '../../store/gymStore';

export default function RutinasScreen() {
  const rutinas = useGymStore((state) => state.rutinas);
  const [search, setSearch] = useState('');

  const filteredRutinas = rutinas.filter(
  (rutina) =>
    !rutina.archived &&
    rutina.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Mis rutinas
      </Text>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar rutina..."
        style={{
          backgroundColor: '#ffffff',
          padding: 14,
          borderRadius: 12,
          marginBottom: 16,
        }}
      />

      <FlashList
        data={filteredRutinas}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeInDown.delay(index * 80)}>
            <RutinaCard rutina={item} />
          </Animated.View>
        )}
        ListEmptyComponent={
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>
              No hay rutinas para mostrar
            </Text>
            <Text style={{ color: '#64748b', marginTop: 6 }}>
              Crea una rutina o prueba otra búsqueda.
            </Text>
          </View>
        }
      />
    </View>
  );
}