import { View, Text } from 'react-native';
import { useGymStore } from '../../store/gymStore';

export default function RutinasScreen() {
  const rutinas = useGymStore((state) => state.rutinas);

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Mis rutinas
      </Text>

      {rutinas.length === 0 ? (
        <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>
            Aún no tienes rutinas
          </Text>
          <Text style={{ color: '#64748b', marginTop: 6 }}>
            Cuando crees una rutina, aparecerá aquí.
          </Text>
        </View>
      ) : (
        rutinas.map((rutina) => (
          <View
            key={rutina.id}
            style={{
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 16,
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: '600' }}>
              {rutina.title}
            </Text>

            <Text style={{ color: '#64748b', marginTop: 6 }}>
              {rutina.exercises.length} ejercicios
            </Text>
          </View>
        ))
      )}
    </View>
  );
}