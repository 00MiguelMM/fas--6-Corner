import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import ObjetivoCard from '../../components/items/ObjetivoCard';
import { useGymStore } from '../../store/gymStore';

export default function ObjetivosScreen() {
  const objetivos = useGymStore((state) => state.objetivos);

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Objetivos
      </Text>

      <FlashList
        data={objetivos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ObjetivoCard objetivo={item} />}
        ListEmptyComponent={
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>
              Aún no tienes objetivos
            </Text>
            <Text style={{ color: '#64748b', marginTop: 6 }}>
              Cuando crees un objetivo, aparecerá aquí.
            </Text>
          </View>
        }
      />
    </View>
  );
}