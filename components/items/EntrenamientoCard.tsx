import { Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';

import { Entrenamiento } from '../../types';

interface Props {
  entrenamiento: Entrenamiento;
}

export default function EntrenamientoCard({ entrenamiento }: Props) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/entrenamientos/${entrenamiento.id}`)}
      style={{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        marginBottom: 12,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: '600' }}>
        {entrenamiento.title}
      </Text>

      <Text style={{ color: '#64748b', marginTop: 6 }}>
        {entrenamiento.duration} minutos
      </Text>
    </Pressable>
  );
}