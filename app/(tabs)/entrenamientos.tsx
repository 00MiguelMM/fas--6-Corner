import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import EntrenamientoCard from '../../components/items/EntrenamientoCard';
import { useGymStore } from '../../store/gymStore';

export default function EntrenamientosScreen() {
  const entrenamientos = useGymStore((state) => state.entrenamientos);

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Entrenamientos
      </Text>

      <FlashList
        data={entrenamientos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EntrenamientoCard entrenamiento={item} />
        )}
        ListEmptyComponent={
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>
              Aún no tienes entrenamientos
            </Text>
            <Text style={{ color: '#64748b', marginTop: 6 }}>
              Cuando registres un entrenamiento, aparecerá aquí.
            </Text>
          </View>
        }
      />
    </View>
  );
}