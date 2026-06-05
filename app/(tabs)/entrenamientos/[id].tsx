import { Alert, Platform, Pressable, Text, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';

import { useGymStore } from '../../../store/gymStore';

export default function EntrenamientoDetalleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const entrenamiento = useGymStore((state) =>
    state.entrenamientos.find((item) => item.id === id)
  );
  const deleteEntrenamiento = useGymStore(
    (state) => state.deleteEntrenamiento
  );

  const handleDelete = async () => {
    if (Platform.OS === 'web') {
      const confirmDelete = window.confirm(
        '¿Seguro que quieres eliminar este entrenamiento?'
      );

      if (!confirmDelete) return;

      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      deleteEntrenamiento(id);
      router.replace('/entrenamientos');
      return;
    }

    Alert.alert(
      'Eliminar entrenamiento',
      '¿Seguro que quieres eliminar este entrenamiento?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            deleteEntrenamiento(id);
            router.replace('/entrenamientos');
          },
        },
      ]
    );
  };

  if (!entrenamiento) {
    return (
      <>
        <Stack.Screen options={{ headerShown: true, title: 'Detalle' }} />
        <View style={{ flex: 1, padding: 20, backgroundColor: '#f5f7fb' }}>
          <Text>No se ha encontrado el entrenamiento.</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, title: 'Detalle de entrenamiento' }}
      />

      <View style={{ flex: 1, padding: 20, backgroundColor: '#f5f7fb' }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 12 }}>
          {entrenamiento.title}
        </Text>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 14 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>Duración</Text>
          <Text style={{ color: '#64748b', marginTop: 6 }}>
            {entrenamiento.duration} minutos
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            padding: 16,
            borderRadius: 14,
            marginTop: 12,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '600' }}>Notas</Text>
          <Text style={{ color: '#64748b', marginTop: 6 }}>
            {entrenamiento.notes}
          </Text>
        </View>

        <Pressable
          onPress={handleDelete}
          style={{
            backgroundColor: '#dc2626',
            padding: 16,
            borderRadius: 14,
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '700' }}>
            Eliminar entrenamiento
          </Text>
        </Pressable>
      </View>
    </>
  );
}