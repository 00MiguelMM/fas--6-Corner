import { View, Text } from 'react-native';
import { Rutina } from '../../types';

interface Props {
  rutina: Rutina;
}

export default function RutinaCard({ rutina }: Props) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        marginBottom: 12,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: '600' }}>
        {rutina.title}
      </Text>

      <Text style={{ color: '#64748b', marginTop: 6 }}>
        {rutina.exercises.length} ejercicios
      </Text>
    </View>
  );
}