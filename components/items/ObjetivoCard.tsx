import { Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';

import { Objetivo } from '../../types';

interface Props {
  objetivo: Objetivo;
}

export default function ObjetivoCard({ objetivo }: Props) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/objetivos/${objetivo.id}`)}
      style={{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        marginBottom: 12,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: '600' }}>
        {objetivo.title}
      </Text>

      <Text style={{ color: '#64748b', marginTop: 6 }}>
        {objetivo.completed ? 'Completado' : 'Pendiente'}
      </Text>
    </Pressable>
  );
}