import { Platform, Pressable, Text, View } from 'react-native';
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
  const archiveEntrenamiento = useGymStore(
    (state) => state.archiveEntrenamiento
  );

  const handleArchive = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    archiveEntrenamiento(id);
    router.replace('/archivados');
  };

  const handleDelete = async () => {
    const confirmDelete =
      Platform.OS === 'web'
        ? window.confirm('¿Seguro que quieres eliminar este entrenamiento?')
        : true;

    if (Platform.OS === 'web' && !confirmDelete) return;

    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    deleteEntrenamiento(id);
    router.replace('/entrenamientos');
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
        options={{
          headerShown: true,
          title: 'Detalle de entrenamiento',
          headerLeft: () => (
            <Pressable onPress={() => router.replace('/entrenamientos')}>
              <Text style={{ fontSize: 24, marginLeft: 10 }}>←</Text>
            </Pressable>
          ),
        }}
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
          onPress={handleArchive}
          style={{
            backgroundColor: '#64748b',
            padding: 16,
            borderRadius: 14,
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '700' }}>
            Archivar entrenamiento
          </Text>
        </Pressable>

        <Pressable
          onPress={handleDelete}
          style={{
            backgroundColor: '#dc2626',
            padding: 16,
            borderRadius: 14,
            alignItems: 'center',
            marginTop: 12,
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