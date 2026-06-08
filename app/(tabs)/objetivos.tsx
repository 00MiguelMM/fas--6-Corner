import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import Animated, { FadeInDown } from 'react-native-reanimated';

import ObjetivoCard from '../../components/items/ObjetivoCard';
import { useGymStore } from '../../store/gymStore';

export default function ObjetivosScreen() {
  const objetivos = useGymStore((state) => state.objetivos);
  const [search, setSearch] = useState('');

  const filteredObjetivos = objetivos.filter(
  (objetivo) =>
    !objetivo.archived &&
    objetivo.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Objetivos
      </Text>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar objetivo..."
        style={{
          backgroundColor: '#ffffff',
          padding: 14,
          borderRadius: 12,
          marginBottom: 16,
        }}
      />

      <FlashList
        data={filteredObjetivos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeInDown.delay(index * 80)}>
            <ObjetivoCard objetivo={item} />
          </Animated.View>
        )}
        ListEmptyComponent={
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>
              No hay objetivos para mostrar
            </Text>
            <Text style={{ color: '#64748b', marginTop: 6 }}>
              Crea un objetivo o prueba otra búsqueda.
            </Text>
          </View>
        }
      />
    </View>
  );
}