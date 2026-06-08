import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import Animated, { FadeInDown } from 'react-native-reanimated';

import EntrenamientoCard from '../../components/items/EntrenamientoCard';
import { useGymStore } from '../../store/gymStore';

export default function EntrenamientosScreen() {
  const entrenamientos = useGymStore((state) => state.entrenamientos);
  const [search, setSearch] = useState('');

  const filteredEntrenamientos = entrenamientos.filter(
  (entrenamiento) =>
    !entrenamiento.archived &&
    entrenamiento.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Entrenamientos
      </Text>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar entrenamiento..."
        style={{
          backgroundColor: '#ffffff',
          padding: 14,
          borderRadius: 12,
          marginBottom: 16,
        }}
      />

      <FlashList
        data={filteredEntrenamientos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeInDown.delay(index * 80)}>
            <EntrenamientoCard entrenamiento={item} />
          </Animated.View>
        )}
        ListEmptyComponent={
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>
              No hay entrenamientos para mostrar
            </Text>
            <Text style={{ color: '#64748b', marginTop: 6 }}>
              Registra un entrenamiento o prueba otra búsqueda.
            </Text>
          </View>
        }
      />
    </View>
  );
}