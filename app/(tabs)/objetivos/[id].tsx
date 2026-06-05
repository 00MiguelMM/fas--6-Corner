import { Alert, Platform, Pressable, Text, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';

import { useGymStore } from '../../../store/gymStore';

export default function ObjetivoDetalleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const objetivo = useGymStore((state) =>
    state.objetivos.find((item) => item.id === id)
  );
  const deleteObjetivo = useGymStore((state) => state.deleteObjetivo);

  const handleDelete = async () => {
    if (Platform.OS === 'web') {
      const confirmDelete = window.confirm(
        '¿Seguro que quieres eliminar este objetivo?'
      );

      if (!confirmDelete) return;

      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      deleteObjetivo(id);
      router.replace('/objetivos');
      return;
    }

    Alert.alert(
      'Eliminar objetivo',
      '¿Seguro que quieres eliminar este objetivo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            deleteObjetivo(id);
            router.replace('/objetivos');
          },
        },
      ]
    );
  };

  if (!objetivo) {
    return (
      <>
        <Stack.Screen options={{ headerShown: true, title: 'Detalle' }} />
        <View style={{ flex: 1, padding: 20, backgroundColor: '#f5f7fb' }}>
          <Text>No se ha encontrado el objetivo.</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
  options={{
    headerShown: true,
    title: 'Detalle de objetivo',
    headerLeft: () => (
      <Pressable onPress={() => router.replace('/objetivos')}>
        <Text style={{ fontSize: 24, marginLeft: 10 }}>←</Text>
      </Pressable>
    ),
  }}
/>

      <View style={{ flex: 1, padding: 20, backgroundColor: '#f5f7fb' }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 12 }}>
          {objetivo.title}
        </Text>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 14 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>Meta</Text>
          <Text style={{ color: '#64748b', marginTop: 6 }}>
            {objetivo.target}
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
          <Text style={{ fontSize: 18, fontWeight: '600' }}>Estado</Text>
          <Text
            style={{
              color: objetivo.completed ? '#16a34a' : '#f59e0b',
              marginTop: 6,
            }}
          >
            {objetivo.completed ? 'Completado' : 'Pendiente'}
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
            Eliminar objetivo
          </Text>
        </Pressable>
      </View>
    </>
  );
}