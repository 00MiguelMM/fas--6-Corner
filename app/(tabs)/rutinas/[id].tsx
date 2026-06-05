import { Alert, Platform, Pressable, Text, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';

import { useGymStore } from '../../../store/gymStore';

export default function RutinaDetalleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const rutina = useGymStore((state) =>
    state.rutinas.find((item) => item.id === id)
  );
  const deleteRutina = useGymStore((state) => state.deleteRutina);

  const handleDelete = async () => {
    if (Platform.OS === 'web') {
      const confirmDelete = window.confirm(
        '¿Seguro que quieres eliminar esta rutina?'
      );

      if (!confirmDelete) return;

      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      deleteRutina(id);
      router.replace('/rutinas');
      return;
    }

    Alert.alert('Eliminar rutina', '¿Seguro que quieres eliminar esta rutina?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar',
        style: 'destructive',
        onPress: async () => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          deleteRutina(id);
          router.replace('/rutinas');
        },
      },
    ]);
  };

  if (!rutina) {
    return (
      <>
        <Stack.Screen options={{ headerShown: true, title: 'Detalle' }} />
        <View style={{ flex: 1, padding: 20, backgroundColor: '#f5f7fb' }}>
          <Text>No se ha encontrado la rutina.</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
  options={{
    headerShown: true,
    title: 'Detalle de rutina',
    headerLeft: () => (
      <Pressable onPress={() => router.replace('/rutinas')}>
        <Text style={{ fontSize: 24, marginLeft: 10 }}>←</Text>
      </Pressable>
    ),
  }}
/>

      <View style={{ flex: 1, padding: 20, backgroundColor: '#f5f7fb' }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 12 }}>
          {rutina.title}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
          Ejercicios
        </Text>

        {rutina.exercises.map((exercise) => (
          <View
            key={exercise}
            style={{
              backgroundColor: '#fff',
              padding: 14,
              borderRadius: 12,
              marginBottom: 8,
            }}
          >
            <Text>{exercise}</Text>
          </View>
        ))}

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
            Eliminar rutina
          </Text>
        </Pressable>
      </View>
    </>
  );
}